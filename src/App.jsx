import { Routes, Route } from "react-router";

import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Stories from "./pages/Stories";
import StoryDetails from "./pages/StoryDetails";
import Artisans from "./pages/Artisans";
import ArtisanDetails from "./pages/ArtisanDetails";
import Guides from "./pages/Guides";
import GuideDetails from "./pages/GuideDetails";
import RoutesPage from "./pages/Routes";
import ScanStory from "./pages/ScanStory";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route path="/discover" element={<Discover />} />

          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/:id" element={<StoryDetails />} />

          <Route path="/artisans" element={<Artisans />} />
          <Route path="/artisans/:id" element={<ArtisanDetails />} />

          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:id" element={<GuideDetails />} />

          <Route path="/routes" element={<RoutesPage />} />

          <Route path="/scan/:id" element={<ScanStory />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
