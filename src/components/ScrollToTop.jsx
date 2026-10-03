import { useEffect } from "react";
import { useLocation } from "react-router";

/** Scrolls to the top on every route change (React Router keeps scroll by default). */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
