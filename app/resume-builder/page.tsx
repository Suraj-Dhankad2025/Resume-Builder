"use client";

import { Provider } from "react-redux";
import { store } from "../lib/redux/store";

export default function Create() {
  return (
    <Provider store={store}>
      <main className="relative h-full w-full overflow-hidden bg-gray-50">
        <div className="grid grid-cols-3 md:grid-cols-6">
          <div className="col-span-3">
           <h1>All input </h1>
          </div>
          <div className="col-span-3">
           <h2>Live preview</h2>
          </div>
        </div>
      </main>
    </Provider>
  );
}