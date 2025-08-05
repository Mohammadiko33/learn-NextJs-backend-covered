This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

### Status 100 : continue /|\ استاتوس 100 : یعنی ادامه بده، هنوز کامل نیست

### Status 101 : switching protocols /|\ استاتوس 101 : یعنی در حال تغییر پروتکل هستیم

### Status 102 : processing /|\ استاتوس 102 : درخواست در حال پردازش است، ولی هنوز تموم نشده

### Status 103 : early hints /|\ استاتوس 103 : یه سری اطلاعات زودتر فرستاده شده برای آماده‌سازی

---

### Status 200 : OK /|\ استاتوس 200 : یعنی همه چیز درست انجام شد

### Status 201 : created /|\ استاتوس 201 : یعنی چیزی با موفقیت ساخته شد

### Status 202 : accepted /|\ استاتوس 202 : یعنی درخواست دریافت شد، ولی هنوز پردازش نشده

### Status 203 : non-authoritative information /|\ استاتوس 203 : اطلاعات درسته ولی از منبع اصلی نیست

### Status 204 : no content /|\ استاتوس 204 : یعنی موفقیت‌آمیز بود ولی محتوایی برای نمایش نیست

### Status 205 : reset content /|\ استاتوس 205 : یعنی فرم یا محتوا باید ریست بشه

### Status 206 : partial content /|\ استاتوس 206 : یعنی فقط بخشی از محتوا برگشت داده شده

---

### Status 300 : multiple choices /|\ استاتوس 300 : چند گزینه وجود داره برای ادامه

### Status 301 : moved permanently /|\ استاتوس 301 : آدرس برای همیشه عوض شده

### Status 302 : found /|\ استاتوس 302 : موقتی به آدرس دیگه منتقل شده

### Status 303 : see other /|\ استاتوس 303 : برو یه جای دیگه نتیجه رو ببین

### Status 304 : not modified /|\ استاتوس 304 : تغییری نکرده، از کش استفاده کن

### Status 305 : use proxy /|\ استاتوس 305 : باید از پراکسی استفاده کنی (تقریباً منسوخ شده)

### Status 307 : temporary redirect /|\ استاتوس 307 : موقتی ریدایرکت شده ولی با همون متد

### Status 308 : permanent redirect /|\ استاتوس 308 : دائمی ریدایرکت شده، با همون متد

---

### Status 400 : bad request /|\ استاتوس 400 : درخواست اشتباهه یا ناقصه

### Status 401 : unauthorized /|\ استاتوس 401 : احراز هویت نیاز داری

### Status 402 : payment required /|\ استاتوس 402 : نیاز به پرداخت داره (خیلی استفاده نمی‌شه)

### Status 403 : forbidden /|\ استاتوس 403 : اجازه دسترسی نداری

### Status 404 : not found /|\ استاتوس 404 : همیشه یعنی پیدا نشد، یک چیزی پیدا نشد

### Status 405 : method not allowed /|\ استاتوس 405 : این متد برای این مسیر مجاز نیست

### Status 406 : not acceptable /|\ استاتوس 406 : چیزی که درخواست کردی با فرمت مورد قبول نیست

### Status 407 : proxy authentication required /|\ استاتوس 407 : باید از طریق پراکسی احراز هویت بشی

### Status 408 : request timeout /|\ استاتوس 408 : درخواستت خیلی طول کشید و تایم‌اوت شد

### Status 409 : conflict /|\ استاتوس 409 : یه تضاد یا تداخل وجود داره

### Status 410 : gone /|\ استاتوس 410 : این منبع دیگه برای همیشه رفته

### Status 411 : length required /|\ استاتوس 411 : باید طول محتوا مشخص بشه

### Status 412 : precondition failed /|\ استاتوس 412 : شرایط اولیه برقرار نیست

### Status 413 : payload too large /|\ استاتوس 413 : بدنه‌ی درخواست خیلی بزرگه

### Status 414 : URI too long /|\ استاتوس 414 : آدرس درخواست خیلی درازه

### Status 415 : unsupported media type /|\ استاتوس 415 : فرمت فایل پشتیبانی نمی‌شه

### Status 416 : range not satisfiable /|\ استاتوس 416 : بخشی که خواستی از فایل در دسترس نیست

### Status 417 : expectation failed /|\ استاتوس 417 : چیزی که انتظار می‌رفت محقق نشد

### Status 418 : I’m a teapot /|\ استاتوس 418 : من قوری‌ام! (شوخی RFC، ولی واقعی!)

### Status 422 : unprocessable entity /|\ استاتوس 422 : نمی‌تونه پردازش کنه چون مشکل داره

### Status 425 : too early /|\ استاتوس 425 : خیلی زوده که این درخواست انجام بشه

### Status 426 : upgrade required /|\ استاتوس 426 : باید پروتکلت رو ارتقاء بدی

### Status 428 : precondition required /|\ استاتوس 428 : قبل از درخواست باید شرطی برقرار باشه

### Status 429 : too many requests /|\ استاتوس 429 : خیلی درخواست زدی، آروم‌تر

### Status 431 : request header fields too large /|\ استاتوس 431 : هدرهای درخواست خیلی بزرگن

### Status 451 : unavailable for legal reasons /|\ استاتوس 451 : به دلایل قانونی نمی‌تونیم اینو نشون بدیم

---

### Status 500 : internal server error /|\ استاتوس 500 : یه مشکلی از سمت سرور پیش اومده

### Status 501 : not implemented /|\ استاتوس 501 : سرور این قابلیت رو پیاده‌سازی نکرده

### Status 502 : bad gateway /|\ استاتوس 502 : پاسخ دریافتی از سرور بالا دستی مشکل داره

### Status 503 : service unavailable /|\ استاتوس 503 : فعلاً سرویس در دسترس نیست

### Status 504 : gateway timeout /|\ استاتوس 504 : سرور بالا دستی پاسخ نداد، تایم‌اوت شد

### Status 505 : HTTP version not supported /|\ استاتوس 505 : نسخه HTTP پشتیبانی نمی‌شه

### Status 506 : variant also negotiates /|\ استاتوس 506 : یه چرخه تکراری توی نگوشیت اتفاق افتاده

### Status 507 : insufficient storage /|\ استاتوس 507 : فضای ذخیره‌سازی کافی نیست

### Status 508 : loop detected /|\ استاتوس 508 : یه حلقه بی‌پایان شناسایی شده

### Status 510 : not extended /|\ استاتوس 510 : اطلاعات بیشتری لازمه برای پردازش

### Status 511 : network authentication required /|\ استاتوس 511 : باید اول توی شبکه احراز هویت بشی
