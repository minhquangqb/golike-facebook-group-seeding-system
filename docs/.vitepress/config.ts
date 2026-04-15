import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'GoLike Seeding Docs',
  description: 'SOP xây dựng hệ sinh thái Facebook Group cho GoLike',
  lang: 'vi-VN',

  themeConfig: {
    nav: [
      { text: 'Trang chủ', link: '/' },
      { text: 'SOP Tổng quan', link: '/ideal' },
    ],

    sidebar: [
      {
        text: 'Quy trình thực hiện',
        items: [
          { text: '1. Tạo Group', link: '/01-tao-group' },
        ],
      },
      {
        text: 'Danh sách Groups',
        items: [
          { text: '1. Kiếm tiền online 2026', link: '/groups/01-kiem-tien-online-2026' },
          { text: '2. Việc làm online sinh viên', link: '/groups/02-viec-lam-online-sinh-vien' },
          { text: '3. Tool tăng follow TikTok', link: '/groups/03-tool-tang-follow-tiktok' },
          { text: '4. Cách lên xu hướng TikTok', link: '/groups/04-cach-len-xu-huong-tiktok' },
          { text: '5. Cộng đồng GoLike Việt Nam', link: '/groups/05-cong-dong-golike-viet-nam' },
          { text: '6. Buff follow TikTok giá rẻ', link: '/groups/06-buff-follow-tiktok-gia-re' },
          { text: '7. Tăng like Facebook thật', link: '/groups/07-tang-like-facebook-that' },
          { text: '8. Tăng sub YouTube nhanh', link: '/groups/08-tang-sub-youtube-nhanh' },
          { text: '9. Hội review app kiếm tiền', link: '/groups/09-hoi-review-app-kiem-tien' },
          { text: '10. Mẹo tăng tương tác Facebook', link: '/groups/10-meo-tang-tuong-tac-facebook' },
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
