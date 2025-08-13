## ویدیو: *Next.js 15 Tutorial – 72 – Fetching from a Database (در یوتیوب)*

[Next.js 15 Tutorial – 72 – Fetching from a Database (Fetching Data from a Database in Next.js Server Components using SQLite and Prisma)](https://www.youtube.com/watch?v=IUeSwzvz9i4&utm_source=chatgpt.com)

این ویدیو مربوط به سری آموزش Next.js نسخه 15 هست و حدود **۶ ماه پیش** منتشر شده. موضوعش نمایش نحوه **خواندن داده از یک پایگاه داده (مثل SQLite)** با استفاده از **React Server Components** و **Prisma** و ادغام اون‌ها در Next.js است ([YouTube][1]).

---

## تغییرات Prisma از زمان انتشار تا الان

### تغییرات مهم ذکر شده در Changelog رسمی (Prisma)

* **July 17, 2025**:

  * معرفی **ESM-compatible `prisma-client` generator** در حالت *Preview*
    امکان تولید کلاینت ES Module بدون پسوند `-js` و تنظیم برای خروجی ESM([Prisma][2]).
  * **رابط کاربری جدید در Prisma Console** برای افزایش سهولت در ناوبری پروژه و مدیریت پایگاه داده([Prisma][2]).
  * **قابلیت `npx create-db`**: فرمانی برای راه‌اندازی سریع یک دیتابیس قابل استفاده بدون نیاز به احراز هویت اولیه([Prisma][2]).
  * شروع حرکت به سمت ORM بدون Rust با استفاده از TypeScript برای بهبود عملکرد در آینده (Prisma v7)([Prisma][2]).

* **نسخه Prisma 6.9.0 (حدود 2 ماه پیش)**:

  * معرفی **درایور serverless برای Prisma Postgres** (در Early Access) که بدون نیاز به Prisma ORM یا باینری‌، از طریق HTTP به Postgres متصل می‌شه — مناسب برای محیط‌هایی مثل Edge یا serverless([Prisma][3]).
  * **ویرایشگر پایگاه‌داده در VS Code (embedded Prisma Studio)**: امکان مشاهده، ویرایش و مدیریت داده‌ و اسکیمای دیتابیس مستقیماً داخل VS Code([Prisma][3]).
  * قابلیت **بازتولید بک‌آپ‌ها (restore backups)** از طریق کنسول Prisma فقط با چند کلیک در UI([Prisma][3]).
  * فعال شدن **منطقه جدید برای Prisma Postgres: San Francisco (`us-west-1`)** برای بهبود عملکرد و تأخیر کمتر برای کاربران غرب آمریکا([Prisma][3]).

* **در GitHub Releases**:

  * رفع باگ‌ها و بهبودهای پایداری برای ویژگی‌هایی مثل **`prisma-client` generator جدید** و بخش *queryCompiler Preview* (ORM بدون Rust)([GitHub][4]).
  * حذف شدگی `prisma.$use` (middleware) و پیشنهاد استفاده از **Prisma Client Extensions** به جای آن([GitHub][4]).
  * **بهبود performance در type generation** برای تجربه روان‌تر در ویرایشگرها([GitHub][4]).
  * پشتیبانی آزمایشی ولی بهبود یافته برای **multi-schema**، ارائه‌ی جدول مشاهده شده (views)، و پشتیبانی از جداول خارجی (externally managed tables)([GitHub][4]).

---

## جمع‌بندی مقایسه‌ای

| ویژگی / بخش                   | وضعیت هنگام انتشار ویدیو (\~6 ماه پیش) | تغییرات تا امروز (تا آگوست 2025)                                                                        |
| ----------------------------- | -------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| نسخه Prisma                   | احتمالاً نسخه v6 یا حدود اون           | معرفی نسخه 6.9.0، پیش‌نمایش generator جدید، حذف middleware، بهبود type generation، ویژگی‌های کنسول و UI |
| قابلیت ESM                    | نداشت                                  | ارائه در حالت Preview برای prisma-client (ESM-compatible)                                               |
| مدیریت پایگاه داده در VS Code | محدود یا غیرمخفی                       | اکنون دارای embedded Prisma Studio در VS Code                                                           |
| بک‌آپ‌گیری و ری‌استور         | نیاز به تماس با پشتیبانی               | امکان مدیریت و بازگردانی بک‌آپ‌ها از UI کنسول Prisma                                                    |
| Serverless postgre driver     | ندارد                                  | افزودن درایور HTTP بدون نیاز به ORM — مناسب برای محیط‌هایی مثل Lambda یا Edge                           |
| مناطق جغرافیایی جدید          | وجود نداشت                             | افزوده شدن `us-west-1` (San Francisco) برای کاهش latency                                                |
| پایداری و عملکرد              | احتمالاً ناپایدارتر نسبت به الان       | رفع باگ‌ها، بهبود queryCompiler، بهبود‌های کلی در generator و type performance                          |
| پشتیبانی از schemas/views     | در حالت Preview یا محدود               | پیشرفت در multi-schema، view support و قابلیت استفاده از جداول خارجی در Migrate یا Query                |

---

### جمع‌بندی نهایی:

* ویدیو بر اساس وضعیت **Prisma حدود ۶ ماه پیش** هست که امکانات ابتدایی و نمونه شروع کار با SQLite و Prisma رو نشون می‌داد.
* از آن زمان به بعد، Prisma تغییرات و ویژگی‌های قابل‌توجهی اضافه کرده: امکانات توسعه‌دهنده بهتر، UI پیشرفته، عملکرد مطلوب‌تر، پشتیبانی از ESM، انعطاف بیشتر در deployment (serverless driver)، و همچنین افزایش پایداری و توسعه ساختار پروژه‌ها با multi-schema و view.