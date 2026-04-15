import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'GoLike Facebook Groups System',
  description: 'SOP xây dựng hệ sinh thái Facebook Group cho GoLike',
  lang: 'vi-VN',

  themeConfig: {
    nav: [
      { text: 'Trang chủ', link: '/' },
      { text: 'SOP Tổng quan', link: '/ideal' },
    ],

    sidebar: [
      {
        text: 'Hướng dẫn',
        items: [
          { text: 'Tạo Group', link: '/01-tao-group' },
        ],
      },
      {
        text: 'Danh sách Groups',
        items: [
          { text: 'Kiếm tiền online 2026', link: '/groups/01-kiem-tien-online-2026' },
          { text: 'Việc làm online sinh viên', link: '/groups/02-viec-lam-online-sinh-vien' },
          { text: 'Tool tăng follow TikTok', link: '/groups/03-tool-tang-follow-tiktok' },
          { text: 'Cách lên xu hướng TikTok', link: '/groups/04-cach-len-xu-huong-tiktok' },
          { text: 'Cộng đồng GoLike Việt Nam', link: '/groups/05-cong-dong-golike-viet-nam' },
          { text: 'Buff follow TikTok giá rẻ', link: '/groups/06-buff-follow-tiktok-gia-re' },
          { text: 'Tăng like Facebook thật', link: '/groups/07-tang-like-facebook-that' },
          { text: 'Tăng sub YouTube nhanh', link: '/groups/08-tang-sub-youtube-nhanh' },
          { text: 'Hội review app kiếm tiền', link: '/groups/09-hoi-review-app-kiem-tien' },
          { text: 'Mẹo tăng tương tác Facebook', link: '/groups/10-meo-tang-tuong-tac-facebook' },
        ],
      },
    ],

    search: {
      provider: 'local',
    },

    darkModeSwitchLabel: 'Chế độ',
    darkModeSwitchTitle: 'Chuyển chế độ tối/sáng',
  },
})
