import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import StoryCard from "../components/StoryCard";
import stories from "../data/stories";

const ALL = "الكل";
const categories = [ALL, ...new Set(stories.map((story) => story.category))];

export default function Stories() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(ALL);

  const visible =
    active === ALL ? stories : stories.filter((s) => s.category === active);

  return (
    <>
      <PageHeader
        eyebrow="STORIES"
        title="قصص الشاون"
        description="كل مكان في المدينة له حكاية. اختر واحدة وابدأ من هناك."
      />

      <section dir="rtl" className="bg-[#F8FAFC] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="تصفية القصص حسب الفئة"
          >
            {categories.map((category) => {
              const isActive = category === active;
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActive(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4F91] ${
                    isActive
                      ? "border-[#0B4F91] bg-[#0B4F91] text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-[#0B4F91]/40"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((story, i) => (
              <motion.div
                key={story.id}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <StoryCard story={story} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
