## سرور کامپوننت‌ها (Server Components)

* \*\* Server Components\*\* به‌طور پیش‌فرض در Next.js هستند و روی **سرور اجرا می‌شن**. این یعنی:

  * داده‌ها (مثل محتوای یک پست یا لیست محصولات) از سرور یا دیتابیس گرفته می‌شن بدون اینکه اطلاعات حساس به مرورگر بیاد.
  * **حجم جاوااسکریپت سمت کاربر کمتر می‌شه** و سرعت لود اولیه بهتره ([Next.js][1]).
  * Next.js می‌تونه این محتوا رو کش و استریم کنه تا کاربر سریع‌تر اولین نتیجه‌ی مفید رو ببینه ([Next.js][2]).

یک مثال اولیه:

```tsx
// app/post/page.tsx
export default async function Page({ params }) {
  const post = await getPost(params.id);
  return (
    <div>
      <h1>{post.title}</h1>
      <LikeButton likes={post.likes} />
    </div>
  );
}
```

---

## کامپوننت‌های کلاینت (Client Components)

* وقتی نیاز داریم که کامپوننت تعاملی باشه مثل استفاده از state یا eventها، باید اون رو با `'use client'` مشخص کنیم ([Next.js][1]).
* این کامپوننت‌ها روی مرورگر اجرا می‌شن و می‌تونن از hooks مثل `useState` و `useEffect` استفاده کنند، یا به APIهای مرورگر دسترسی داشته باشن ([Next.js][3]).

مثال:

```tsx
// app/ui/like-button.tsx
'use client';

import { useState } from 'react';

export default function LikeButton({ likes }: { likes: number }) {
  const [count, setCount] = useState(likes);
  return <button onClick={() => setCount(count + 1)}>Like ({count})</button>;
}
```

---

## ترکیب دو کامپوننت با هم در Next.js 15

Next.js از مدل ترکیبی استفاده می‌کنه:

* **Server Component** ها ابتدایی‌ترین محتوا رو رندر می‌کنن و برای بخش‌های تعاملی، **Client Component** ها رو تزریق می‌کنن.
* مرورگر از HTML اولیه استفاده می‌کنه و بخش Client رو بعداً **هیدریت** (hydrate) می‌کنه تا تعاملی بشه ([Next.js][4]).

یه توضیح خود جوامع توسعه‌دهنده در Reddit هم هست:

> *Server components are for accessing backend resources (e.g. data fetching, sensitive API keys), while client components are for adding interactivity.*
> ([Reddit][5])

---

## جمع‌بندی ساده

| نوع کامپوننت     | اجرا       | مناسب برای                     | مزیت                                 |
| ---------------- | ---------- | ------------------------------ | ------------------------------------ |
| Server Component | روی سرور   | رندر داده، محتوای اولیه، امنیت | سرعت لود بالا، حجم کمتر JS، سئو بهتر |
| Client Component | روی مرورگر | تعامل کاربر، state، eventها    | تعاملی و دینامیک بودن                |

### مثال ترکیبی:

```tsx
// app/page.tsx
import LikeButton from './ui/like-button';

export default async function Page() {
  const post = await getPost('123');
  return (
    <div>
      <h1>{post.title}</h1>
      <LikeButton likes={post.likes} />
    </div>
  );
}
```

در این مثال:

* `Page` یک **Server Component** هست که محتوا رو از سرور می‌گیره.
* `LikeButton` یک **Client Component** هست که تعاملیه و روی مرورگر اجرا می‌شه.