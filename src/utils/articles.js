export const articles = [
  {
    id: '1',
    title: 'React 19 新特性深度解读',
    content: `React 19 带来了许多令人兴奋的新特性，包括 Server Components、并发渲染优化、useEvent 等。本文将详细介绍这些新特性如何帮助开发者提升开发效率与用户体验。

Server Components 允许你在服务器端渲染部分组件，极大提升了首屏加载速度。并发渲染让 UI 响应更流畅，useEvent 则让事件处理更高效。`,
    category: '前端',
    tags: ['React', '前端', '新特性'],
    author: 'Patrick',
    date: '2024-07-01'
  },
  {
    id: '2',
    title: '苹果发布全新 MacBook Air M4',
    content: `2024 年 6 月，苹果公司正式发布搭载 M4 芯片的 MacBook Air。新款产品拥有更强的性能、更长的续航和更轻薄的机身设计。

M4 芯片采用 3nm 工艺，CPU 性能提升 20%，GPU 性能提升 30%。新机型还支持 Wi-Fi 7 和更快的 Thunderbolt 4 接口。`,
    category: '新闻',
    tags: ['苹果', 'MacBook', '新品'],
    author: 'Apple News',
    date: '2024-06-15'
  },
  {
    id: '3',
    title: '极简主义：让生活与工作更高效',
    content: `极简主义不仅是一种生活方式，更是一种工作哲学。通过减少无效信息和物品，我们可以专注于真正重要的事情。

本文分享了极简主义在日常生活和产品设计中的应用案例，帮助你提升专注力与幸福感。`,
    category: '生活',
    tags: ['极简主义', '效率', '生活方式'],
    author: 'Lily',
    date: '2024-05-20'
  },
  {
    id: '4',
    title: 'iPhone 16 Pro 上手体验与评测',
    content: `iPhone 16 Pro 搭载全新 A18 芯片，影像系统升级，支持 8K 视频录制。屏幕亮度提升，续航更持久。

实际体验中，A18 芯片带来更流畅的多任务处理，ProMotion 屏幕让滑动更顺畅。新一代摄像头在夜景和变焦表现尤为突出。`,
    category: '产品',
    tags: ['iPhone', '评测', '苹果'],
    author: 'TechReview',
    date: '2024-07-10'
  },
  {
    id: '5',
    title: 'OpenAI 发布 GPT-5，AI 进入新纪元',
    content: `OpenAI 于 2024 年 7 月发布了 GPT-5，模型参数规模和推理能力大幅提升。GPT-5 支持多模态输入，能更好地理解和生成文本、图片、音频等多种内容。

业内专家认为，GPT-5 将推动 AI 在医疗、教育、创意等领域的广泛应用。`,
    category: '新闻',
    tags: ['AI', 'OpenAI', 'GPT-5'],
    author: 'AI News',
    date: '2024-07-20'
  },
  {
    id: '6',
    title: '前端性能优化实战：从原理到落地',
    content: `# 前端性能优化实战：从原理到落地

> 作者：Patrick | 2024-07-29

前端性能优化是提升用户体验和产品竞争力的关键环节。本文将结合真实项目经验，系统梳理前端性能优化的核心原理与实战方法，帮助开发者构建高效、流畅的 Web 应用。

## 1. 性能优化的目标与衡量指标

- **首屏加载时间**（FCP、LCP）
- **交互响应速度**（TTI、FID）
- **页面流畅度**（FPS、CLS）

合理的性能指标有助于量化优化效果。

## 2. 资源加载优化

### 2.1 静态资源压缩与合并

- 使用 Webpack、Vite 等工具压缩 JS/CSS/图片资源；
- 合理利用 HTTP/2 多路复用，减少请求数量；
- 图片采用 WebP、AVIF 等高效格式。

### 2.2 懒加载与预加载

- 图片、组件懒加载（如 React.lazy、IntersectionObserver）；
- 关键资源预加载（preload、prefetch）。

## 3. 代码优化与分包

- 按需加载（动态 import）
- 代码分割（SplitChunks）
- Tree Shaking 移除无用代码

## 4. 渲染与交互优化

- 虚拟列表（react-window、react-virtualized）提升长列表性能；
- 使用 requestAnimationFrame 优化动画；
- 避免频繁操作 DOM，使用批量更新。

## 5. 网络与缓存优化

- CDN 加速静态资源分发；
- Service Worker 实现离线缓存与 PWA；
- 利用浏览器缓存策略（Cache-Control、ETag）。

## 6. 性能监控与分析

- 集成 Web Vitals、Lighthouse 监控核心指标；
- 使用 Chrome DevTools、Performance API 分析瓶颈。

## 7. 真实案例：优化前后对比

> 某大型电商首页优化前 LCP 约 4.2s，优化后降至 1.8s，转化率提升 12%。

\`\`\`js
// 图片懒加载示例
const Img = () =&gt; &lt;img loading="lazy" src="/banner.webp" alt="banner" /&gt;;
\`\`\`

## 8. 总结

前端性能优化是系统性工程，需要结合业务场景、技术选型和团队协作持续推进。建议：

1. 明确性能目标，持续监控；
2. 优先优化影响用户体验的关键路径；
3. 善用现代工具和浏览器特性。

---

> 关注前端性能，让每一位用户都能享受丝滑体验！
`,
    category: '前端',
    tags: ['性能优化', '实战', '前端'],
    author: 'Patrick',
    date: '2024-07-29'
  }
];