حتماً! در ادامه راهنمای **تست‌نویسی از پایه** برای پروژه‌های **Next.js 15** به همراه **TypeScript** و **React** رو به زبان ساده و کاربردی برات نوشتم:

---

## ✅ مقدمه‌ای بر تست‌نویسی در Next.js + TypeScript + React

**تست‌نویسی (Testing)** یعنی نوشتن کدی برای اطمینان از اینکه کد اصلی شما درست کار می‌کنه.

در پروژه‌هایی مثل **Next.js 15** که از **React** و **TypeScript** استفاده می‌کنن، تست‌نویسی خیلی مهم‌تره چون:

* کد پیچیده‌تره
* اپلیکیشن‌های بزرگ‌تری ساخته می‌شن
* توسعه تیمی انجام می‌شه

---

## 🧰 ابزارهای مورد نیاز

برای تست‌نویسی در این ترکیب تکنولوژی، از ابزارهای زیر استفاده می‌کنیم:

| ابزار                           | کاربرد                                  |
| ------------------------------- | --------------------------------------- |
| **Jest**                        | فریم‌ورک تست‌نویسی                      |
| **React Testing Library (RTL)** | تست تعاملات کاربر در کامپوننت‌ها        |
| **@testing-library/user-event** | شبیه‌سازی رفتار کاربر (کلیک، تایپ و...) |
| **ts-jest**                     | اجرای تست‌های TypeScript با Jest        |

---

## 🧱 نصب ابزارها

در یک پروژه Next.js با TypeScript، این دستورها رو اجرا کن:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event ts-jest jest-environment-jsdom
```

سپس یک فایل تنظیمات `jest.config.ts` بساز:

```ts
// jest.config.ts
import type { Config } from 'jest'

const config: Config = {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1', // اگر alias استفاده می‌کنی
  },
}

export default config
```

فایل `jest.setup.ts` رو هم بساز:

```ts
// jest.setup.ts
import '@testing-library/jest-dom'
```

---

## 📦 اسکریپت اجرای تست در package.json

```json
"scripts": {
  "test": "jest",
  "test:watch": "jest --watch"
}
```

---

## 📁 ساختار فایل‌ها

در پروژه‌ات این ساختار پیشنهادی خوبه:

```
/src
  /components
    Button.tsx
    __tests__
      Button.test.tsx
```

یا به‌جای فولدر `__tests__` می‌تونی تست رو در کنارش بنویسی:

```
Button.test.tsx
```

---

## 🧪 مثال ساده: تست یک کامپوننت

### کامپوننت `Button.tsx`

```tsx
// src/components/Button.tsx
type ButtonProps = {
  label: string
  onClick: () => void
}

const Button = ({ label, onClick }: ButtonProps) => (
  <button onClick={onClick}>{label}</button>
)

export default Button
```

### تست `Button.test.tsx`

```tsx
// src/components/__tests__/Button.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '../Button'

test('دکمه با متن درست رندر می‌شود و کلیک می‌خورد', async () => {
  const mockFn = jest.fn()
  render(<Button label="کلیک کن" onClick={mockFn} />)

  const button = screen.getByText(/کلیک کن/i)
  expect(button).toBeInTheDocument()

  await userEvent.click(button)
  expect(mockFn).toHaveBeenCalledTimes(1)
})
```

---

## 🧪 تست State و useEffect

مثال: تست یک کامپوننت که با `useEffect` مقدار state رو تغییر می‌ده:

```tsx
// src/components/Loader.tsx
import { useEffect, useState } from 'react'

const Loader = () => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return <div>{loaded ? 'Loaded' : 'Loading...'}</div>
}

export default Loader
```

تست:

```tsx
// src/components/__tests__/Loader.test.tsx
import { render, screen, waitFor } from '@testing-library/react'
import Loader from '../Loader'

