import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import UseEffectComponent from "./UseEffectComponent";
import WithUseMemo from "./WithUseMemo";
import WithUseCallback from "./WithUseCallback ";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/dashboard" element={<App />} />
        <Route path="/use-effects" element={<UseEffectComponent />} />
        <Route path="/use-memo" element={<WithUseMemo />} />
        <Route path="/dashboard">
          <Route path="use-callback" element={<WithUseCallback />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
