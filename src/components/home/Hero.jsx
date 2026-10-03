import { useState } from "react";
import { Link } from "react-router";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, Compass, MapPin, QrCode, ScanLine } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Decorative QR pattern (prototype visual only — not a scannable code) */
/* ------------------------------------------------------------------ */
const QR_SIZE = 21;

function buildQrCells() {
  const cells = [];
  let seed = 7;
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  const inFinder = (x, y) =>
    (x < 8 && y < 8) ||
    (x > QR_SIZE - 9 && y < 8) ||
    (x < 8 && y > QR_SIZE - 9);

  for (let y = 0; y < QR_SIZE; y++) {
    for (let x = 0; x < QR_SIZE; x++) {
      if (!inFinder(x, y) && rand() > 0.52) cells.push([x, y]);
    }
  }
  return cells;
}

const QR_CELLS = buildQrCells();

function Finder({ x, y }) {
  return (
    <g>
      <rect x={x} y={y} width="7" height="7" rx="1" fill="#073B70" />
      <rect x={x + 1} y={y + 1} width="5" height="5" rx="0.6" fill="#fff" />
      <rect x={x + 2} y={y + 2} width="3" height="3" rx="0.4" fill="#073B70" />
    </g>
  );
}

function QrVisual({ className = "" }) {
  return (
    <svg
      viewBox={`0 0 ${QR_SIZE} ${QR_SIZE}`}
      className={className}
      role="img"
      aria-label="رمز QR توضيحي"
      shapeRendering="crispEdges"
    >
      <Finder x={0} y={0} />
      <Finder x={QR_SIZE - 7} y={0} />
      <Finder x={0} y={QR_SIZE - 7} />
      {QR_CELLS.map(([x, y]) => (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width="1"
          height="1"
          fill="#073B70"
        />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */
export default function Hero() {
  const reduce = useReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);

  const fadeUp = (delay = 0) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      dir="rtl"
      className="relative isolate overflow-hidden bg-[#073B70] text-white"
    >
      {/* Background image + overlays */}
      <div className="absolute inset-0 -z-10">
        {!imgFailed && (
          <motion.img
            src="/images/hero-chaouen.jpg"
            alt="أزقة شفشاون الزرقاء في المدينة القديمة"
            onError={() => setImgFailed(true)}
            initial={reduce ? false : { scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2.4, ease: "easeOut" }}
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
        )}
        {/* Text-side overlay (right in RTL) */}
        <div className="absolute inset-0 bg-linear-to-l from-[#073B70]/95 via-[#073B70]/70 to-[#073B70]/20" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-linear-to-t from-[#041F3B]/70 via-transparent to-transparent" />
      </div>

      <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-12 lg:gap-8 lg:py-24">
        {/* Text column */}
        <div className="lg:col-span-7">
          <motion.div {...fadeUp(0.05)} className="flex items-center gap-3">
            <span className="h-px w-10 bg-white/60" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-[0.28em] text-sky-100 sm:text-sm">
              CHAOUEN STORIES
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.15)}
            className="mt-6 text-4xl font-extrabold leading-[1.35] sm:text-5xl lg:text-6xl lg:leading-[1.3]"
          >
            كل زقاق حكاية،
            <br />
            <span className="text-sky-200">وكل حكاية ذاكرة.</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.28)}
            className="mt-6 max-w-xl text-base leading-8 text-slate-100/90 sm:text-lg"
          >
            اكتشف القصة وراء المكان، وتعرّف على الأشخاص الذين يصنعون ذاكرة
            الشاون. امسح الرمز عند باب العين، واستمع لحكاية المدينة من أهلها.
          </motion.p>

          <motion.div
            {...fadeUp(0.4)}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              to="/discover"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-bold text-[#073B70] shadow-lg shadow-black/20 transition hover:bg-sky-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#073B70]"
            >
              <Compass className="h-5 w-5" aria-hidden="true" />
              اكتشف شفشاون
              <ArrowLeft
                className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                aria-hidden="true"
              />
            </Link>

            <Link
              to="/stories"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#073B70]"
            >
              استكشف القصص
            </Link>
          </motion.div>

          <motion.div
            {...fadeUp(0.52)}
            className="mt-10 flex items-center gap-2 text-sm text-sky-100/80"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            شفشاون، شمال المغرب
          </motion.div>
        </div>

        {/* QR / story card */}
        <div className="flex justify-center lg:col-span-5 lg:justify-start">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 30, rotate: 0 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={reduce ? undefined : { rotate: 0, y: -4 }}
            className="w-full max-w-[19rem] sm:max-w-sm"
          >
            <Link
              to="/scan/bab-el-ain"
              aria-label="جرّب مسح حكاية باب العين"
              className="block rounded-3xl bg-white p-5 text-slate-800 shadow-2xl shadow-black/30 ring-1 ring-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="/logo/logo-chaouen.png"
                    alt=""
                    className="h-7 w-7 object-contain"
                  />
                  <span className="text-sm font-bold text-[#073B70]">
                    امسح الحكاية
                  </span>
                </div>
                <QrCode className="h-5 w-5 text-[#0B4F91]" aria-hidden="true" />
              </div>

              <div className="relative mt-4 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                <QrVisual className="mx-auto w-full max-w-[11rem]" />
                {/* Scan line */}
                {!reduce && (
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-x-6 h-0.5 rounded-full bg-[#0B4F91]/70 shadow-[0_0_12px_rgba(11,79,145,0.6)]"
                    initial={{ top: "12%" }}
                    animate={{ top: ["12%", "86%", "12%"] }}
                    transition={{
                      duration: 4.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </div>

              <div className="mt-5 border-t border-slate-100 pt-4">
                <p className="text-xs font-semibold text-[#0B4F91]">
                  معلم تاريخي
                </p>
                <h3 className="mt-1 text-xl font-extrabold text-[#073B70]">
                  باب العين
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                  <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  المدينة القديمة، شفشاون
                </p>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
                <ScanLine
                  className="h-4 w-4 text-[#0B4F91]"
                  aria-hidden="true"
                />
                قصة · صور · حرفيون قريبون
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
