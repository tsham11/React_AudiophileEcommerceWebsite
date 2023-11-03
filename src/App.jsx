import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import CategoryLayout from "./layouts/CategoryLayout";

import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Product from "./pages/product/Product";
import Checkout from "./pages/checkout/Checkout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      {/*nav, -outlet-, footer */}
      <Route path="home" element={<Home />} />
      <Route path=":category" element={<CategoryLayout />}>
        {/*head,-product list an product-,3nivti da kaci */}
        <Route path="" element={<List />}>
          <Route path=":product" element={<Product />} />
          {/*-product-, others list datashi */}
        </Route>
      </Route>
      <Route path="checkout" element={<Checkout />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
