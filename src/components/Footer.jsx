import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiChevronRight,
  FiCode,
} from "react-icons/fi";

const footerLinks = [
  { name: "اكتشف", href: "/discover" },
  { name: "قصص الشاون", href: "/stories" },
  { name: "الحرفيون", href: "/artisans" },
  { name: "المرشدون", href: "/guides" },
  { name: "المسارات", href: "/routes" },
];

const communityLinks = [
  { name: "انضم كمرشد", href: "/guides" },
  { name: "سجل كحرفي", href: "/artisans" },
  { name: "شارك قصة", href: "/stories" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#F8FAFC]" dir="rtl">
      {/* Main Footer */}
      <div className="mx-auto max-w-[1280px] px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="inline-flex items-center">
              <img
                src="/logo/logo-chaouen.png"
                alt="Chaouen Stories"
                className="h-14 w-auto object-contain"
              />
            </a>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-500">
              منصة رقمية تفاعلية لاكتشاف تراث شفشاون، قصصها، حرفها وتجاربها
              المحلية من خلال التكنولوجيا والسرد القصصي.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-[#0B4F91] hover:bg-[#0B4F91] hover:text-white"
              >
                <FiFacebook size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-[#0B4F91] hover:bg-[#0B4F91] hover:text-white"
              >
                <FiInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:border-[#0B4F91] hover:bg-[#0B4F91] hover:text-white"
              >
                <FiLinkedin size={18} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-base font-bold text-slate-900">اكتشف</h3>

            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 text-sm text-slate-500 transition hover:text-[#0B4F91]"
                  >
                    <FiChevronRight
                      size={15}
                      className="transition-transform group-hover:-translate-x-1"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="mb-5 text-base font-bold text-slate-900">
              المجتمع المحلي
            </h3>

            <ul className="space-y-3">
              {communityLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-1.5 text-sm text-slate-500 transition hover:text-[#0B4F91]"
                  >
                    <FiChevronRight
                      size={15}
                      className="transition-transform group-hover:-translate-x-1"
                    />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-base font-bold text-slate-900">
              تواصل معنا
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0B4F91]">
                  <FiMapPin size={17} />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400">الموقع</p>
                  <p className="mt-1 text-sm text-slate-600">شفشاون، المغرب</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0B4F91]">
                  <FiMail size={17} />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400">
                    البريد الإلكتروني
                  </p>
                  <a
                    href="mailto:contact@chaouenstories.ma"
                    className="mt-1 block text-sm text-slate-600 transition hover:text-[#0B4F91]"
                  >
                    contact@chaouenstories.ma
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0B4F91]">
                  <FiPhone size={17} />
                </div>

                <div>
                  <p className="text-xs font-medium text-slate-400">الهاتف</p>
                  <p className="mt-1 text-sm text-slate-600">قريباً</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center justify-between gap-4 px-5 py-5 text-sm md:flex-row lg:px-8">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Chaouen Stories. جميع الحقوق محفوظة.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-slate-400 transition hover:text-[#0B4F91]"
            >
              سياسة الخصوصية
            </a>

            <a
              href="#"
              className="text-slate-400 transition hover:text-[#0B4F91]"
            >
              شروط الاستخدام
            </a>

            <div className="hidden h-4 w-px bg-slate-200 sm:block" />

            <div className="flex items-center gap-1.5 text-slate-400">
              <FiCode size={15} />
              <span>صُنع بحب في شفشاون</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
