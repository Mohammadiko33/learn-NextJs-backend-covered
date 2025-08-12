## 🎯 Server and Client Composition Patterns یعنی چی؟

یعنی **چطور تو پروژه‌های React/Next.js کامپوننت‌های سمت سرور (Server Components) و سمت کلاینت (Client Components) رو کنار هم سازمان‌دهی و ترکیب کنیم** تا بهترین عملکرد، سرعت و تجربه کاربری رو داشته باشیم.

---

## ادامه و نکات مهم درباره این ترکیب:

### ۱. **تقسیم کار بین سرور و کلاینت**

* کامپوننت‌هایی که فقط نیاز به رندر داده دارن و تعاملی نیستن (مثل لیست محصولات یا محتواهای ثابت) باید روی **سرور** باشن.
* کامپوننت‌هایی که نیاز به تعامل کاربر دارن (مثل فرم‌ها، دکمه‌ها، انیمیشن‌ها) باید به عنوان **Client Components** نوشته بشن.

### ۲. **تمرکز بر کاهش حجم جاوااسکریپت سمت کاربر**

* هر چی بتونی بیشتر کد رو به سرور منتقل کنی، حجم JS سمت کاربر کمتر میشه.
* حجم کمتر = سرعت بالاتر و مصرف کمتر دیتا.

### ۳. **ارتباط Server و Client Components**

* Server Component ها می‌تونن Client Component ها رو ایمپورت و درخت رندرشون رو بسازن، ولی برعکسش ممکن نیست.
* پس همیشه ترکیب شروع میشه از Server Component و بخش‌های تعاملی رو Client Component ها پوشش میدن.

### ۴. **کپسوله کردن (Encapsulation)**

* هر Client Component باید مستقل باشه و فقط به داده‌ای که لازم داره دسترسی داشته باشه.
* نباید منطق داده‌ای روی کلاینت باعث افزایش حجم یا پیچیدگی بشه.

### ۵. **استفاده از Context و State Management**

* مدیریت حالت (state) معمولا سمت کلاینت انجام میشه، چون Server Components استیت ندارن.
* اگر داده‌ای روی سرور هست، باید از Props یا راهکارهای مخصوص مثل React Query استفاده کرد.

---

## 🛠 مثال ادامه‌دار

فرض کن صفحه‌ای داری که لیست کاربران رو نشون میده و هر کاربر می‌تونه روی دکمه «فالو» کلیک کنه:

```tsx
// UserList.server.tsx
import FollowButton from './FollowButton.client';

export default async function UserList() {
  const users = await getUsersFromDB();
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name}
          <FollowButton userId={user.id} />
        </li>
      ))}
    </ul>
  );
}

// FollowButton.client.tsx
'use client';
import { useState } from 'react';

export default function FollowButton({ userId }) {
  const [followed, setFollowed] = useState(false);
  return (
    <button onClick={() => setFollowed(!followed)}>
      {followed ? 'آنفالو' : 'فالو'}
    </button>
  );
}
```

* `UserList` یک Server Component هست که داده‌ها رو می‌گیره و رندر می‌کنه.
* `FollowButton` کامپوننت کلاینتی هست که تعاملیه و روی مرورگر اجرا میشه.

---

## 📦 نتیجه‌گیری

* **Server and Client Composition Patterns** کمک می‌کنه تا پروژه‌های بزرگ و پیچیده رو به بخش‌های کوچک‌تر، سریع‌تر و قابل نگهداری تقسیم کنیم.
* هدف اینه که **حداکثر بهره از هر دو طرف سرور و کلاینت برده بشه** تا بهترین تجربه کاربری و عملکرد به دست بیاد.