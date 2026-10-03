import { Link, useParams } from "react-router";
import { ChevronLeft, Hammer, MapPin } from "lucide-react";
import SafeImage from "../components/SafeImage";
import StoryCard from "../components/StoryCard";
import NotFound from "./NotFound";
import artisans from "../data/artisans";
import stories from "../data/stories";

export default function ArtisanDetails() {
  const { id } = useParams();
  const artisan = artisans.find((a) => a.id === id);

  if (!artisan) return <NotFound />;

  const relatedStories = stories.filter((s) =>
    s.artisanIds?.includes(artisan.id),
  );

  return (
    <article dir="rtl" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8">
        <nav aria-label="مسار التنقل" className="text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link to="/" className="hover:text-[#0B4F91]">
                الرئيسية
              </Link>
            </li>
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <li>
              <Link to="/artisans" className="hover:text-[#0B4F91]">
                الحرفيون
              </Link>
            </li>
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <li aria-current="page" className="font-semibold text-[#073B70]">
              {artisan.name}
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl">
              <SafeImage
                src={artisan.image}
                alt={artisan.name}
                loading="eager"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B4F91]/8 px-3 py-1 text-xs font-semibold text-[#0B4F91]">
              <Hammer className="h-3.5 w-3.5" aria-hidden="true" />
              {artisan.craft}
            </span>

            <h1 className="mt-4 text-4xl font-extrabold text-[#073B70] sm:text-5xl">
              {artisan.name}
            </h1>
            <p className="mt-3 flex items-center gap-2 text-slate-500">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {artisan.location}
            </p>

            <p className="mt-8 text-xl font-medium leading-9 text-slate-800">
              {artisan.description}
            </p>

            {artisan.isSample && (
              <p className="mt-6 rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 text-sm leading-7 text-slate-600">
                هذا ملف تجريبي لأغراض العرض. في النسخة الكاملة تُضاف ملفات
                الحرفيين الحقيقيين بموافقتهم.
              </p>
            )}
          </div>
        </div>

        {relatedStories.length > 0 && (
          <section className="mt-20 border-t border-slate-100 pt-12">
            <h2 className="text-2xl font-extrabold text-[#073B70]">
              حكايات قريبة منه
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedStories.map((s) => (
                <StoryCard key={s.id} story={s} />
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
