/**
 * Chaouen Stories — cultural routes data
 * Each route is an ordered list of story ids (see stories.js).
 */

const routes = [
  {
    id: "blue-city",
    title: "مسار المدينة الزرقاء",
    description: "جولة هادئة في الأزقة والأبواب والساحة المركزية.",
    duration: "ساعتان",
    image: "/images/route-medina.jpg",
    storyIds: ["uta-el-hammam", "old-medina", "bab-el-ain"],
  },
  {
    id: "crafts",
    title: "مسار الحرف التقليدية",
    description: "من الورشات إلى الأزقة، لقاء مع من يصنعون بأيديهم.",
    duration: "ساعتان ونصف",
    image: "/images/route-crafts.jpg",
    storyIds: ["old-medina", "uta-el-hammam"],
  },
  {
    id: "hidden-stories",
    title: "مسار الحكايات المخفية",
    description: "أماكن أقل ضجيجًا، وحكايات لا يعرفها كثير من الزوار.",
    duration: "ساعة ونصف",
    image: "/images/route-hidden.jpg",
    storyIds: ["bab-el-ain", "ras-el-ma"],
  },
  {
    id: "heritage",
    title: "مسار التراث والثقافة",
    description: "من القصبة إلى العين، تاريخ المدينة في خط واحد.",
    duration: "ثلاث ساعات",
    image: "/images/route-heritage.jpg",
    storyIds: ["kasbah", "uta-el-hammam", "bab-el-ain", "ras-el-ma"],
  },
];

export default routes;