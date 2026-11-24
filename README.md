# 奶昔连接指南

独立静态信息站；非奶昔或飞猴云官方运营网站。预定地址为 `https://naixijc.github.io/`，只有组织建立、仓库创建与部署成功后才能视为上线。

## 维护

编辑 `content.json` 中的正文和通知数据，执行 `node build.mjs` 与 `node check.mjs`。发布使用 `.github/workflows/deploy.yml`，公开源代码不应含密码、订阅密钥等资料。

维护通知正文已按用户确认保存；`maintenanceConfirmed` 当前为 `false`，不能在未确认维护事实时改为 `true`。注册、服务通道及下载入口指向飞猴云，并在页面说明目的地。

Google/Bing 的公开验证标签填入 `verification` 后持久生成。实际验证与地图提交需要上线后执行，源码中的空值不是验证成功。

`preview.mjs` 仅供本地检查：`node preview.mjs`。它不参与线上部署。

## 当前验证边界

8 页生成与静态检查通过；32 组宽度检查未见溢出。手机菜单展开与页面跳转、弹窗等待结束关闭已实际操作。手机设备页和文章、平板文章与桌面首页已视觉审阅。真实设备、Safari、正式域名、GSC/Bing 尚未验证。

与首站比较的原始结果在 `docs/github-pages-brand-sites/naixi-comparison.json`；片段检测是项目内部口径，不等于搜索引擎去重或排名保证。
