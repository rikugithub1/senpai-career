# 🚀 Next.js 16 Beginner's Guide for Senpai Career

Welcome! This guide will help you understand the structure and start coding confidently.

---

## 📁 Project Structure Explained

```
senpai-career-updated/
├── app/                          ← ALL your pages and components live here
│   ├── layout.tsx                ← ROOT LAYOUT (wraps everything)
│   ├── page.tsx                  ← Homepage (URL: /)
│   ├── globals.css               ← Global styles (Tailwind v4)
│   │
│   ├── components/               ← Reusable components
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        ← Navigation bar (on every page)
│   │   │   ├── Footer.tsx        ← Footer (add to pages manually)
│   │   │   └── DashboardSidebar.tsx
│   │   │
│   │   └── providers/            ← Context providers (global state)
│   │       ├── LanguageProvider.tsx  ← Japanese/English switching
│   │       └── ThemeProvider.tsx     ← Light/dark mode
│   │
│   ├── community/                ← Student section
│   │   ├── page.tsx              ← URL: /community
│   │   ├── login/
│   │   │   └── page.tsx          ← URL: /community/login
│   │   └── dashboard/
│   │       ├── layout.tsx        ← Layout for /community/dashboard/*
│   │       └── page.tsx          ← URL: /community/dashboard
│   │
│   └── business/                 ← Company section
│       ├── page.tsx              ← URL: /business
│       ├── login/
│       │   └── page.tsx          ← URL: /business/login
│       └── dashboard/
│           ├── layout.tsx        ← Layout for /business/dashboard/*
│           └── page.tsx          ← URL: /business/dashboard
│
├── public/                       ← Static files (images, fonts)
├── node_modules/                 ← Installed packages (don't touch!)
├── package.json                  ← Project dependencies
├── tsconfig.json                 ← TypeScript configuration
├── next.config.ts                ← Next.js configuration
└── tailwind.config.js            ← Tailwind CSS configuration
```

---

## 🎯 How Next.js 16 Routing Works

**File-based routing** = the file structure IS the URL structure!

| File Path | URL | What It Does |
|-----------|-----|--------------|
| `app/page.tsx` | `/` | Homepage |
| `app/community/page.tsx` | `/community` | Community landing page |
| `app/community/login/page.tsx` | `/community/login` | Login page for students and Ob/OG |
| `app/business/dashboard/page.tsx` | `/business/dashboard` | Dashboard for companies |

### 🔑 Key Files:
- **`page.tsx`** = The actual page content (like index.html)
- **`layout.tsx`** = Wraps pages (navbar, footer, providers)

---

## 🧩 Understanding the Key Concepts

### 1. **Server Components vs Client Components**

#### Server Components (default)
```tsx
// app/page.tsx
export default function HomePage() {
  return <h1>Hello</h1>;
}
```
- ✅ Runs on the server
- ✅ Faster, better SEO
- ❌ **Cannot use hooks** (useState, useEffect)
- ❌ **Cannot use browser APIs** (localStorage, window)

#### Client Components (when you need interactivity)
```tsx
"use client";  // ← Add this at the top!

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```
- ✅ Can use React hooks (useState, useEffect, etc.)
- ✅ Can use browser APIs (localStorage, window)
- ✅ Can handle events (onClick, onChange, etc.)
- ❌ Slower, larger bundle size

**Rule of thumb:** Use Server Components by default. Only add `"use client"` when you need:
- State (useState)
- Effects (useEffect)
- Event handlers (onClick)
- Browser APIs (localStorage)

---

### 2. **Context Providers (Global State)**

Your app uses **React Context** to share state across all components.

#### ThemeProvider (Light/Dark Mode)
```tsx
import { useTheme } from "@/app/components/providers/ThemeProvider";

function MyComponent() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
```

#### LanguageProvider (Japanese/English)
```tsx
import { useLang, T } from "@/app/components/providers/LanguageProvider";

function MyComponent() {
  const { lang, setLang, t } = useLang();

  return (
    <>
      {/* Method 1: Component (renders both, CSS hides one) */}
      <T ja="こんにちは" en="Hello" />

      {/* Method 2: Function (returns string) */}
      <p>{t("日本語", "English")}</p>

      {/* Change language */}
      <button onClick={() => setLang("en")}>English</button>
    </>
  );
}
```

---

### 3. **Styling with Tailwind v4**

Tailwind uses **utility classes** instead of writing CSS.

```tsx
<div className="flex items-center gap-4 p-6 rounded-lg bg-white">
  <h1 className="text-2xl font-bold">Hello</h1>
</div>
```

Common patterns in this project:
```tsx
// Spacing
className="p-6"          // padding: 24px
className="px-4 py-2"    // padding: 16px 8px
className="gap-4"        // gap: 16px

// Layout
className="flex"         // display: flex
className="grid"         // display: grid
className="max-w-275"    // max-width: 1100px (275 × 4)

// Typography
className="text-sm"      // font-size: 0.875rem
className="font-bold"    // font-weight: 700

// Colors (using CSS variables)
style={{ color: "var(--ink)" }}       // Text color
style={{ background: "var(--bg)" }}   // Background color
```

#### CSS Variables (Custom Theme Colors)
Defined in `app/globals.css`:
```css
--ink        → Main text color
--ink2       → Secondary text
--ink3       → Tertiary text
--bg         → Background color
--bg2        → Secondary background
--brd        → Border color
--color-accent → Accent color (teal)
```

---

## ✍️ How to Create a New Page

