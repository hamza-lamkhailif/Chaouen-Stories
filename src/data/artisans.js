/**
 * Chaouen Stories — artisans data
 *
 * These are SAMPLE profiles for the prototype (no real people).
 * Replace them with real artisans only with their permission.
 * `isSample: true` shows a "ملف تجريبي" badge in the UI.
 */

const artisans = [
  {
    id: "weaver-sample",
    name: "حرفي النسيج",
    craft: "النسيج التقليدي",
    location: "المدينة القديمة",
    image: "/images/artisan-1.jpg",
    description:
      "نسيج يدوي بالصوف والألوان التي تعرفها جبال الريف، يُصنع بصبر على النول.",
    isSample: true,
  },
  {
    id: "woodwork-sample",
    name: "حرفي الخشب",
    craft: "النجارة وأشغال الخشب",
    location: "قرب ساحة وطاء الحمام",
    image: "/images/artisan-3.jpg",
    description:
      "أبواب ونوافذ وقطع صغيرة تحمل زخارف الصنعة المحلية.",
    isSample: true,
  },
  {
    id: "ceramics-sample",
    name: "حرفي الخزف",
    craft: "الخزف والفخار",
    location: "المدينة القديمة",
    image: "/images/artisan-2.jpg",
    description:
      "أواني وقطع مزخرفة تصنع بالطين وتُلوَّن باليد.",
    isSample: true,
  },
];

export function getArtisansByIds(ids = []) {
  return ids
    .map((id) => artisans.find((artisan) => artisan.id === id))
    .filter(Boolean);
}

export default artisans;