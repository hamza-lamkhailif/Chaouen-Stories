import { Link } from "react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Hammer, Map, QrCode, Route } from "lucide-react";

const features = [
  {
    icon: Map,
    title: "خريطة تفاعلية",
    text: "تجوّل في المدينة القديمة وتعرّف على أماكنها ومعالمها قبل أن تصل إليها.",
    to: "/discover",
  },
  {
    icon: QrCode,
    title: "قصص عبر QR",
    text: "امسح الرمز عند المكان، واقرأ حكايته وشاهد صوره في لحظتها.",
    to: "/scan/bab-el-ain",
  },
  {
    icon: Hammer,
    title: "الحرفيون المحليون",
    text: "تعرّف على أصحاب الحرف الذين يحفظون صنعة الشاون بأيديهم.",
    to: "/artisans",
  },
  {
    icon: Route,
    title: "المسارات الثقافية",
    text: "اتبع مسارًا مرتبًا يجمع الأماكن والحكايات والناس في جولة واحدة.",
    to: "/routes",
  },
];

function FeatureItem({ feature, index }) {
  const reduce = useReducedMotion();
  const Icon = feature.icon;
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: (index % 2) * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      // second column sits lower on desktop for an asymmetric rhythm
      className={index % 2 === 1 ? "sm:mt-12" : ""}
    >
      <Link
        to={feature.to}
        className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[#0B4F91]/40 hover:shadow-lg hover:shadow-slate-200/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4F91]"
      >
        <div className="flex items-start justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B4F91]/8 text-[#0B4F91] transition group-hover:bg-[#0B4F91] group-hover:text-white">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </span>
          <span
            className="text-sm font-semibold tracking-widest text-slate-300"
            aria-hidden="true"
          >
            {number}
          </span>
        </div>

        <h3 className="mt-6 text-xl font-bold text-[#073B70]">
          {feature.title}
        </h3>
        <p className="mt-2 flex-1 text-[15px] leading-7 text-slate-600">
          {feature.text}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0B4F91]">
          المزيد
          <ArrowLeft
            className="h-4 w-4 transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          />
        </span>
      </Link>
    </motion.div>
  );
}

export default function Intro() {
  const reduce = useReducedMotion();

  return (
    <section dir="rtl" className="bg-[#F8FAFC] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12">
        {/* Statement */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="lg:sticky lg:top-28">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#0B4F91]" aria-hidden="true" />
              <span className="text-sm font-semibold text-[#0B4F91]">
                عن المنصة
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-extrabold leading-[1.45] text-[#073B70] sm:text-4xl">
              شفشاون كما يحكيها
              <br />
              أهلها وأزقتها
            </h2>

            <p className="mt-6 max-w-md text-base leading-8 text-slate-600 sm:text-lg">
              حكاية الشاون منصة رقمية تعرّف الزوار والشباب بقصص المدينة وأماكنها
              التاريخية وعاداتها وحرفها التقليدية، وتحفظ ذاكرتها للأجيال
              القادمة.
            </p>

            <Link
              to="/discover"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0B4F91] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#073B70] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4F91] focus-visible:ring-offset-2"
            >
              ابدأ الاكتشاف
              <ArrowLeft
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </motion.div>

        {/* Features */}
        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
          {features.map((feature, i) => (
            <FeatureItem key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
