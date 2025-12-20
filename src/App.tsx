import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { AIChatbots } from "./pages/services/AIChatbots";
import { WebDevelopment } from "./pages/services/WebDevelopment";
import { MobileApps } from "./pages/services/MobileApps";
import { GraphicDesign } from "./pages/services/GraphicDesign";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import { BlogList } from "./pages/BlogList";
import { BlogPost } from "./pages/BlogPost";
import { NotFound } from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/ai-chatbots" element={<AIChatbots />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/mobile-apps" element={<MobileApps />} />
        <Route path="/services/graphic-design" element={<GraphicDesign />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
