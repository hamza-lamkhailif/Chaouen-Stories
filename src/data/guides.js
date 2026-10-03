/**
 * Chaouen Stories — guides data
 *
 * SAMPLE profiles for the prototype (no real people).
 * Replace only with real guides who agreed to appear.
 * `routeIds` refer to routes.js.
 */

const guides = [
  {
    id: "guide-sample-1",
    name: "مرشد محلي",
    languages: ["العربية", "الفرنسية", "الإنجليزية"],
    specialty: "التاريخ والعمران",
    image: "/images/guide-1.jpg",
    description:
      "جولات في المدينة القديمة تربط الأماكن بحكاياتها، وتشرح كيف تشكّل العمران حول القصبة والعين.",
    routeIds: ["blue-city", "heritage"],
    isSample: true,
  },
  {
    id: "guide-sample-2",
    name: "مرشدة محلية",
    languages: ["العربية", "الإسبانية"],
    specialty: "الحرف والثقافة المحلية",
    image: "/images/guide-2.jpg",
    description:
      "مسارات تمر بالورشات وتعرّف الزائر على أصحاب الحرف وطريقة عملهم.",
    routeIds: ["crafts", "hidden-stories"],
    isSample: true,
  },
];

export function getGuideById(id) {
  return guides.find((guide) => guide.id === id);
}

export default guides;