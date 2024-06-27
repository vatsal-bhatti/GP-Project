import { RouterProvider } from "react-router-dom";
import Router from "./Routes/RouteIndex";
import { Suspense } from "react";
import Loader from "./components/common/Loader";
function App() {
  const router = Router();
  return (
    <>
      <Suspense fallback={<Loader />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
