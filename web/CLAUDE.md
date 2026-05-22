@AGENTS.md

## Phase 3 经验规则

- L2/L3 任务必须先技术评估，用户确认后再写代码
- 跨组件联动优先使用 Client Shell + props，不要过早引入 Context
- 状态提升必须拆成"重构 commit"（行为不变）和"功能 commit"（新行为）
- 每个交互独立 commit，每次修改后 lint/build
- 文档收口后再进入下一 Phase
- 不要把 app/page.tsx 改成 'use client'
- CSS 修改只允许在 globals.css 末尾追加，禁止修改现有规则
