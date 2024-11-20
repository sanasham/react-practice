import SectionA from "./components/Lazy-Loading/SectionA";
import SectionB from "./components/Lazy-Loading/SectionB";
import SectionC from "./components/Lazy-Loading/SectionC";
// import Sorting from "./components/Sorting";
import { lazy, Suspense } from "react";
const LazyComponent = lazy(() => import("./components/Lazy-Loading/SectionB"));
function App() {
  return (
    <div>
      {/* <Sorting /> */}
      <SectionA />
      <Suspense fallback={<h1>Loading ...</h1>}>
        <LazyComponent />
      </Suspense>
      <SectionC />
    </div>
  );
}

export default App;
