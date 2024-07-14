import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home, About, Contact, User, Github } from "./components";
import { userInfo } from "./components/Github.jsx";

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <App />,
//       children: [
//         {
//           path: "/about",
//           element: <About />,
//         },
//         {
//           path: "/contact",
//           element: <Contact />,
//         },
//       ]
//     },
//   ]
// );

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path="github" loader={userInfo} element={<Github />} />
      <Route path="/:userid" element={<User />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
