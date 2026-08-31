# wechat-links

微信公众号「阅读原文」跳转的网页版文章库。

由每日学习工具自动生成：`articles/YYYY-MM-DD.html` 为当天文章网页版
（含全部可点击链接），推送本仓库后由 Cloudflare Pages 自动部署为
`https://<project>.pages.dev/articles/YYYY-MM-DD.html`。

## 目录结构

```
articles/           # 每日生成的网页版文章（自动更新）
scripts/            # 工具脚本
README.md
```

## Cloudflare Pages 部署设置

- 连接此 GitHub 仓库
- 构建命令：留空（纯静态）
- 输出目录：`/`（仓库根目录）
