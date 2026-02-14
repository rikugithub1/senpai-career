# 📁 Senpai Career - Complete Project Structure

## 🗺️ Visual Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                      BROWSER (localhost:3000)                    │
│                                                                  │
│  ┌────────────────────────────────────────────────────────┐    │
│  │                    app/layout.tsx                       │    │
│  │  (Wraps EVERYTHING - runs once on app start)           │    │
│  │                                                         │    │
│  │  ┌─────────────────────────────────────────────────┐  │    │
│  │  │         <ThemeProvider>                         │  │    │
│  │  │  (Provides: theme, toggleTheme)                 │  │    │
│  │  │                                                  │  │    │
│  │  │  ┌──────────────────────────────────────────┐  │  │    │
│  │  │  │     <LanguageProvider>                   │  │  │    │
│  │  │  │  (Provides: lang, setLang, t)            │  │  │    │
│  │  │  │                                           │  │  │    │
│  │  │  │  ┌───────────────────────────────────┐  │  │  │    │
│  │  │  │  │        <Navbar />                 │  │  │  │    │
│  │  │  │  │  (Shows on EVERY page)            │  │  │  │    │
│  │  │  │  └───────────────────────────────────┘  │  │  │    │
│  │  │  │                                           │  │  │    │
│  │  │  │  ┌───────────────────────────────────┐  │  │  │    │
│  │  │  │  │     {children}                    │  │  │  │    │
│  │  │  │  │  👇 PAGE CONTENT GOES HERE 👇    │  │  │  │    │
│  │  │  │  │                                    │  │  │  │    │
│  │  │  │  │  Examples:                         │  │  │  │    │
│  │  │  │  │  - app/page.tsx                    │  │  │  │    │
│  │  │  │  │  - app/community/page.tsx          │  │  │  │    │
│  │  │  │  │  - app/business/dashboard/page.tsx │  │  │  │    │
│  │  │  │  └───────────────────────────────────┘  │  │  │    │
│  │  │  └──────────────────────────────────────────┘  │  │    │
│  │  └─────────────────────────────────────────────────┘  │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📂 Complete File Structure

```
senpai-career-updated/
│
├── 📄 BEGINNERS_GUIDE.md          ← START HERE! Complete beginner's guide
├── 📄 PROJECT_STRUCTURE.md        ← This file - architecture overview
│
├── 📁 app/                         ← MAIN APPLICATION FOLDER
│   │
│   ├── 📄 layout.tsx               ← [COMMENTED] Root layout (wraps everything)
│   ├── 📄 page.tsx                 ← Homepage (/)
│   ├── 📄 globals.css              ← Global styles + Tailwind v4 config
│   │
│   ├── 📁 components/              ← Reusable components
│   │   │
│   │   ├── 📁 layout/              ← Layout components
│   │   │   ├── 📄 Navbar.tsx       ← Navigation (on every page)
│   │   │   ├── 📄 Footer.tsx       ← Footer (add manually to pages)
│   │   │   └── 📄 DashboardSidebar.tsx
│   │   │
│   │   └── 📁 providers/           ← Context providers (global state)
│   │       ├── 📄 LanguageProvider.tsx  ← [COMMENTED] JP/EN switching
│   │       └── 📄 ThemeProvider.tsx     ← Light/dark mode
│   │
│   ├── 📁 community/               ← Student/OB section
│   │   ├── 📄 page.tsx             ← [COMMENTED] /community
│   │   │
│   │   ├── 📁 login/
│   │   │   └── 📄 page.tsx         ← /community/login
│   │   │
│   │   └── 📁 dashboard/
│   │       ├── 📄 layout.tsx       ← Dashboard layout
│   │       └── 📄 page.tsx         ← /community/dashboard
│   │
│   └── 📁 business/                ← Company section
│       ├── 📄 page.tsx             ← /business
│       │
│       ├── 📁 login/
│       │   └── 📄 page.tsx         ← /business/login
│       │
│       └── 📁 dashboard/
│           ├── 📄 layout.tsx       ← Dashboard layout
│           └── 📄 page.tsx         ← /business/dashboard
│
├── 📁 public/                      ← Static assets (images, fonts)
│
├── 📄 package.json                 ← Dependencies & scripts
├── 📄 tsconfig.json                ← TypeScript config
├── 📄 next.config.ts               ← Next.js config
└── 📄 tailwind.config.js           ← Tailwind CSS config
```

---

## 🚦 Request Flow

### Example: User visits `/community/login`

```
1. Browser: GET /community/login
         ↓
2. Next.js: "Let me find the right file..."
         ↓
3. app/layout.tsx runs first
         ├─ Loads fonts
         ├─ Wraps in <ThemeProvider>
         ├─ Wraps in <LanguageProvider>
         ├─ Renders <Navbar>
         └─ Looks for {children}...
               ↓
4. app/community/login/page.tsx renders
         └─ Returns login form HTML
               ↓
5. Server sends complete HTML to browser
         ↓
6. Browser displays the page!
```

---

## 🎨 How Styling Works

### CSS Variables (Theme System)

Defined in `app/globals.css`:

