<script setup lang="ts">
import { ref, watch } from 'vue'
import { useData, useRoute } from 'vitepress'

const copied = ref(false)
const route = useRoute()
const { frontmatter } = useData()

function copyContent() {
  const raw = frontmatter.value.rawMarkdown
  if (!raw) return

  navigator.clipboard.writeText(raw).then(() => {
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  })
}

watch(() => route.path, () => {
  copied.value = false
})
</script>

<template>
  <button
    v-if="frontmatter.rawMarkdown"
    class="copy-page-btn"
    :class="{ copied }"
    @click="copyContent"
    :title="copied ? 'Đã copy!' : 'Copy markdown'"
  >
    <svg v-if="!copied" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
    <span>{{ copied ? 'Copied!' : 'Copy MD' }}</span>
  </button>
</template>

<style scoped>
.copy-page-btn {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
}

.copy-page-btn:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
}

.copy-page-btn.copied {
  color: var(--vp-c-green-1);
  border-color: var(--vp-c-green-1);
}
</style>
