## 🎯 RSC Rendering Lifecycle یعنی چی؟

وقتی از **React Server Components (RSC)** استفاده می‌کنی، یک فرایند چندمرحله‌ای اتفاق میفته تا خروجی HTML و داده‌ها از سرور به مرورگر برسه و با **Client Components** ترکیب بشه.
این فرایند هم در Next.js 13+ و حتی Next.js 15 استفاده میشه.

به زبان ساده:

> این چرخه توضیح میده که یک RSC از لحظه‌ای که درخواست کاربر میاد تا لحظه‌ای که صفحه روی مرورگر تعاملی میشه، چه مراحلی رو طی می‌کنه.

---

## 🔄 مراحل RSC Rendering Lifecycle

### **1. Request (درخواست کاربر)**

* مرورگر (یا کاربر) یک صفحه رو درخواست می‌کنه.
* Next.js تشخیص میده کدوم کامپوننت‌ها Server هستند و کدوم Client.

---

### **2. Server Render (اجرای کامپوننت‌های سرور)**

* **Server Components** روی سرور اجرا میشن.
* اینجا می‌تونی مستقیم به دیتابیس وصل بشی یا API کال بزنی.
* نتیجه اجرا، یک ساختار **React tree** هست که هنوز به HTML نهایی تبدیل نشده، بلکه یک فرمت خاص (RSC payload) داره.

---

### **3. Streaming / Serialization (ارسال به مرورگر)**

* RSC payload به مرورگر ارسال میشه (ممکنه به صورت **استریم** بیاد، یعنی بخش‌بخش).
* این payload فقط توضیح میده چی باید روی صفحه باشه، نه لزوماً کل HTML.

---

### **4. Client Component Hydration (هیدریت کردن بخش‌های کلاینت)**

* بخش‌هایی که **Client Component** هستند، JS لازم رو دانلود می‌کنن.
* React روی مرورگر این کامپوننت‌ها رو **هیدریت** می‌کنه تا تعاملی بشن.
* Server Components تبدیل به HTML خالص میشن و نیازی به JS سمت مرورگر ندارن.

---

### **5. User Interaction (تعامل کاربر)**

* بعد از هیدریت شدن، کاربر می‌تونه با Client Components تعامل کنه.
* Server Components دوباره فقط وقتی اجرا میشن که کاربر به صفحه جدید یا بخش تازه‌ای بره که اون رو نیاز داشته باشه.

---

## 🛠 مثال تصویری با Next.js 15

فرض کن `/products` داری:

```tsx
// ProductList.server.tsx (Server Component)
export default async function ProductList() {
  const products = await getProductsFromDB();
  return (
    <ul>
      {products.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>
  );
}

// AddToCart.client.tsx (Client Component)
'use client';
import { useState } from 'react';
export default function AddToCart() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Add ({count})</button>;
}
```

در زمان لود `/products`:

1. سرور **ProductList** رو اجرا می‌کنه و لیست رو می‌سازه (بدون JS اضافه).
2. مرورگر HTML لیست رو فوراً می‌بینه.
3. `AddToCart` به عنوان Client Component JS خودش رو دانلود و هیدریت می‌کنه.
4. حالا دکمه "Add" تعاملی شده.

---

## 📦 مزیت این چرخه

* **لود اولیه سریع‌تر** چون Server Components نیازی به JS مرورگر ندارن.
* **امنیت بالاتر** چون منطق و API Keys روی سرور می‌مونه.
* **ترکیب‌پذیری بالا** بین بخش‌های تعاملی و استاتیک.