test('نمایش حالت لودینگ و سپس لود شدن', async () => {
  render(<Loader />)
  expect(screen.getByText(/loading/i)).toBeInTheDocument()

  await waitFor(() => {
    expect(screen.getByText(/loaded/i)).toBeInTheDocument()
  })
})
```

---

## 📊 تست پوشش کد (Code Coverage)

برای دیدن میزان پوشش تست‌ها، این دستور رو اجرا کن:

```bash
npm run test -- --coverage
```

خروجی میزان پوشش فایل‌ها (line, function, branch, statement) رو نشون می‌ده.

---

## 🧠 انواع تست‌ها در Next.js

| نوع تست              | توضیح                                                       |
| -------------------- | ----------------------------------------------------------- |
| **Unit Test**        | تست اجزای کوچک مثل یک تابع یا یک کامپوننت ساده              |
| **Integration Test** | تست تعامل بین چند کامپوننت یا کامپوننت و API                |
| **E2E Test**         | تست کل رفتار اپلیکیشن توسط کاربر (با ابزارهایی مثل Cypress) |
| **Snapshot Test**    | مقایسه خروجی DOM فعلی با نسخه ذخیره‌شده                     |
| **Static Analysis**  | بررسی خطاهای کدنویسی با ESLint و TypeScript                 |

---

## 🛠 نکات مهم

* از بخش‌های حساس پروژه تست رو شروع کن.
* فقط کد خودت رو تست کن، نه کتابخانه‌های دیگران.
* به جای تست داخلی تابع، رفتار خروجی رو تست کن.
* برای props و داده‌ها، از Mock Data استفاده کن.

---

## ✅ جمع‌بندی

* تست‌نویسی در Next.js + TypeScript + React ساده و قدرتمنده.
* از Jest + RTL برای تست یونیت و تعاملات استفاده کن.
* برای تست جامع‌تر (E2E) ابزارهایی مثل Cypress رو اضافه کن.
* پوشش تست بالا یعنی اعتماد بیشتر به کدت 💪

---

اگر خواستی می‌تونم یک پروژه نمونه‌ی کامل تست‌نویسی شده برات بسازم یا خروجی PDF این راهنما رو آماده کنم. بگی کدومو می‌خوای؟


---

### ✅ **تست نویسی در ری‌اکت چیست؟**

تست نویسی فرآیندی است برای اطمینان از اینکه بخش‌های مختلف اپلیکیشن به درستی کار می‌کنند. در React، این کار به کمک ابزارهایی مثل **Jest** و **React Testing Library** انجام می‌شود.

---

### 🎯 **دلایل اهمیت تست نویسی:**

* اطمینان از عملکرد صحیح کامپوننت‌ها
* جلوگیری از بروز باگ در آینده
* کاهش هزینه نگهداری
* صرفه‌جویی در زمان توسعه

---

### 🧪 **چه چیزهایی در React تست می‌شن؟**

* رندر شدن صحیح کامپوننت‌ها (با یا بدون props)
* تغییرات state و re-render شدن
* تعامل کاربر (کلیک، تایپ و...)
* رندر شرطی کامپوننت‌ها
* داده‌های دریافتی از سرور (با استفاده از Mock Data)

---

### 🚫 **چه چیزهایی را نباید تست کرد؟**

* عملکرد دقیق توابع داخلی (فقط بررسی رفتار کلی کافیست)
* کتابخانه‌های شخص ثالث (مثل Axios)

---

### 🧰 **ابزارهای مورد نیاز تست در ری‌اکت:**

* **Jest** (برای اجرای تست‌ها)
* **React Testing Library** (برای تست رفتار کاربر)
* **User Event Library** (برای شبیه‌سازی رفتار کاربر)
* (در تست‌های پیشرفته‌تر) **Cypress** برای E2E

---

### 🔄 **مراحل آماده‌سازی تست در پروژه React:**

1. ایجاد پروژه با `create-react-app`
2. اطمینان از نصب پکیج‌های تست در `package.json`
3. اضافه کردن فایل `setupTests.js`
4. تنظیم دستور اجرای تست در بخش `scripts`

---

### 📂 **ساختار تست‌ها:**

* نام فایل تست باید با `.test.js` یا `.test.jsx` تمام شود.
* تست‌ها با تابع `test()` یا `it()` تعریف می‌شوند.
* از `render()` برای رندر کامپوننت
* از `screen` برای جستجوی عناصر در DOM
* از `expect()` برای نوشتن ادعاها

---

### 📋 **انواع تست در React:**

* **Unit Test**: تست اجزای کوچک (تابع، کامپوننت)
* **Integration Test**: تست تعامل بین چند بخش
* **Functional Test**: تست خروجی مشخص از یک رفتار
* **E2E Test**: شبیه‌سازی رفتار واقعی کاربر
* **Snapshot Test**: مقایسه خروجی فعلی با اسنپ‌شات ذخیره‌شده
* **Static Analysis**: بررسی مشکلات کد با ابزارهایی مثل ESLint

---

### 💡 **نکات مهم در تست نویسی:**

* هدف از تست باید مشخص باشد (تست عملکرد؟ تست رابط کاربری؟ ...)
* از بخش‌های حساس اپ شروع کنید.
* فقط چیزهایی که **می‌سازید** را تست کنید، نه چیزهایی که از بیرون میارید.
* Mock Data ساده و کم‌حجم بسازید.
* مطمئن شوید که کد شما با تست کاملاً **پوشش داده شده**.

---

### 🧭 جمع‌بندی نهایی:

تست نویسی در ری‌اکت برخلاف تصور، کار پیچیده‌ای نیست. با ابزارهای مناسب و یادگیری اصول، می‌تونید به راحتی کدهای قابل اطمینان و بدون باگ تولید کنید.

> **هدف نهایی تست نویسی = اطمینان از عملکرد صحیح کد و افزایش کیفیت نرم‌افزار**