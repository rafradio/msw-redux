import * as React from "react";
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";
import App from './App.jsx'
import './index.css'
import './App.css'
import { store } from "./store/store.js";
import { router } from "./routes/routes.jsx";

async function enableMocking() {
  if (process.env.NODE_ENV === "development") {
    const { worker } = await import("./api/server");

    return worker.start();
  }
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}/>
      </Provider>
    // </React.StrictMode>,
  )
})
