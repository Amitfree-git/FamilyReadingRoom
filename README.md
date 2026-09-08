# FamilyReadingRoom · 共读山房

家人共读山房——家庭中国经典共读网站。每天一句经典，结合白话解释、人物故事、家庭讨论和小练习。

本仓库使用 `FamilyReadingRoom` 名称，保留原网站的中文界面名称「共读山房」。网站是无需安装依赖的静态 HTML/CSS/JavaScript 应用。

## 首次发布到 GitHub Pages

代码提交成功不等于网站已经上线。仓库管理员需要在 GitHub 网页开启 Pages：

1. 打开 [本仓库的 Pages 设置](https://github.com/Amitfree-git/FamilyReadingRoom/settings/pages)。
2. 在 **Build and deployment → Source** 选择 **Deploy from a branch**。
3. **Branch** 选择 **main**，目录选择 **/docs**，点击 **Save**。
4. 查看 Pages 页面和 Actions 的发布结果。只有部署成功、公开页面可以正常访问，才算上线。

没有设置自定义域名时，预期网址为：

https://amitfree-git.github.io/FamilyReadingRoom/

此地址不是已上线状态的保证。首次开启成功后，正常提交到 `main` 的 `docs/` 目录会触发重新发布。不要把网站发布目录设为仓库根目录。

官方说明：[配置 GitHub Pages 发布来源](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## 本地打开

下载或克隆整个仓库，保持 `docs/` 中四个文件的位置不变，用浏览器打开 `docs/index.html`。不同浏览器对 `file://` 存储的支持可能不同，建议定期导出学习备份。

也可在仓库根目录运行本地静态服务器（需要 Python 3）：

```bash
python3 -m http.server 8000 --bind 127.0.0.1 --directory docs
```

然后打开 `http://127.0.0.1:8000/`。本地服务器只用于预览，不是公网发布。

## 文件结构

```text
FamilyReadingRoom/
├── README.md
├── VERIFICATION.md
└── docs/
    ├── .nojekyll
    ├── index.html     # 页面结构与入口
    ├── styles.css     # 桌面、移动、夜间及打印样式
    ├── content.js     # 全部30课与来源引用
    └── app.js         # 日期轮换、书架、笔记、成员、练习等交互
```

这些文件就是完整的网站源码，不是空壳、占位页面或只含部分课程的演示。页面采用相对资源路径与 hash 路由，例如 `#/lesson/c17`，用于项目子目录部署。

## 已有功能

内置《论语》《孟子》《道德经》《荀子》《庄子》《史记》共30课。每课包括经典原文、共读版与小朋友版白话、字词释义、人物与故事、原意和延伸的区分、家庭讨论、活动建议、练习及出处。

支持书架搜索与筛选、收藏、家庭成员切换、共读笔记、学习日历、备份导出导入、设备朗读、字号调整、夜间模式和打印学习卡。

第一次打开时以当天为第1天，第一课是《论语·宪问》“桓公九合诸侯，不以兵车，管仲之力也。”。之后按设备本地日期轮换，第31天开始循环复习。**本版不是每天联网调用 AI 生成新文章**，没有 API 密钥或后端生成服务。

## 学习记录与隐私

笔记、收藏和进度保存在当前浏览器的 `localStorage`，使用原键名 `gongdu.shanfang.v1`。成员档案不是有密码隔离的账户；使用同一浏览器的人可以查看。

本应用没有将家庭记录上传到 GitHub 的功能。不同设备、浏览器或来源地址的记录不会自动同步。首次从本地 HTML 转到 Pages 网址时，请在旧页面导出备份，再在新网址导入。导入会替换当前全家记录，导入前先备份。

**不要把家庭备份、真实个人资料、密码或 API 密钥提交到这个公开仓库。** 清除浏览器数据可能删除本地记录。

课程资源随网站提供，不依赖第三方 CDN。外部出处链接需要联网；朗读由浏览器或操作系统提供，中文语音是否可用、是否联网取决于设备。此站未配置 Service Worker，不能把已上线版本视为具备可靠离线缓存的 PWA。

## 后续修改

在 `docs/` 内修改相应源码并提交到 `main`。不要将之前发布包中指向旧仓库名 `gongdu-shanfang` 的脚本直接用于本仓库。

测试范围及初始版本的文件校验值见 [VERIFICATION.md](VERIFICATION.md)。
