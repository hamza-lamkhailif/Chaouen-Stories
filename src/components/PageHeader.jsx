/** Shared top band for list pages (Stories, Artisans, Guides, Routes…). */
export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <header dir="rtl" className="bg-[#073B70] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        {eyebrow && (
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-white/60" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.28em] text-sky-100 sm:text-sm">
              {eyebrow}
            </span>
          </div>
        )}
        <h1 className="mt-5 text-4xl font-extrabold leading-[1.35] sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-8 text-slate-100/85 sm:text-lg">
            {description}
          </p>
        )}
        {children}
      </div>
    </header>
  );
}
