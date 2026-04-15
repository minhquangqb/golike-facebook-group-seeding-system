# GoLike Facebook Groups System

## Overview
System to manage and scale Facebook Groups for GoLike. Goal: 30 active groups, 10,000+ real members in 30 days, recruit users to work for GoLike, and attract customers to buy seeding jobs.

## Project Context
- This is an operation/growth project, not a SaaS product
- Core workflow: Content creation -> Seeding (like/comment) -> Traffic acquisition
- Detailed SOP reference: `docs/ideal.md`
- Git repo: `git@gitlab.com:dungqb/golike-facebook-group-seeding-system.git`

## Teams & Roles
- **Content team** (1-2 people): Write posts, spin content, publish to groups
- **Seeding team** (1-2 people): Comment, like, join groups
- **Traffic team** (1 person): Pull users from other groups, roaming comments

## Key Metrics (KPI)
- Week 1: 3 groups, 200-500 members/group, >= 10 comments/post
- Week 2: 10 groups, 500-1,000 members/main group
- Week 3-4: 20-30 groups, total 10,000+ members

## Rules
- No direct link spam
- No 100% copied content
- No weak/new accounts
- Each group must have its own style

## Tech Stack
- VitePress: documentation site
- Vercel: hosting/deploy (auto deploy on push)
- TypeScript: for any tool/automation built

## Docs
- All docs are in `docs/` directory (VitePress docs root)
- `docs/index.md`: homepage, `docs/ideal.md`: SOP overview
- `docs/groups/`: individual group plans
- File names: Vietnamese without diacritics, e.g. `01-tao-group.md`
- File content: Vietnamese WITH diacritics (tiếng Việt có dấu)
- Format: header, assignee, timeline, checklist, notes, deliverables
- When adding new docs, update sidebar in `docs/.vitepress/config.ts`

## Development Guidelines
- Use TypeScript for any tool/automation built
- Daily reports follow the form in `docs/ideal.md`
- Any workflow changes must align with the SOP in `docs/ideal.md`
- Local preview: `npm run docs:dev`
- Deploy: push to `master` branch → Vercel auto deploys
