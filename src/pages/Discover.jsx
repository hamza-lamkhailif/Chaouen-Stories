import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ArrowLeft, MapPin, Search } from "lucide-react";
import PageHeader from "../components/PageHeader";
import stories from "../data/stories";
import locations, { MAP_CENTER } from "../data/locations";

const ALL = "الكل";
const categories = [ALL, ...new Set(stories.map((s) => s.category))];

function pinIcon(active) {
  const size = active ? 34 : 28;
  const color = active ? "#073B70" : "#0B4F91";
  return L.divIcon({
    className: "",
    html: `<span style="display:block;width:${size}px;height:${size}px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:${color};border:3px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.35)"></span>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
  });
}

export default function Discover() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);
  const [selectedId, setSelectedId] = useState(null);

  const mapElRef = useRef(null);
  const mapRef = useRef(null);
  const layerRef = useRef(null);

  const visible = useMemo(() => {
    const q = query.trim();
    return stories.filter(
      (s) =>
        (category === ALL || s.category === category) &&
        (!q ||
          s.title.includes(q) ||
          s.location.includes(q) ||
          s.category.includes(q)),
    );
  }, [query, category]);

  const selected = stories.find((s) => s.id === selectedId);

  // Create the map once
  useEffect(() => {
    const map = L.map(mapElRef.current, { scrollWheelZoom: false }).setView(
      MAP_CENTER,
      16,
    );
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    mapRef.current = map;
    layerRef.current = L.layerGroup().addTo(map);

    return () => {
      map.remove();
      mapRef.current = null;
      layerRef.current = null;
    };
  }, []);

  // Redraw markers when the filter or selection changes
  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    layer.clearLayers();

    visible.forEach((story) => {
      const position = locations[story.id];
      if (!position) return;
      L.marker(position, {
        icon: pinIcon(story.id === selectedId),
        title: story.title,
        alt: story.title,
      })
        .on("click", () => setSelectedId(story.id))
        .addTo(layer);
    });
  }, [visible, selectedId]);

  // Fly to the selected place
  useEffect(() => {
    const map = mapRef.current;
    const position = selectedId && locations[selectedId];
    if (map && position) map.flyTo(position, 17, { duration: 0.8 });
  }, [selectedId]);

  return (
    <>
      <PageHeader
        eyebrow="DISCOVER"
        title="اكتشف شفشاون"
        description="ابحث عن مكان أو اختر فئة، ثم افتح الحكاية من الخريطة."
      />

      <section dir="rtl" className="bg-[#F8FAFC] py-10 sm:py-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-12">
          {/* List + filters */}
          <div className="order-2 lg:order-1 lg:col-span-5">
            <label className="relative block">
              <span className="sr-only">ابحث عن مكان</span>
              <Search
                className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ابحث عن مكان…"
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-4 pr-12 text-base text-slate-800 placeholder:text-slate-400 focus:border-[#0B4F91] focus:outline-none focus:ring-2 focus:ring-[#0B4F91]/20"
              />
            </label>

            <div
              className="mt-4 flex flex-wrap gap-2"
              role="group"
              aria-label="تصفية الأماكن حسب الفئة"
            >
              {categories.map((c) => {
                const isActive = c === category;
                return (
                  <button
                    key={c}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setCategory(c)}
                    className={`rounded-full border px-3.5 py-1.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4F91] ${
                      isActive
                        ? "border-[#0B4F91] bg-[#0B4F91] text-white"
                        : "border-slate-200 bg-white text-slate-600 hover:border-[#0B4F91]/40"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>

            <ul className="mt-6 space-y-3">
              {visible.map((story) => {
                const isSelected = story.id === selectedId;
                return (
                  <li key={story.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedId(story.id)}
                      aria-pressed={isSelected}
                      className={`w-full rounded-xl border p-4 text-right transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4F91] ${
                        isSelected
                          ? "border-[#0B4F91] bg-white shadow-md shadow-slate-200"
                          : "border-slate-200 bg-white hover:border-[#0B4F91]/40"
                      }`}
                    >
                      <span className="block text-xs font-semibold text-[#0B4F91]">
                        {story.category}
                      </span>
                      <span className="mt-1 block text-lg font-bold text-[#073B70]">
                        {story.title}
                      </span>
                      <span className="mt-1 flex items-center gap-1.5 text-sm text-slate-500">
                        <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                        {story.location}
                      </span>
                    </button>
                  </li>
                );
              })}
              {visible.length === 0 && (
                <li className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-slate-500">
                  لا توجد نتائج. جرّب كلمة أخرى.
                </li>
              )}
            </ul>
          </div>

          {/* Map */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="lg:sticky lg:top-24">
              <div
                ref={mapElRef}
                dir="ltr"
                role="region"
                aria-label="خريطة أماكن شفشاون"
                className="relative z-0 h-[340px] w-full overflow-hidden rounded-2xl border border-slate-200 sm:h-[420px] lg:h-[560px]"
              />

              {selected && (
                <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="min-w-0">
                    <p className="truncate text-lg font-bold text-[#073B70]">
                      {selected.title}
                    </p>
                    <p className="truncate text-sm text-slate-500">
                      {selected.shortDescription}
                    </p>
                  </div>
                  <Link
                    to={`/stories/${selected.id}`}
                    className="group inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#0B4F91] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#073B70] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B4F91] focus-visible:ring-offset-2"
                  >
                    اقرأ الحكاية
                    <ArrowLeft
                      className="h-4 w-4 transition-transform group-hover:-translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
