import { Link, useParams } from "react-router";
import { ChevronLeft, Clock, Languages } from "lucide-react";
import SafeImage from "../components/SafeImage";
import NotFound from "./NotFound";
import { getGuideById } from "../data/guides";
import routes from "../data/routes";

export default function GuideDetails() {
  const { id } = useParams();
  const guide = getGuideById(id);

  if (!guide) return <NotFound />;

  const guideRoutes = routes.filter((r) => guide.routeIds?.includes(r.id));

  return (
    <article dir="rtl" className="bg-white">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8">
        <nav aria-label="مسار التنقل" className="text-sm text-slate-500">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link to="/" className="hover:text-[#0B4F91]">
                الرئيسية
              </Link>
            </li>
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <li>
              <Link to="/guides" className="hover:text-[#0B4F91]">
                المرشدون
              </Link>
            </li>
            <ChevronLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <li aria-current="page" className="font-semibold text-[#073B70]">
              {guide.name}
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl">
              <SafeImage
                src={guide.image}
                alt={guide.name}
                loading="eager"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <span className="inline-flex rounded-full bg-[#0B4F91]/8 px-3 py-1 text-xs font-semibold text-[#0B4F91]">
              {guide.specialty}
            </span>

            <h1 className="mt-4 text-4xl font-extrabold text-[#073B70] sm:text-5xl">
              {guide.name}
            </h1>
            <p className="mt-3 flex items-center gap-2 text-slate-500">
              <Languages className="h-4 w-4" aria-hidden="true" />
              {guide.languages.join(" · ")}
            </p>

            <p className="mt-8 text-xl font-medium leading-9 text-slate-800">
              {guide.description}
            </p>

            {guide.isSample && (
              <p className="mt-6 rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 text-sm leading-7 text-slate-600">
                هذا ملف تجريبي لأغراض العرض. في النسخة الكاملة تُضاف ملفات
                المرشدين الحقيقيين بموافقتهم.
              </p>
            )}

            {guideRoutes.length > 0 && (
              <section className="mt-10">
                <h2 className="text-lg font-bold text-[#073B70]">
                  المسارات التي يقدّمها
                </h2>
                <ul className="mt-4 divide-y divide-slate-100 rounded-xl border border-slate-200">
                  {guideRoutes.map((route) => (
                    <li
                      key={route.id}
                      className="flex items-center justify-between gap-4 px-4 py-3.5"
                    >
                      <span className="font-semibold text-[#073B70]">
                        {route.title}
                      </span>
                      <span className="flex shrink-0 items-center gap-1.5 text-sm text-slate-500">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        {route.duration}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
