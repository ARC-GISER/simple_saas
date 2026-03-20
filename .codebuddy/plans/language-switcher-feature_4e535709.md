---
name: language-switcher-feature
overview: 在系统右上角增加语言切换功能，支持英文、中文、日文、韩文切换，保持与主题切换组件一致的UI风格
todos:
  - id: create-i18n-dict
    content: 创建翻译字典 lib/i18n/dict.ts
    status: completed
  - id: create-i18n-context
    content: 创建语言上下文 lib/i18n/context.tsx
    status: completed
    dependencies:
      - create-i18n-dict
  - id: create-language-switcher
    content: 创建语言切换组件 components/language-switcher.tsx
    status: completed
    dependencies:
      - create-i18n-context
  - id: create-providers
    content: 创建 Providers 组件整合 providers
    status: completed
    dependencies:
      - create-language-switcher
  - id: update-header
    content: 更新 Header 组件添加语言切换按钮
    status: completed
    dependencies:
      - create-providers
  - id: update-layout
    content: 更新 layout.tsx 使用 Providers
    status: completed
    dependencies:
      - create-providers
---

## 用户需求

- 在系统页面右上角增加语言切换功能
- 支持英文(English)、中文(中文)、日文(日本語)、韩文(한국어)四种语言切换
- 保持UI组件风格与现有的ThemeSwitcher一致（使用DropdownMenu组件）
- 语言设置需持久化保存

## 功能要求

- 点击语言切换按钮显示下拉菜单，显示国旗图标和语言名称
- 选择语言后立即切换页面文字语言
- 语言设置保存到localStorage，刷新后保持
- 首次访问时自动检测浏览器语言

## 技术方案

### 技术选型

- React Context API - 管理全局语言状态
- localStorage - 持久化语言设置
- navigator.language - 浏览器语言检测
- 与现有 next-themes 方案保持一致

### 实现架构

#### 1. 翻译字典 (lib/i18n/dict.ts)

- 定义 Language 类型: `"en" | "zh" | "ja" | "ko"`
- 导出 languageNames 和 languageFlags 映射
- 创建翻译文本字典对象

#### 2. 语言上下文 (lib/i18n/context.tsx)

- LanguageProvider 组件管理语言状态
- useLanguage hook: 获取/设置当前语言
- useTranslation hook: 获取翻译文本函数
- 初始化时优先读取localStorage，无则检测浏览器语言

#### 3. 语言切换组件 (components/language-switcher.tsx)

- 参考 ThemeSwitcher 的UI实现
- 使用 DropdownMenu 系列组件
- 使用 lucide-react 的 Languages 图标
- 显示国旗emoji + 语言名称

#### 4. Providers整合 (components/providers.tsx)

- 封装 ThemeProvider 和 LanguageProvider
- 解决服务端RootLayout直接嵌套客户端Provider的问题

### 目录结构

```
lib/i18n/
  dict.ts        # [NEW] 翻译字典
  context.tsx    # [NEW] 语言上下文和hooks
components/
  language-switcher.tsx  # [NEW] 语言切换组件
  providers.tsx         # [NEW] 整合Providers
  header.tsx           # [MODIFY] 添加语言切换按钮
app/
  layout.tsx           # [MODIFY] 使用Providers包裹
```