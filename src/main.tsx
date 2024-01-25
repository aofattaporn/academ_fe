import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import { AuthProvider } from "./layouts/AuthProvider.tsx";
import { store } from "./stores/store.ts";
import { Provider } from "react-redux";
import CreateProject from "./components/CreateModal/CreateModalComp.tsx";

async function enableMocking() {
  console.log(import.meta.env.MODE);
  if (import.meta.env.MODE !== "test") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  return worker.start();
}

const queryClient = new QueryClient();

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <AuthProvider>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </QueryClientProvider>
        </Provider>
      </AuthProvider>
    </React.StrictMode>
  );
});
