export type Language = "en" | "zh" | "ja" | "ko";

export const languageNames: Record<Language, string> = {
  en: "English",
  zh: "中文",
  ja: "日本語",
  ko: "한국어",
};

export const languageFlags: Record<Language, string> = {
  en: "🇺🇸",
  zh: "🇨🇳",
  ja: "🇯🇵",
  ko: "🇰🇷",
};

export type DictKey =
  | "home"
  | "features"
  | "pricing"
  | "signIn"
  | "signUp"
  | "signOut"
  | "dashboard"
  | "email"
  | "account"
  | "settings"
  | "profile"
  | "logout"
  | "login"
  | "register"
  | "welcome"
  | "getStarted"
  | "learnMore"
  | "contact"
  | "about"
  | "blog"
  | "docs"
  | "support"
  | "privacy"
  | "terms"
  | "language"
  | "theme"
  | "light"
  | "dark"
  | "system"
  // Home page
  | "heroBadge"
  | "heroTitle"
  | "heroSubtitle"
  | "viewDemo"
  | "noCreditCard"
  | "freeTrial"
  | "everythingYouNeed"
  | "builtWithBest"
  | "ctaTitle"
  | "ctaSubtitle"
  | "startBuilding"
  // Stats
  | "fasterDev"
  | "uiComponents"
  | "typescriptFirst"
  | "support24"
  // Features
  | "featureNextjs"
  | "featureNextjsDesc"
  | "featureSupabase"
  | "featureSupabaseDesc"
  | "featurePayments"
  | "featurePaymentsDesc";

export type TranslationDict = Record<DictKey, string>;

