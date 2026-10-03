import { motion, useReducedMotion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import GuideCard from "../components/GuideCard";
import guides from "../data/guides";

export default function Guides() {
  const reduce = useReducedMotion();

  return (
    <>
      <PageHeader
        eyebrow="GUIDES"
        title="المرشدون"
        description="أبناء المدينة الذين يعرفون أزقتها، ويحكون قصصها بلغتك."
      />

      <section dir="rtl" className="bg-[#F8FAFC] py-12 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
          {guides.map((guide, i) => (
            <motion.div
              key={guide.id}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GuideCard guide={guide} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
