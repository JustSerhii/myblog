import { createFileRoute } from "@tanstack/react-router";
import AboutPage from "../pages/AboutPage";
// import WarmupPage from "../pages/WarmupPage";

export const Route = createFileRoute("/about")({
  component: AboutComponent,
});

function AboutComponent () {
  return (
    <div className="p-2">
      <AboutPage></AboutPage>
      {/* <WarmupPage></WarmupPage> */}
    </div>
  );
}
