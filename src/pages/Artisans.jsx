import { motion, useReducedMotion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import ArtisanCard from "../components/ArtisanCard";
import artisans from "../data/artisans";

export default function Artisans() {
  const reduce = useReducedMotion();

  return (
    <>
      <PageHeader
        eyebrow="ARTISANS"
        title="الحرفيون"
        description="أيدٍ تحفظ صنعة الشاون. تعرّف عليهم، وعلى ما يصنعونه."
      />

      <section dir="rtl" className="bg-[#F8FAFC] py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
          {artisans.map((artisan, i) => (
            <motion.div
              key={artisan.id}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <ArtisanCard artisan={artisan} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
