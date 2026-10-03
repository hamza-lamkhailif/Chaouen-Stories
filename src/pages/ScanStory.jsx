import { Link, useParams } from "react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, MapPin, ScanLine } from "lucide-react";
import SafeImage from "../components/SafeImage";
import ArtisanMiniCard from "../components/ArtisanMiniCard";
import NotFound from "./NotFound";
import stories, { getStoryById } from "../data/stories";
import { getArtisansByIds } from "../data/artisans";

/**
 * Landing page for a physical QR code: /scan/:id
 * Mobile-first — this is what a visitor sees standing at the location.
 */
export default function ScanStory() {
  const { id } = useParams();
  const reduce = useReducedMotion();
  const story = getStoryById(id);

  if (!story) return <NotFound />;

  const artisans = getArtisansByIds(story.artisanIds);
  const others = stories.filter((s) => s.id !== story.id).slice(0, 3);

  return (
    <div dir="rtl" className="bg-[#F8FAFC]">
      <div className="mx-auto max-w-xl pb-16">
        {/* Scan banner */}
        <div className="flex items-center gap-2 bg-[#073B70] px-5 py-3 text-sm font-semibold text-white">
          <ScanLine className="h-4 w-4 text-sky-200" aria-hidden="true" />
          أنت الآن في: {story.title}
        </div>

        <SafeImage
          src={story.image}
          alt={story.title}
          loading="eager"
          className="aspect-[4/3] w-full object-cover"
        />

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="-mt-6 rounded-t-3xl bg-white px-5 pb-10 pt-7"
        >
          <p className="text-xs font-semibold text-[#0B4F91]">
            {story.category}
          </p>
          <h1 className="mt-1 text-3xl font-extrabold text-[#073B70]">
            {story.title}
          </h1>
          <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-500">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {story.location}
          </p>

          <div className="mt-6 space-y-5">
            {story.story.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-lg font-medium leading-8 text-slate-800"
                    : "text-base leading-8 text-slate-600"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          {artisans.length > 0 && (
            <section className="mt-10">
              <h2 className="text-lg font-bold text-[#073B70]">
                حرفيون قريبون
              </h2>
              <div className="mt-3 space-y-3">
                {artisans.map((artisan) => (
                  <ArtisanMiniCard key={artisan.id} artisan={artisan} />
                ))}
              </div>
            </section>
          )}

          <section className="mt-10">
            <h2 className="text-lg font-bold text-[#073B70]">
              أماكن أخرى للاكتشاف
            </h2>
            <ul className="mt-3 divide-y divide-slate-100 rounded-xl border border-slate-200">
              {others.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/scan/${s.id}`}
                    className="group flex items-center justify-between px-4 py-3.5 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#0B4F91]"
                  >
                    <span>
                      <span className="block text-sm font-bold text-[#073B70]">
                        {s.title}
                      </span>
                      <span className="block text-xs text-slate-500">
                        {s.location}
                      </span>
                    </span>
                    <ArrowLeft
                      className="h-4 w-4 text-[#0B4F91] transition-transform group-hover:-translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <Link
            to={`/stories/${story.id}`}
            className="mt-8 flex justify-center rounded-xl bg-[#0B4F91] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#073B70] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4F91] focus-visible:ring-offset-2"
          >
            افتح الصفحة الكاملة
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
