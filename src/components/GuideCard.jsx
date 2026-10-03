import { Link } from "react-router";
import { ArrowLeft, Languages } from "lucide-react";
import SafeImage from "./SafeImage";

export default function GuideCard({ guide }) {
  return (
    <Link
      to={`/guides/${guide.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-[#0B4F91]/40 hover:shadow-lg hover:shadow-slate-200/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4F91]"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <SafeImage
          src={guide.image}
          alt={guide.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#073B70]">
          {guide.specialty}
        </span>
        {guide.isSample && (
          <span className="absolute bottom-3 right-3 rounded bg-black/55 px-2 py-0.5 text-[11px] font-medium text-white">
            ملف تجريبي
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-[#073B70]">{guide.name}</h3>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
          <Languages className="h-3.5 w-3.5" aria-hidden="true" />
          {guide.languages.join(" · ")}
        </p>
        <p className="mt-3 flex-1 text-[15px] leading-7 text-slate-600">
          {guide.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B4F91]">
          عرض الملف
          <ArrowLeft
            className="h-4 w-4 transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );
}
