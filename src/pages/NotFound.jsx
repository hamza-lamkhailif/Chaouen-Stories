import { Link } from "react-router";

export default function NotFound() {
  return (
    <section
      dir="rtl"
      className="flex min-h-[70vh] items-center justify-center px-5 text-center"
    >
      <div>
        <p className="text-sm font-semibold tracking-[0.28em] text-[#0B4F91]">
          404
        </p>
        <h1 className="mt-3 text-3xl font-extrabold text-[#073B70] sm:text-4xl">
          هذا الزقاق غير موجود
        </h1>
        <p className="mt-3 text-slate-600">
          يبدو أنك ضللت الطريق. عُد إلى الصفحة الرئيسية وابدأ من جديد.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex rounded-xl bg-[#0B4F91] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#073B70] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4F91] focus-visible:ring-offset-2"
        >
          العودة إلى الرئيسية
        </Link>
      </div>
    </section>
  );
}
