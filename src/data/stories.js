/**
 * Chaouen Stories — stories data
 *
 * IMPORTANT: the texts below are prototype placeholders written in general,
 * conservative terms. Before the demo, review them with local sources
 * (association members, local historians, guides) and replace/extend them.
 * `verified: false` marks content that has not been reviewed yet.
 *
 * Images expected in /public/images/ (a blue gradient is shown if missing).
 */

const stories = [
  {
    id: "bab-el-ain",
    title: "باب العين",
    category: "معالم تاريخية",
    location: "المدينة القديمة",
    image: "/images/bab-el-ain.jpg",
    shortDescription:
      "من أبواب المدينة القديمة المعروفة، ومنه يبدأ الطريق نحو العين التي ارتبط بها اسم المكان.",
    story: [
      "كانت أبواب شفشاون القديمة تفتح المدينة على محيطها، وتنظّم الدخول والخروج من أحيائها. وباب العين واحد من أكثرها حضورًا في ذاكرة السكان والزوار.",
      "يرتبط اسمه بالعين، أي بالماء الذي صنع حياة المدينة. فالمياه النازلة من الجبل كانت سببًا في استقرار الناس هنا، وفي حيوية الأحياء من حولها.",
      "عند هذا الباب يبدأ الطريق نحو عين رأس الماء، حيث تجتمع الحياة اليومية حول الماء. توقّف قليلًا قبل أن تعبر، فالمكان يحكي أكثر مما يبدو.",
    ],
    artisanIds: ["weaver-sample", "woodwork-sample"],
    verified: false,
  },
  {
    id: "kasbah",
    title: "القصبة",
    category: "معالم تاريخية",
    location: "وسط المدينة",
    image: "/images/kasbah.jpg",
    shortDescription:
      "حصن المدينة القديم، شاهد على نشأة شفشاون ومدخل لفهم تاريخها.",
    story: [
      "يعود تأسيس القصبة إلى القرن الخامس عشر، مع نشأة المدينة نفسها. بُنيت لتحمي شفشاون وتكون مركز حراستها.",
      "بين أسوارها العالية وأبراجها، يمكنك أن ترى المدينة من مكان مختلف، وأن تفهم كيف تشكّل هذا العمران حول الحصن.",
      "تضم القصبة اليوم حديقة هادئة ومتحفًا يعرّف بتراث المنطقة. صعود برجها من أجمل الطرق لرؤية الأسطح والجبال معًا.",
    ],
    artisanIds: ["woodwork-sample", "ceramics-sample"],
    verified: false,
  },
  {
    id: "old-medina",
    title: "المدينة القديمة",
    category: "أحياء وأزقة",
    location: "قلب شفشاون",
    image: "/images/old-medina.jpg",
    shortDescription:
      "أزقة ضيقة وجدران زرقاء وأبواب خشبية، حيث تتعلّم المدينة أن تُقرأ ببطء.",
    story: [
      "المدينة القديمة هي القلب الحي لشفشاون: أزقة ضيقة، ودرجات صاعدة، وبيوت متقاربة تحفظ ظلالها وأسرارها.",
      "اللون الأزرق هو أول ما يلفت الزائر، وتتعدد الروايات حول أصله، ولا توجد رواية واحدة متفق عليها. اسأل أهل المدينة، وسيحكي كل منهم قصة.",
      "امشِ بلا عجلة، فالتفاصيل الصغيرة هي الحكاية: باب مزخرف، ونافذة بحديد مشغول، وركن يجلس فيه الجيران.",
    ],
    artisanIds: ["weaver-sample", "ceramics-sample"],
    verified: false,
  },
  {
    id: "ras-el-ma",
    title: "رأس الماء",
    category: "طبيعة وماء",
    location: "حافة المدينة",
    image: "/images/ras-el-ma.jpg",
    shortDescription:
      "العين التي تنزل من الجبل إلى المدينة، ومكان يلتقي فيه الماء بالحياة اليومية.",
    story: [
      "رأس الماء هو المكان الذي يخرج منه الماء من الجبل ليجري نحو المدينة، وهو من أكثر الأماكن ارتباطًا بحياة السكان.",
      "قرب الماء ترى الناس يجلسون ويتحدثون ويستريحون، والمكان يعطي إحساسًا مختلفًا عن أزقة المدينة.",
      "هو نقطة جيدة لبداية جولة أو لنهايتها، قبل العودة إلى المدينة القديمة عبر باب العين.",
    ],
    artisanIds: ["weaver-sample"],
    verified: false,
  },
  {
    id: "uta-el-hammam",
    title: "ساحة وطاء الحمام",
    category: "أماكن عامة",
    location: "وسط المدينة",
    image: "/images/uta-el-hammam.jpg",
    shortDescription:
      "الساحة المركزية قرب القصبة، حيث يلتقي الأهالي والزوار حول المقاهي والحكايات.",
    story: [
      "ساحة وطاء الحمام هي قلب الحياة العامة في المدينة، وتقع بجوار القصبة والمسجد الأعظم.",
      "تجتمع فيها المقاهي والمطاعم، وهي المكان الذي يبدأ منه كثير من الزوار جولتهم، ويلتقي فيه الناس بعد يوم طويل.",
      "اجلس قليلًا وراقب الحركة، فمن الساحة يمكنك أن تفهم إيقاع المدينة.",
    ],
    artisanIds: ["woodwork-sample", "weaver-sample"],
    verified: false,
  },
];

export function getStoryById(id) {
  return stories.find((story) => story.id === id);
}

export default stories;