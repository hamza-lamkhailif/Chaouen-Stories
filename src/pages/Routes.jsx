import { motion, useReducedMotion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import RouteCard from "../components/RouteCard";
import routes from "../data/routes";

export default function RoutesPage() {
  const reduce = useReducedMotion();

  return (
    <>
      <PageHeader
        eyebrow="ROUTES"
        title="المسارات الثقافية"
        description="اختر مسارًا يجمع الأماكن والحكايات في جولة واحدة، وابدأ من أي محطة."
      />

      <section dir="rtl" className="bg-[#F8FAFC] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl space-y-6 px-5 sm:px-8">
          {routes.map((route, i) => (
            <motion.div
              key={route.id}
              initial={reduce ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <RouteCard route={route} />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