### Example: Create a "Contact" page at `/contact`

**Step 1:** Create the file
```tsx
// app/contact/page.tsx
import { T } from "@/app/components/providers/LanguageProvider";
import Footer from "@/app/components/layout/Footer";

export default function ContactPage() {
  return (
    <div style={{ paddingTop: "var(--nav-height)" }}>
      {/* Add top padding to avoid navbar overlap */}

      <section className="px-6 py-12">
        <div className="mx-auto max-w-160">
          <h1 className="mb-4 text-3xl font-bold">
            <T ja="お問い合わせ" en="Contact Us" />
          </h1>
          <p className="text-sm" style={{ color: "var(--ink2)" }}>
            <T
              ja="ご質問やご意見がありましたら、お気軽にお問い合わせください。"
              en="If you have any questions or feedback, please contact us."
            />
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
```

**Step 2:** Access it at `http://localhost:3000/contact` ✅

---

## 🎨 How to Add a New Component

### Example: Create a reusable Button component

```tsx
// app/components/ui/Button.tsx
"use client";  // Need this because we use onClick

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost";
}

export default function Button({ children, onClick, variant = "primary" }: ButtonProps) {
  const baseClass = "btn";
  const variantClass = variant === "primary" ? "btn-accent" : "btn-ghost";

  return (
    <button className={`${baseClass} ${variantClass}`} onClick={onClick}>
      {children}
    </button>
  );
}
```

**Usage:**
```tsx
import Button from "@/app/components/ui/Button";

function MyPage() {
  return (
    <Button onClick={() => alert("Clicked!")}>
      Click me
    </Button>
  );
}
```

---

## 🚀 Common Development Commands

```bash
# Start development server
bun run dev          # Open http://localhost:3000

# Build for production
bun run build        # Creates optimized production build

# Run linter
bun run lint         # Check code for errors

# Start production server
bun run start        # Serves the production build
```

---

## 🎯 Best Practices for Beginners

### 1. **Component Organization**
```tsx
// ✅ GOOD: Small, focused components
function UserCard({ name, email }) {
  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

// ❌ BAD: 500-line component doing everything
```

### 2. **TypeScript Types**
```tsx
// ✅ GOOD: Define interfaces for props
interface UserCardProps {
  name: string;
  email: string;
}

function UserCard({ name, email }: UserCardProps) {
  // ...
}

// ❌ BAD: Using 'any' everywhere
function UserCard({ name, email }: any) {
  // ...
}
```

### 3. **Import Paths**
```tsx
// ✅ GOOD: Use @ alias (defined in tsconfig.json)
import { T } from "@/app/components/providers/LanguageProvider";

// ❌ BAD: Relative paths get messy
import { T } from "../../../components/providers/LanguageProvider";
```

### 4. **Naming Conventions**
```
Components:    PascalCase    → UserCard.tsx
Functions:     camelCase     → getUserData()
Files:         kebab-case    → user-card.tsx (or PascalCase for components)
CSS classes:   kebab-case    → btn-primary
```

---

## 🐛 Common Errors & Solutions

### Error: "Cannot use hooks in Server Component"
```
❌ Error: useState can only be used in Client Components
```
**Solution:** Add `"use client"` at the top of your file!

### Error: "Module not found: Can't resolve '@/...'"
```
❌ Error: Module not found: Can't resolve '@/app/...'
```
**Solution:** Make sure path starts with `@/` not `@/app/`. The `@` already points to the root!

### Error: "Hydration mismatch"
```
❌ Error: Hydration failed because the initial UI does not match
```
**Solution:** Don't use browser APIs (localStorage, window) during initial render. Use `useEffect` instead.

---

## 📚 Next Steps

1. **Read the commented code** in:
   - [app/layout.tsx](app/layout.tsx) - Root layout
   - [app/components/providers/LanguageProvider.tsx](app/components/providers/LanguageProvider.tsx) - Language system

2. **Try creating a simple page**:
   - Create `app/test/page.tsx`
   - Add some text with `<T>` component
   - Visit `/test` in your browser

3. **Explore existing pages**:
   - Look at [app/page.tsx](app/page.tsx) to see how the homepage works
   - Check [app/community/login/page.tsx](app/community/login/page.tsx) for forms

4. **Learn by doing**:
   - Modify existing components
   - Change colors in `globals.css`
   - Add new routes and pages

---

## 🎓 Resources

- **Next.js Docs:** https://nextjs.org/docs
- **React Docs:** https://react.dev
- **Tailwind Docs:** https://tailwindcss.com/docs
- **TypeScript Handbook:** https://www.typescriptlang.org/docs/

---

## 💡 Quick Reference

### File Naming Conventions
| File Type | Purpose | Example |
|-----------|---------|---------|
| `page.tsx` | Page content | `/app/about/page.tsx` → `/about` |
| `layout.tsx` | Page wrapper | `/app/dashboard/layout.tsx` |
| `loading.tsx` | Loading UI | Automatic loading states |
| `error.tsx` | Error UI | Automatic error boundaries |

### When to Use "use client"
- ✅ Using React hooks (useState, useEffect, etc.)
- ✅ Handling events (onClick, onChange, etc.)
- ✅ Using browser APIs (localStorage, window, etc.)
- ✅ Using third-party libraries that require client-side
- ❌ Static content (just HTML + CSS)
- ❌ Data fetching (can be done on server)

---

**Happy coding! 🎉**

If you get stuck, read the code comments or check the Next.js documentation!
