import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Form from "./Form";
import App from "./App";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/new" element={<Form />} /> */}
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}