import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root from "./root/root";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
    </LanguageProvider>
  </StrictMode>
);