export const translations: Record<Language, TranslationDict> = {
  en: {
    home: "Home",
    features: "Features",
    pricing: "Pricing",
    signIn: "Sign in",
    signUp: "Sign up",
    signOut: "Sign out",
    dashboard: "Dashboard",
    email: "Email",
    account: "Account",
    settings: "Settings",
    profile: "Profile",
    logout: "Log out",
    login: "Login",
    register: "Register",
    welcome: "Welcome",
    getStarted: "Get Started",
    learnMore: "Learn More",
    contact: "Contact",
    about: "About",
    blog: "Blog",
    docs: "Docs",
    support: "Support",
    privacy: "Privacy",
    terms: "Terms",
    language: "Language",
    theme: "Theme",
    light: "Light",
    dark: "Dark",
    system: "System",
    // Home page
    heroBadge: "v1.0 is now live",
    heroTitle: "Ship your SaaS in days, not months.",
    heroSubtitle: "The ultimate Next.js starter kit with Supabase Auth, Creem Payments, and a production-ready dashboard. save 200+ hours of development time.",
    viewDemo: "View Demo",
    noCreditCard: "No credit card required",
    freeTrial: "7-day free trial",
    everythingYouNeed: "Everything you need",
    builtWithBest: "Built with the best modern tech stack.",
    ctaTitle: "Ready to build your next big thing?",
    ctaSubtitle: "Join thousands of developers who are building faster with Simple Saas Starter Kit.",
    startBuilding: "Start Building Now",
    // Stats
    fasterDev: "Faster Development",
    uiComponents: "UI Components",
    typescriptFirst: "TypeScript First",
    support24: "Support",
    // Features
    featureNextjs: "Next.js 14 App Router",
    featureNextjsDesc: "Built on the latest Next.js 14 with Server Components for ultimate performance and SEO.",
    featureSupabase: "Supabase Auth & DB",
    featureSupabaseDesc: "Production-ready authentication and PostgreSQL database setup out of the box.",
    featurePayments: "Global Payments",
    featurePaymentsDesc: "Integrated Creem.io for handling subscriptions, one-time payments, and credits globally.",
  },
  zh: {
    home: "首页",
    features: "功能",
    pricing: "定价",
    signIn: "登录",
    signUp: "注册",
    signOut: "退出登录",
    dashboard: "仪表板",
    email: "邮箱",
    account: "账户",
    settings: "设置",
    profile: "个人资料",
    logout: "退出",
    login: "登录",
    register: "注册",
    welcome: "欢迎",
    getStarted: "开始使用",
    learnMore: "了解更多",
    contact: "联系我们",
    about: "关于",
    blog: "博客",
    docs: "文档",
    support: "支持",
    privacy: "隐私",
    terms: "条款",
    language: "语言",
    theme: "主题",
    light: "浅色",
    dark: "深色",
    system: "跟随系统",
    // Home page
    heroBadge: "v1.0 现已发布",
    heroTitle: "几天内完成 SaaS 开发，而不是几个月",
    heroSubtitle: "终极 Next.js 启动器包，包含 Supabase 认证、Creem 支付和生产级仪表板。节省 200+ 小时开发时间。",
    viewDemo: "查看演示",
    noCreditCard: "无需信用卡",
    freeTrial: "7天免费试用",
    everythingYouNeed: "您需要的一切",
    builtWithBest: "采用最优秀的现代技术栈构建。",
    ctaTitle: "准备好构建下一个重大项目了吗？",
    ctaSubtitle: "加入数千名使用 Simple Saas Starter Kit 更快速开发的开发者。",
    startBuilding: "立即开始构建",
    // Stats
    fasterDev: "开发提速 10 倍",
    uiComponents: "UI 组件",
    typescriptFirst: "TypeScript 优先",
    support24: "全天候支持",
    // Features
    featureNextjs: "Next.js 14 App Router",
    featureNextjsDesc: "基于最新的 Next.js 14 和 Server Components，提供极致性能和 SEO。",
    featureSupabase: "Supabase 认证与数据库",
    featureSupabaseDesc: "开箱即用的生产级认证和 PostgreSQL 数据库配置。",
    featurePayments: "全球支付",
    featurePaymentsDesc: "集成 Creem.io，处理全球订阅、一次性付款和积分。",
  },
  ja: {
    home: "ホーム",
    features: "機能",
    pricing: "料金",
    signIn: "サインイン",
    signUp: "サインアップ",
    signOut: "サインアウト",
    dashboard: "ダッシュボード",
    email: "メール",
    account: "アカウント",
    settings: "設定",
    profile: "プロフィール",
    logout: "ログアウト",
    login: "ログイン",
    register: "登録",
    welcome: "ようこそ",
    getStarted: "始める",
    learnMore: "詳細",
    contact: "お問い合わせ",
    about: "概要",
    blog: "ブログ",
    docs: "ドキュメント",
    support: "サポート",
    privacy: "プライバシー",
    terms: "利用規約",
    language: "言語",
    theme: "テーマ",
    light: "ライト",
    dark: "ダーク",
    system: "システム",
    // Home page
    heroBadge: "v1.0 がリリースされました",
    heroTitle: "数日でSaaSを構築、月ではありません",
    heroSubtitle: "Supabase認証、Creem決済、プロダクション対応ダッシュボードを備えた究極のNext.jsスターターキット。200時間以上の開発時間を節約。",
    viewDemo: "デモを見る",
    noCreditCard: "クレジットカード不要",
    freeTrial: "7日間無料 trial",
    everythingYouNeed: "必要なすべてが揃っています",
    builtWithBest: "最新のテクノロジースタックで構築。",
    ctaTitle: "次の大きなプロジェクトの構築準備はできましたか？",
    ctaSubtitle: "Simple Saas Starter Kitでより速く構築している何千人もの開発者に参加しましょう。",
    startBuilding: "今すぐ構築を開始",
    // Stats
    fasterDev: "高速開発",
    uiComponents: "UIコンポーネント",
    typescriptFirst: "TypeScript ファースト",
    support24: "サポート",
    // Features
    featureNextjs: "Next.js 14 App Router",
    featureNextjsDesc: "最新のNext.js 14とServer Componentsで究極の性能とSEOを実現。",
    featureSupabase: "Supabase 認証とDB",
    featureSupabaseDesc: "本番対応の認証とPostgreSQLデータベースがすぐに使えます。",
    featurePayments: "グローバル決済",
    featurePaymentsDesc: "Creem.ioとの統合で、サブスクリプション、単一支払い、クレジットを世界中に対応。",
  },
  ko: {
    home: "홈",
    features: "기능",
    pricing: "가격",
    signIn: "로그인",
    signUp: "회원가입",
    signOut: "로그아웃",
    dashboard: "대시보드",
    email: "이메일",
    account: "계정",
    settings: "설정",
    profile: "프로필",
    logout: "로그아웃",
    login: "로그인",
    register: "회원가입",
    welcome: "환영",
    getStarted: "시작하기",
    learnMore: "자세히 보기",
    contact: "문의하기",
    about: "정보",
    blog: "블로그",
    docs: "문서",
    support: "지원",
    privacy: "개인정보",
    terms: "이용약관",
    language: "언어",
    theme: "테마",
    light: "라이트",
    dark: "다크",
    system: "시스템",
    // Home page
    heroBadge: "v1.0 출시",
    heroTitle: "며칠 만에 SaaS를 구축하세요, 몇 달이 아니라",
    heroSubtitle: "Supabase 인증, Creem 결제, 프로덕션 준비 대시보드가 포함된终极 Next.js 스타터 키트. 200시간 이상의 개발 시간 절약.",
    viewDemo: "데모 보기",
    noCreditCard: "신용카드 필요 없음",
    freeTrial: "7일 무료 체험",
    everythingYouNeed: "필요한 모든 것",
    builtWithBest: "최고의 최신 기술 스택으로 구축.",
    ctaTitle: "다음 큰 프로젝트를 구축할 준비가 되셨나요?",
    ctaSubtitle: "Simple Saas Starter Kit로 더 빠르게 구축하는 수천 명의 개발자에 합류하세요.",
    startBuilding: "지금 구축 시작",
    // Stats
    fasterDev: "더 빠른 개발",
    uiComponents: "UI 컴포넌트",
    typescriptFirst: "TypeScript 우선",
    support24: "지원",
    // Features
    featureNextjs: "Next.js 14 App Router",
    featureNextjsDesc: "최신 Next.js 14와 Server Components로终极적인 성능과 SEO 달성.",
    featureSupabase: "Supabase 인증 & DB",
    featureSupabaseDesc: "프로덕션 준비 인증과 PostgreSQL 데이터베이스가 즉시 사용 가능.",
    featurePayments: "글로벌 결제",
    featurePaymentsDesc: "Creem.io 통합으로 전 세계 구독, 일회성 결제 및 크레딧 처리.",
  },
};
