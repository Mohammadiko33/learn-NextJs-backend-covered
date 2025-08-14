باشه، بریم سراغ **useFormStatus** و **useActionState** تو Next.js 15
(که هر دوشون در واقع بخشی از قابلیت‌های **React Server Actions** هستن).

---

## 1. مقدمه کوتاه

تو Next.js 15 وقتی از **Server Actions** استفاده می‌کنی، می‌تونی فرم‌ها رو بدون نوشتن API Route جداگانه ارسال و پردازش کنی.
دو تا هوک مهم برای مدیریت وضعیت این فرم‌ها وجود داره:

* **`useFormStatus`** → برای گرفتن وضعیت ارسال فرم (در حال ارسال؟ خطا داشت؟ موفق شد؟)
* **`useActionState`** → برای نگه داشتن یک state (حالت) که هر بار اکشن اجرا میشه، آپدیت بشه.

---

## 2. `useFormStatus`

📌 **کاربرد:**
اطلاع از وضعیت **همین فرم خاص** که داخلش استفاده میشه.

🔹 مثال ساده:

```tsx
'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? 'در حال ارسال...' : 'ارسال'}
    </button>
  );
}
```

---

## 3. `useActionState`

📌 **کاربرد:**
مدیریت state بر اساس نتیجه اجرای یک **Server Action**.
یعنی هر بار اکشن اجرا شد، state جدید برگردون.

🔹 مثال:

```tsx
'use client';

import { useActionState } from 'react';
import { saveName } from './actions';

export default function NameForm() {
  const [message, formAction] = useActionState(
    async (prevState: string, formData: FormData) => {
      const name = formData.get('name') as string;
      const result = await saveName(name);
      return result.success ? `سلام ${name}!` : 'خطا در ذخیره‌سازی';
    },
    '' // مقدار اولیه state
  );

  return (
    <form action={formAction}>
      <input name="name" placeholder="نام شما" className="border p-2" />
      <button type="submit">ذخیره</button>
      {message && <p>{message}</p>}
    </form>
  );
}
```

---

## 4. تفاوت اصلی

| ویژگی               | useFormStatus                              | useActionState                                         |
| ------------------- | ------------------------------------------ | ------------------------------------------------------ |
| **محدوده کاربرد**   | فقط داخل فرم و subtree همون فرم            | هر جایی که بخوای state رو بر اساس اجرای اکشن تغییر بدی |
| **داده‌ای که میده** | وضعیت pending / error / data برای همون فرم | مقدار state و تابع اکشن برای تغییر اون                 |
| **سناریوی مناسب**   | دکمه submit غیرفعال، نمایش لودینگ          | نمایش پیام موفقیت/خطا، ذخیره آخرین پاسخ سرور           |
| **نوع داده خروجی**  | `{ pending, data, error }`                 | `[state, action]`                                      |

---

## 5. مثال ترکیبی (فرم با هر دو هوک)

```tsx
'use client';

import { useFormStatus, useActionState } from 'react';
import { addTodo } from './actions';

function SubmitButton() {
  const { pending } = useFormStatus();
  return <button disabled={pending}>{pending ? 'در حال اضافه کردن...' : 'اضافه کن'}</button>;
}

export default function TodoForm() {
  const [message, formAction] = useActionState(
    async (prevMessage: string, formData: FormData) => {
      const todo = formData.get('todo') as string;
      const result = await addTodo(todo);
      return result.ok ? 'موفقیت‌آمیز بود!' : 'خطایی رخ داد';
    },
    ''
  );

  return (
    <form action={formAction}>
      <input name="todo" placeholder="یک کار جدید" className="border p-2" />
      <SubmitButton />
      {message && <p>{message}</p>}
    </form>
  );
}
```

---

💡 خلاصه:

* **useFormStatus** → وضعیت فرم فعلی رو بهت میگه.
* **useActionState** → state قابل کنترل بر اساس اجرای اکشن رو بهت میده.
* معمولا برای UX بهتر، هر دو رو با هم استفاده می‌کنیم:
  یکی برای لودینگ و دکمه‌ها (useFormStatus) و یکی برای پیام‌ها و مدیریت داده (useActionState).

---

اگر بخوای، می‌تونم یه **نسخه کامل Next.js 15 + Server Actions + Tailwind** از این مثال رو بسازم که آماده اجرا باشه.
