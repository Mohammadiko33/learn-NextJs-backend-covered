 ## مقدمه

در پروژه‌های Next.js، مدیریت خطاها به شکل کارآمد و سازگار اهمیت زیادی دارد. دو فایل معمول برای این منظور عبارت‌اند از:

- `global-error.tsx`
- `error-wrapper.tsx`

این فایل‌ها به ترتیب برای کنترل خطاهای سطح بالا (global errors) و پوشش دادن (wrapping) کامپوننت‌ها با لایه مدیریت خطا استفاده می‌شوند.

---

## 1. `global-error.tsx`

### هدف:
این فایل معمولا به عنوان یک صفحه یا کامپوننت مرکزی برای مدیریت و نمایش خطاهای کلی برنامه استفاده می‌شود.  
در Next.js 15.4.5، این فایل می‌تواند به عنوان یک صفحه خطای عمومی عمل کند، مثلاً برای مدیریت خطاهای 404، 500 یا سایر خطاهای غیرمنتظره.

### ویژگی‌ها:
- گرفتن خطاهای سطح بالا که در کل برنامه اتفاق می‌افتند.
- نمایش پیغام مناسب به کاربر.
- امکان سفارشی‌سازی UI نمایش خطا.
- لاگ کردن یا ارسال اطلاعات خطا به سیستم‌های مانیتورینگ.

### نمونه ساختار ساده:

```tsx
import React from 'react';

interface GlobalErrorProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const GlobalError: React.FC<GlobalErrorProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>خطایی رخ داده است</h1>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>تلاش مجدد</button>
    </div>
  );
};

export default GlobalError;
```
2. error-wrapper.tsx
هدف:
یک کامپوننت Higher-Order Component (HOC) یا Wrapper است که دیگر کامپوننت‌ها را می‌پوشاند تا خطاهای درون آن‌ها را بگیرد و مدیریت کند.

کاربرد:
جلوگیری از کرش کامل اپلیکیشن با گرفتن خطاها در زیرکامپوننت‌ها.

ارائه تجربه کاربری بهتر با نمایش پیام خطای اختصاصی در بخش‌های مشخص.

امکان تنظیم استراتژی‌های متفاوت برای خطاهای مختلف.

نمونه ساختار ساده:
```tsx
Copy code
import React, { Component, ReactNode } from 'react';

interface ErrorWrapperProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorWrapperState {
  hasError: boolean;
  error: Error | null;
}

class ErrorWrapper extends Component<ErrorWrapperProps, ErrorWrapperState> {
  constructor(props: ErrorWrapperProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // اینجا می‌توانید خطا را لاگ کنید یا ارسال کنید
    console.error('Caught error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <h2>مشکلی پیش آمده است.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorWrapper;
```
نحوه استفاده با هم
ErrorWrapper را می‌توانید اطراف بخش‌های مختلف UI بگذارید تا خطاهای مربوط به همان بخش را بگیرد.

GlobalError معمولا برای خطاهای کل اپلیکیشن یا صفحه‌های خاص خطا استفاده می‌شود.

مثال:

```tsx
import GlobalError from './global-error';
import ErrorWrapper from './error-wrapper';

function MyApp({ Component, pageProps }) {
  return (
    <ErrorWrapper fallback={<GlobalError error={new Error('خطای ناشناخته')} resetErrorBoundary={() => {}} />}>
      <Component {...pageProps} />
    </ErrorWrapper>
  );
}

export default MyApp;
```
نکات مهم در Next.js 15.4.5
Next.js از React 18 پشتیبانی می‌کند که دارای قابلیت‌های جدیدی مثل React Server Components است.

مدیریت خطا در سمت سرور و سمت کلاینت به شکل متفاوتی انجام می‌شود.

در نسخه 15.4.5، ساختار فایل‌ها ممکن است کمی متفاوت باشد ولی مفاهیم کلی مدیریت خطا ثابت هستند.

جمع‌بندی
فایل	نقش اصلی	مثال کاربرد
global-error.tsx	صفحه یا کامپوننت نمایش خطای کلی	نمایش پیام خطا برای کل اپلیکیشن
error-wrapper.tsx	پوشش دادن بخش‌هایی از UI برای گرفتن خطا	جلوگیری از کرش کامل UI و نمایش پیام خطا در بخش خاص

اگر مایل باشی می‌توانم کدهای کامل‌تر و دقیق‌تر با توجه به جزئیات پروژه تو هم برات آماده کنم.