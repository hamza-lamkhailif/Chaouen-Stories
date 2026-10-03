import { Link } from "react-router";
import SafeImage from "./SafeImage";

/** Compact artisan row used inside story pages. */
export default function ArtisanMiniCard({ artisan }) {
  return (
    <Link
      to={`/artisans/${artisan.id}`}
      className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 transition hover:border-[#0B4F91]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4F91]"
    >
      <SafeImage
        src={artisan.image}
        alt={artisan.name}
        className="h-14 w-14 shrink-0 rounded-lg object-cover"
      />
      <div className="min-w-0">
        <p className="truncate text-sm font-bold text-[#073B70]">
          {artisan.name}
        </p>
        <p className="truncate text-sm text-slate-500">{artisan.craft}</p>
        {artisan.isSample && (
          <span className="mt-1 inline-block rounded bg-slate-100 px-1.5 py-0.5 text-[11px] font-medium text-slate-500">
            ملف تجريبي
          </span>
        )}
      </div>
    </Link>
  );
}
