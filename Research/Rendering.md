## ۱. Routing در Next.js 15

Next.js مسیرها رو **بر اساس پوشه‌ها و فایل‌ها** می‌سازه. یعنی اسم پوشه‌ها و فایل‌ها = آدرس URL شما.

### مثال ساده

فرض کن ساختار پروژه این باشه:

```
app/
 ├─ page.tsx
 ├─ about/
 │   └─ page.tsx
 └─ blog/
     └─ page.tsx
```

* `/` → `app/page.tsx`
* `/about` → `app/about/page.tsx`
* `/blog` → `app/blog/page.tsx`

---

### کد مثال (TypeScript)

**`app/page.tsx`**

```tsx
export default function HomePage() {
  return <h1>خانه</h1>;
}
```

**`app/about/page.tsx`**

```tsx
export default function AboutPage() {
  return <h1>درباره ما</h1>;
}
```

---

### مسیرهای پویا (Dynamic Routes)

اگر بخوای صفحه برای هر آیتم خاص بسازی (مثلاً پست وبلاگ):

```
app/blog/[slug]/page.tsx
```

**`app/blog/[slug]/page.tsx`**

```tsx
interface BlogPageProps {
  params: { slug: string };
}

export default function BlogPage({ params }: BlogPageProps) {
  return <h1>پست: {params.slug}</h1>;
}
```

* `/blog/hello-world` → `params.slug = "hello-world"`

---

## ۲. Layout و فایل‌های ویژه

Next.js 15 چند فایل خاص داره که در هر پوشه می‌تونی بذاری:

| فایل            | کاربرد                    |
| --------------- | ------------------------- |
| `layout.tsx`    | قالب مشترک بین صفحات      |
| `loading.tsx`   | نمایش لودر هنگام بارگذاری |
| `error.tsx`     | صفحه خطا برای بخش مشخص    |
| `not-found.tsx` | صفحه ۴۰۴ مخصوص اون بخش    |

مثلاً اگر در `app/layout.tsx` قالب کلی سایت رو بذاری، همه صفحات اون رو خواهند داشت.

**`app/layout.tsx`**

```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <header>هدر سایت</header>
        <main>{children}</main>
        <footer>کپی‌رایت 2025</footer>
      </body>
    </html>
  );
}
```

---

## ۳. Rendering در Next.js 15

رندر یعنی نحوه تولید HTML صفحه. در Next.js چند حالت وجود داره:

1. **Static Rendering (ایستا)** → صفحه یکبار در build ساخته میشه (خیلی سریع و مناسب SEO).
2. **Dynamic Rendering (پویا)** → صفحه هر بار روی سرور ساخته میشه (برای داده‌های همیشه تازه).
3. **Streaming** → بخش‌های صفحه کم‌کم به مرورگر فرستاده میشن (با React Suspense).

---

### مثال Static Rendering

```tsx
export default function Page() {
  return <h1>این صفحه ایستا است</h1>;
}

// پیش‌فرض Next.js 15 همه GET ها کش نمی‌شوند مگر اعلام کنی:
export const dynamic = "force-static";
```

---

### مثال Dynamic Rendering

```tsx
export default async function Page() {
  const res = await fetch("https://api.example.com/data", { cache: "no-store" });
  const data = await res.json();
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
```

---

### مثال Streaming (با loading.tsx)

**`app/page.tsx`**

```tsx
export default async function Page() {
  await new Promise(r => setTimeout(r, 2000)); // شبیه‌سازی تاخیر
  return <h1>محتوا بعد از ۲ ثانیه</h1>;
}
```

**`app/loading.tsx`**

```tsx
export default function Loading() {
  return <p>در حال بارگذاری...</p>;
}
```

وقتی صفحه لود میشه، اول متن "در حال بارگذاری..." میاد، بعد که دیتا آماده شد، محتوای اصلی نمایش داده میشه.

---

## ۴. جمع‌بندی

* **Routing** در Next.js 15 پوشه‌ای و فایل‌محوره.
* می‌تونی مسیرهای **پویا**، **تو در تو**، و **موازی** بسازی.
* **Rendering** می‌تونه ایستا، پویا، یا استریمینگ باشه.
* فایل‌های خاص (`layout`, `loading`, `error`, `not-found`) کنترل کامل بر تجربه کاربر میدن.
* TypeScript پشتیبانی کامل داره، فقط باید نوع پارامترها رو تعریف کنی.