import { Link, NavLink } from "react-router";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";

const navLinks = [
  {
    name: "الرئيسية",
    path: "/",
  },
  {
    name: "اكتشف",
    path: "/discover",
  },
  {
    name: "قصص الشاون",
    path: "/stories",
  },
  {
    name: "الحرفيون",
    path: "/artisans",
  },
  {
    name: "المرشدون",
    path: "/guides",
  },
  {
    name: "المسارات",
    path: "/routes",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <nav
        className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between px-5 lg:px-8"
        dir="rtl"
      >
        {/* Logo */}

        <Link
          to="/"
          className="flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/logo/logo-chaouen.png"
            alt="Chaouen Stories"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative py-7 text-[14px] font-semibold transition-colors ${
                  isActive
                    ? "text-[#0B4F91]"
                    : "text-slate-600 hover:text-[#0B4F91]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {isActive && (
                    <span className="absolute bottom-[17px] right-0 h-[2px] w-full rounded-full bg-[#0B4F91]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Desktop Actions */}

        <div className="hidden items-center gap-3 lg:flex">
          <button
            className="flex items-center gap-1.5 rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
            type="button"
          >
            <Globe size={17} />
            <span>AR</span>
          </button>

          <button
            type="button"
            className="rounded-full bg-[#0B4F91] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#073B70]"
          >
            تسجيل الدخول
          </button>
        </div>

        {/* Mobile Menu Button */}

        <button
          type="button"
          className="rounded-xl p-2 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Navigation */}

      {isOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="mx-auto max-w-[1280px] px-5 py-4" dir="rtl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? "bg-blue-50 text-[#0B4F91]"
                        : "text-slate-600 hover:bg-slate-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-slate-700"
              >
                <Globe size={17} />
                العربية
              </button>

              <button
                type="button"
                className="flex-1 rounded-xl bg-[#0B4F91] py-3 text-sm font-bold text-white"
              >
                تسجيل الدخول
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
