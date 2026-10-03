import { Link, useParams } from "react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, MapPin, QrCode, Tag } from "lucide-react";
import SafeImage from "../components/SafeImage";
import StoryCard from "../components/StoryCard";
import ArtisanMiniCard from "../components/ArtisanMiniCard";
import NotFound from "./NotFound";
import stories, { getStoryById } from "../data/stories";
import { getArtisansByIds } from "../data/artisans";

export default function StoryDetails() {
  const { id } = useParams();
  const reduce = useReducedMotion();
  const story = getStoryById(id);

  if (!story) return <NotFound />;

  const artisans = getArtisansByIds(story.artisanIds);
  const related = stories.filter((s) => s.id !== story.id).slice(0, 3);

  return (
    <article dir="rtl" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8">
        {/* Breadcrumb */}
        <nav aria-label="مسار التنقل" className="text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link to="/" className="hover:text-[#0B4F91]">
                الرئيسية
              </Link>
            </li>
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <li>
              <Link to="/stories" className="hover:text-[#0B4F91]">
                قصص الشاون
              </Link>
            </li>
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <li aria-current="page" className="font-semibold text-[#073B70]">
              {story.title}
            </li>
          </ol>
        </nav>

        {/* Title */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-8"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B4F91]/8 px-3 py-1 text-xs font-semibold text-[#0B4F91]">
            <Tag className="h-3.5 w-3.5" aria-hidden="true" />
            {story.category}
          </span>
          <h1 className="mt-4 text-4xl font-extrabold text-[#073B70] sm:text-5xl">
            {story.title}
          </h1>
          <p className="mt-3 flex items-center gap-2 text-slate-500">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {story.location}
          </p>
        </motion.div>

        {/* Image */}
        <div className="mt-8 overflow-hidden rounded-3xl">
          <SafeImage
            src={story.image}
            alt={story.title}
            loading="eager"
            className="aspect-[16/9] max-h-[32rem] w-full object-cover"
          />
        </div>

        {/* Body + sidebar */}
        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            {story.story.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-xl font-medium leading-9 text-slate-800"
                    : "mt-6 text-lg leading-9 text-slate-600"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="space-y-8 lg:col-span-5">
            <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6">
              <div className="flex items-center gap-2 text-[#073B70]">
                <QrCode className="h-5 w-5" aria-hidden="true" />
                <h2 className="font-bold">نسخة المسح</h2>
              </div>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                هكذا يرى الزائر هذه الحكاية عندما يمسح الرمز في المكان.
              </p>
              <Link
                to={`/scan/${story.id}`}
                className="mt-4 inline-flex rounded-xl bg-[#0B4F91] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#073B70] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4F91] focus-visible:ring-offset-2"
              >
                افتح كما يظهر عند المسح
              </Link>
            </div>

            {artisans.length > 0 && (
              <div>
                <h2 className="text-lg font-bold text-[#073B70]">
                  حرفيون قريبون
                </h2>
                <div className="mt-4 space-y-3">
                  {artisans.map((artisan) => (
                    <ArtisanMiniCard key={artisan.id} artisan={artisan} />
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* Related */}
        <section className="mt-20 border-t border-slate-100 pt-12">
          <h2 className="text-2xl font-extrabold text-[#073B70]">
            حكايات أخرى
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((s) => (
              <StoryCard key={s.id} story={s} />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}
