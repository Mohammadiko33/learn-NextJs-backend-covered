## 🎯 React Server Components یعنی چی؟

**React Server Components** قابلیتیه که توی React اضافه شده تا بتونی بعضی از کامپوننت‌ها رو **مستقیماً روی سرور** اجرا کنی، نه توی مرورگر.

به زبان خودمونی:

> بعضی از بخش‌های کدت که لازم نیست روی مرورگر اجرا بشه (مثلاً گرفتن داده از دیتابیس)، می‌تونه فقط روی سرور اجرا بشه، و نتیجه HTML آماده رو به مرورگر بده.
> این یعنی هم حجم جاوااسکریپت سمت کاربر کمتر میشه، هم سرعت لود بهتر میشه.

---

## 🔍 فرقش با SSR و CSR

* **CSR:** همه‌چیز روی مرورگر اجرا میشه.
* **SSR:** کل صفحه رو یکبار روی سرور می‌سازیم و می‌فرستیم.
* **RSC:** می‌تونی ترکیبی کار کنی → بعضی کامپوننت‌ها روی سرور رندر بشه، بعضی روی مرورگر.

---

## 🛠 مثال ساده

فرض کن یک سایت داری که شامل:

1. هدر ثابت
2. لیست محصولات (نیاز به دیتابیس)
3. سبد خرید (تعامل کاربر در مرورگر)

با **React Server Components**:

* **هدر و لیست محصولات** → روی سرور ساخته میشه (چون نیازی به JS مرورگر برای این بخش‌ها نیست).
* **سبد خرید** → به صورت Client Component اجرا میشه چون تعامل کاربر رو داره.

📄 نمونه کد (Next.js 13+ با RSC):

```jsx
// ProductList.server.js  (Server Component)
export default async function ProductList() {
  const products = await getProductsFromDB();
  return (
    <ul>
      {products.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>
  );
}

// Cart.client.js  (Client Component)
"use client";
import { useState } from 'react';

export default function Cart() {
  const [items, setItems] = useState([]);
  return (
    <div>
      <h2>سبد خرید</h2>
      {items.length === 0 ? "خالی است" : items.join(", ")}
    </div>
  );
}

// page.js (ترکیب هر دو)
import ProductList from './ProductList.server';
import Cart from './Cart.client';

export default function Page() {
  return (
    <>
      <h1>فروشگاه</h1>
      <ProductList /> {/* روی سرور اجرا میشه */}
      <Cart />        {/* روی مرورگر اجرا میشه */}
    </>
  );
}
```

---

## 📦 مزایای RSC

* حجم جاوااسکریپت سمت کاربر کم میشه → لود سریع‌تر.
* امکان گرفتن داده مستقیم از دیتابیس یا API بدون نگرانی امنیتی (چون کد سمت کاربر نیست).
* می‌تونی همزمان از Server و Client Components استفاده کنی.

---

## 🚨 محدودیت‌ها

* Server Components نمی‌تونن **state** یا **useEffect** داشته باشن (چون روی مرورگر اجرا نمیشن).
* باید ساختار پروژه‌ت رو جوری طراحی کنی که بخش‌های تعاملی توی Client Components باشن.

---

## 🎯 خلاصه

**RSC** مثل اینه که بگی:

* "بخش‌هایی که نیاز به تعامل ندارن رو ببر روی سرور تا مرورگر بی‌خودی سنگین نشه"
* "بخش‌هایی که کاربر باهاشون کار میکنه، بذار روی مرورگر بمونه"