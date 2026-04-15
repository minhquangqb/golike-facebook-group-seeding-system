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
        text: 'Groups đợt 1 (1-10)',
        collapsed: true,
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
      {
        text: 'Nhóm 1 - Kéo user mới (11-20)',
        collapsed: true,
        items: [
          { text: '11. Kiếm tiền online - Không cần vốn', link: '/groups/11-kiem-tien-online-2026-khong-can-von' },
          { text: '12. Việc làm online tại nhà uy tín', link: '/groups/12-viec-lam-online-tai-nha-uy-tin' },
          { text: '13. Kiếm tiền online cho sinh viên', link: '/groups/13-kiem-tien-online-cho-sinh-vien' },
          { text: '14. Cộng đồng kiếm tiền online VN', link: '/groups/14-cong-dong-kiem-tien-online-viet-nam' },
          { text: '15. MMO Việt Nam', link: '/groups/15-mmo-viet-nam-kiem-tien-online' },
          { text: '16. Việc làm online uy tín 2026', link: '/groups/16-viec-lam-online-uy-tin-2026' },
          { text: '17. Kiếm tiền TikTok cho người mới', link: '/groups/17-kiem-tien-tiktok-cho-nguoi-moi' },
          { text: '18. Học kiếm tiền online từ A-Z', link: '/groups/18-hoc-kiem-tien-online-tu-a-z' },
          { text: '19. Kiếm tiền online - Không cần KN', link: '/groups/19-kiem-tien-online-khong-can-kinh-nghiem' },
          { text: '20. Hội những người muốn kiếm tiền', link: '/groups/20-hoi-nhung-nguoi-muon-kiem-tien-online' },
        ],
      },
      {
        text: 'Nhóm 2 - Tool / Tăng trưởng (21-30)',
        collapsed: true,
        items: [
          { text: '21. Tăng follow TikTok miễn phí 2026', link: '/groups/21-tang-follow-tiktok-mien-phi-2026' },
          { text: '22. Tăng like Facebook giá rẻ uy tín', link: '/groups/22-tang-like-facebook-gia-re-uy-tin' },
          { text: '23. Tăng sub YouTube nhanh & an toàn', link: '/groups/23-tang-sub-youtube-nhanh-an-toan' },
          { text: '24. Tool kiếm tiền online & MMO', link: '/groups/24-tool-kiem-tien-online-mmo' },
          { text: '25. Chia sẻ tool tăng tương tác MXH', link: '/groups/25-chia-se-tool-tang-tuong-tac-mxh' },
          { text: '26. Cộng đồng tăng follow TikTok', link: '/groups/26-cong-dong-tang-follow-tiktok' },
          { text: '27. Hội tăng like - follow - sub', link: '/groups/27-hoi-tang-like-follow-sub' },
          { text: '28. Tool auto TikTok & Facebook', link: '/groups/28-tool-auto-tiktok-facebook' },
          { text: '29. Bí kíp tăng follow TikTok 0đ', link: '/groups/29-bi-kip-tang-follow-tiktok-0d' },
          { text: '30. Cách lên xu hướng TikTok nhanh', link: '/groups/30-cach-len-xu-huong-tiktok-nhanh' },
        ],
      },
      {
        text: 'Backlog',
        collapsed: true,
        items: [
          { text: 'Groups chưa tạo (31-40)', link: '/groups/backlog-groups' },
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
