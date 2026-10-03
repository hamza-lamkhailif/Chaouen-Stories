import { Link } from "react-router";
import { Clock, MapPin } from "lucide-react";
import SafeImage from "./SafeImage";
import { getStoryById } from "../data/stories";

/** A cultural route with its ordered stops (each stop links to its story). */
export default function RouteCard({ route }) {
  const stops = route.storyIds.map(getStoryById).filter(Boolean);

  return (
    <article className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white md:grid-cols-5">
      <div className="relative min-h-52 md:col-span-2">
        <SafeImage
          src={route.image}
          alt={route.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="p-6 md:col-span-3 md:p-8">
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {route.duration}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {stops.length} محطات
          </span>
        </div>

        <h2 className="mt-3 text-2xl font-extrabold text-[#073B70]">
          {route.title}
        </h2>
        <p className="mt-2 text-[15px] leading-7 text-slate-600">
          {route.description}
        </p>

        <ol className="mt-6 space-y-3">
          {stops.map((stop, i) => (
            <li key={stop.id}>
              <Link
                to={`/stories/${stop.id}`}
                className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4F91]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0B4F91]/10 text-xs font-bold text-[#0B4F91] transition group-hover:bg-[#0B4F91] group-hover:text-white">
                  {i + 1}
                </span>
                <span className="text-[15px] font-semibold text-[#073B70] group-hover:underline">
                  {stop.title}
                </span>
                <span className="text-sm text-slate-400">{stop.location}</span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </article>
  );
}
