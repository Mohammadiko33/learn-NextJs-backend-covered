## 📌 Intercepting Routes یعنی چی؟

در Next.js، مسیرها (Routes) معمولا مستقیم به یک صفحه یا layout میرن.
ولی **Intercepting Routes** بهت اجازه میده که وقتی کاربر روی لینکی کلیک کرد:

* به جای اینکه کل صفحه‌ی مقصد لود بشه (**Hard Navigation**)
* مسیر رو **intercept** کنی و محتوا رو توی layout فعلی نمایش بدی (**Soft Navigation**)

این کار برای **مودال‌ها، پاپ‌آپ‌ها، یا پنل‌های موقت** خیلی کاربردیه.

---

## 🎯 یک سناریوی واقعی

فرض کن یک گالری عکس داری (`/photos`)
وقتی روی یک عکس کلیک می‌کنی:

* URL تغییر می‌کنه مثلاً به `/photos/2`
* ولی عکس داخل یک **Modal** روی همان صفحه نمایش داده میشه
* اگر کاربر صفحه رو رفرش کنه یا مستقیم `/photos/2` رو بزنه، یک صفحه کامل نمایش داده میشه.

---

## 🛠 سینتکس Intercepting Routes

Next.js برای این کار از **segment conventions** استفاده می‌کنه:

| سینتکس  | معنی                 |
| ------- | -------------------- |
| `(.)`   | همان سطح مسیر فعلی   |
| `(..)`  | یک سطح بالاتر        |
| `(...)` | از ریشه (root) پروژه |

اینا شبیه مسیرهای نسبی توی فایل‌سیستم هستن، ولی برای routing Next.js.

---

## 📂 مثال فولدر استراکچر

بیایم مثال **گالری عکس با مودال** رو بسازیم:

```
app
│
├── photos
│   ├── page.tsx               // صفحه اصلی گالری
│   ├── [id]
│   │   └── page.tsx           // صفحه کامل یک عکس
│
├── (.)photos
│   └── [id]
│       └── page.tsx           // نسخه modal از نمایش عکس
│
└── layout.tsx                 // لایوت اصلی سایت
```

---

### 🔍 چطور کار می‌کنه؟

1. کاربر توی `/photos` هست → `photos/page.tsx` لود میشه
2. وقتی روی عکس کلیک می‌کنه، لینک میره به `/photos/[id]` ولی چون یک مسیر `(.)photos/[id]` داریم، Next.js مسیر رو intercept می‌کنه و نسخه مودال رو توی layout فعلی نشون میده.
3. اگه صفحه رفرش بشه، مسیر عادی `/photos/[id]` لود میشه و کاربر صفحه کامل رو می‌بینه.

---

## 💻 نمونه کد

**photos/page.tsx**

```tsx
import Link from 'next/link';

export default function PhotoGallery() {
  const photos = [1, 2, 3];
  return (
    <div>
      <h1>Photo Gallery</h1>
      {photos.map((id) => (
        <Link key={id} href={`/photos/${id}`}>
          <img src={`/images/${id}.jpg`} alt={`Photo ${id}`} width={200} />
        </Link>
      ))}
    </div>
  );
}
```

**(.)photos/\[id]/page.tsx** (مودال)

```tsx
'use client';

import { useRouter } from 'next/navigation';

export default function PhotoModal({ params }) {
  const router = useRouter();
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0,
      width: '100%', height: '100%',
      background: 'rgba(0,0,0,0.7)'
    }}>
      <div style={{ background: 'white', margin: '10% auto', padding: 20 }}>
        <h2>Photo {params.id}</h2>
        <img src={`/images/${params.id}.jpg`} width={400} />
        <button onClick={() => router.back()}>Close</button>
      </div>
    </div>
  );
}
```

**photos/\[id]/page.tsx** (صفحه کامل)

```tsx
export default function PhotoPage({ params }) {
  return (
    <div>
      <h1>Full Page - Photo {params.id}</h1>
      <img src={`/images/${params.id}.jpg`} width={800} />
    </div>
  );
}
```

---

## 📊 روند کاری به زبان ساده

1. **Soft Navigation** → نمایش مودال (مسیر intercept شده)
2. **Hard Navigation** یا **Refresh** → نمایش صفحه کامل