```css
/* Light theme */
[data-theme="light"] {
  --ink: #111827;        /* Main text color */
  --bg: #ffffff;         /* Background */
  --color-accent: #0abab5; /* Teal accent */
}

/* Dark theme */
[data-theme="dark"] {
  --ink: #f1f5f9;        /* Light text */
  --bg: #0d1b2a;         /* Dark background */
  --color-accent: #0abab5; /* Same accent */
}
```

**Usage in components:**
```tsx
<div style={{ color: "var(--ink)", background: "var(--bg)" }}>
  Text adapts to theme automatically!
</div>
```

### Tailwind Utility Classes

```tsx
<div className="flex items-center gap-4 p-6 rounded-lg">
  {/* flex = display: flex */}
  {/* items-center = align-items: center */}
  {/* gap-4 = gap: 1rem (16px) */}
  {/* p-6 = padding: 1.5rem (24px) */}
  {/* rounded-lg = border-radius: 0.5rem */}
</div>
```

### Pre-built Component Classes

Defined in `app/globals.css` under `@layer components`:

```tsx
<button className="btn btn-accent">Click me</button>
<div className="card">Card content</div>
<span className="tag tag-green">New</span>
```

---

## 🌐 How Bilingual System Works

### Method 1: `<T>` Component (Recommended)

Renders **both** languages, CSS hides the inactive one.

```tsx
import { T } from "@/app/components/providers/LanguageProvider";

<h1><T ja="ログイン" en="Login" /></h1>

// Renders:
<h1>
  <span class="ja-only">ログイン</span>  <!-- Visible when lang="ja" -->
  <span class="en-only">Login</span>     <!-- Visible when lang="en" -->
</h1>
```

**CSS (in globals.css):**
```css
[data-lang="ja"] .en-only { display: none !important; }
[data-lang="en"] .ja-only { display: none !important; }
```

### Method 2: `t()` Function

Returns a **string** based on current language.

```tsx
import { useLang } from "@/app/components/providers/LanguageProvider";

function MyComponent() {
  const { t } = useLang();

  return <input placeholder={t("メールアドレス", "Email")} />;
}
```

### Switching Language

```tsx
import { useLang } from "@/app/components/providers/LanguageProvider";

function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div>
      <button onClick={() => setLang("ja")}>JP</button>
      <button onClick={() => setLang("en")}>EN</button>
      <p>Current: {lang}</p>
    </div>
  );
}
```

---

## 🎯 Key Files to Understand

### Must-Read (Fully Commented)
1. **[app/layout.tsx](app/layout.tsx)** - Understand the root structure
2. **[app/components/providers/LanguageProvider.tsx](app/components/providers/LanguageProvider.tsx)** - How bilingual works
3. **[app/community/page.tsx](app/community/page.tsx)** - Example page structure
4. **[BEGINNERS_GUIDE.md](BEGINNERS_GUIDE.md)** - Complete tutorial

### Important Patterns
5. **[app/components/layout/Navbar.tsx](app/components/layout/Navbar.tsx)** - Client component example
6. **[app/community/login/page.tsx](app/community/login/page.tsx)** - Form handling
7. **[app/globals.css](app/globals.css)** - Theme system & Tailwind config

---

## 🚀 Quick Start Checklist

- [ ] **Read** [BEGINNERS_GUIDE.md](BEGINNERS_GUIDE.md)
- [ ] **Study** the 3 commented files (layout.tsx, LanguageProvider.tsx, community/page.tsx)
- [ ] **Run** `bun run dev` and explore the app at http://localhost:3000
- [ ] **Create** a test page at `app/test/page.tsx`
- [ ] **Experiment** with the `<T>` component
- [ ] **Try** using `useTheme()` and `useLang()` hooks
- [ ] **Build** something small (contact page, about page, etc.)

---

## 💡 Common Patterns You'll See

### Pattern 1: Data at Top, Component Below
```tsx
// Data
const features = [
  { icon: "🔍", ja: "検索", en: "Search" },
  { icon: "📅", ja: "予約", en: "Book" },
];

// Component
export default function MyPage() {
  return (
    <div>
      {features.map((f, i) => (
        <div key={i}>{f.icon}</div>
      ))}
    </div>
  );
}
```

### Pattern 2: CSS Variables + Tailwind
```tsx
<div
  className="rounded-lg px-4 py-2"
  style={{ background: "var(--bg)", color: "var(--ink)" }}
>
  Best of both worlds!
</div>
```

### Pattern 3: Bilingual Content
```tsx
<h1>
  <T ja="日本語タイトル" en="English Title" />
</h1>
```

### Pattern 4: Responsive Layout
```tsx
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
</div>
```

---

## 🎓 Next Steps

1. **Read the commented code** - Open the 3 annotated files and read them top to bottom
2. **Run the app** - `bun run dev` and click around
3. **Make a test page** - Create `app/test/page.tsx` and experiment
4. **Modify existing pages** - Change text, colors, layouts
5. **Build a real feature** - Add a new section or page

---

## 📚 Resources

- **Next.js Docs:** https://nextjs.org/docs
- **React Hooks:** https://react.dev/reference/react
- **Tailwind CSS:** https://tailwindcss.com/docs
- **TypeScript:** https://www.typescriptlang.org/docs

---

**You're ready to start coding! 🎉**

Remember: The best way to learn is by doing. Start small, experiment, and don't be afraid to break things!
