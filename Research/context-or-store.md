## 1. توضیح Context در Next.js 15

**Context API** در React یه راه ساده برای به اشتراک گذاشتن داده بین کامپوننت‌هاست بدون اینکه مجبور باشی props رو از چند سطح کامپوننت پاس بدی.

---

### چطور تو Next.js 15 کار می‌کنه؟

* Next.js 15 همچنان از React و Context API استفاده می‌کنه.
* تو معماری جدید که Server و Client Components داریم، **Context می‌تونه فقط روی Client Components کار کنه**؛ چون Server Components حالت (state) و متغیرهای داینامیک مثل تم یا زبان رو نگه نمی‌دارن.
* پس Context معمولاً داخل یک Client Component ساخته و در کل subtree کلاینتی توزیع می‌شه.

---

## 2. مثال: تغییر تم با Tailwind CSS v4 و Context در Next.js 15

فرض کن می‌خوای تم سایت رو بین حالت روشن و تاریک جابجا کنی.

### ساخت Context برای تم:

```tsx
// app/context/ThemeContext.client.tsx
'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'dark' ? 'dark' : ''}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
}
```

---

### استفاده از Context در صفحه:

```tsx
// app/page.tsx
import { ThemeProvider, useTheme } from './context/ThemeContext.client';

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme} className="p-2 border rounded">
      تغییر تم (حالت فعلی: {theme})
    </button>
  );
}

export default function Page() {
  return (
    <ThemeProvider>
      <main className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white p-4">
        <h1 className="text-2xl mb-4">سلام! این صفحه با تم داینامیک است.</h1>
        <ThemeToggleButton />
      </main>
    </ThemeProvider>
  );
}
```

---

## 3. مقایسه Context با Zustand

| ویژگی               | Context API                                                           | Zustand                                                |
| ------------------- | --------------------------------------------------------------------- | ------------------------------------------------------ |
| **سادگی استفاده**   | عالی برای حالت‌های ساده و محدوده کوچک                                 | بهتر برای پروژه‌های بزرگ و پیچیده با state زیاد        |
| **Performance**     | هنگام تغییر state کل subtree رندر میشه (ممکنه باعث رندرهای اضافه بشه) | هوشمندانه‌تر، فقط کامپوننت‌های استفاده‌کننده رندر میشن |
| **قابلیت توسعه**    | محدودتر، نیاز به کد بیشتر برای منطق پیچیده                            | امکانات پیشرفته مثل middleware، persistence، immer     |
| **محدوده کاربرد**   | بهترین برای حالت‌های محلی و محدوده کوچک (مثل تم، زبان)                | مناسب برای مدیریت state کل اپلیکیشن، داده‌های پیچیده   |
| **پیچیدگی یادگیری** | ساده و بومی React                                                     | نیاز به یادگیری کتابخانه جداگانه، ولی ساده و قدرتمند   |

---

### جمع‌بندی:

* **Context** عالیه برای داده‌هایی که به صورت محلی و محدود استفاده میشن مثل تم یا زبان. مخصوصاً تو Next.js 15 که Client Components براشون مناسب‌تره.
* **Zustand** وقتی پروژه بزرگ و state پیچیده میشه، گزینه بهتریه چون مدیریت state رو بهینه‌تر و قابل توسعه‌تر می‌کنه.