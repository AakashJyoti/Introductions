import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { routes } from "./lib/routes";
import {
  AnimationPage,
  DragPage,
  ExitPage,
  GesturePage,
  HomePage,
  KeyframesPage,
  LayoutPage,
  LineDrawingPage,
  MotionValuesPage,
  PathMorphingPage,
  ReactRouterPage,
  ScrollLinkedPage,
  ScrollTriggeredPage,
  SharedLayoutPage,
  VariantsPage,
} from "./pages";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-5/6 h-screen overflow-auto">
        <Routes>
          <Route path={routes.Home} element={<HomePage />} />
          <Route path={routes.Animation} element={<AnimationPage />} />
          <Route path={routes.Keyframes} element={<KeyframesPage />} />
          <Route path={routes.Variants} element={<VariantsPage />} />
          <Route path={routes.Gesture} element={<GesturePage />} />
          <Route path={routes.Drag} element={<DragPage />} />
          <Route path={routes.Motion_Values} element={<MotionValuesPage />} />
          <Route
            path={routes.Scroll_Triggered}
            element={<ScrollTriggeredPage />}
          />
          <Route path={routes.Scroll_Linked} element={<ScrollLinkedPage />} />
          <Route path={routes.Exit} element={<ExitPage />} />
          <Route path={routes.Layout} element={<LayoutPage />} />
          <Route path={routes.Shared_Layout} element={<SharedLayoutPage />} />
          <Route path={routes.Line_Drawing} element={<LineDrawingPage />} />
          <Route path={routes.Path_Morphing} element={<PathMorphingPage />} />
          <Route path={routes.React_Router} element={<ReactRouterPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
