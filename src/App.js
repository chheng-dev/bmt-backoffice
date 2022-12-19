import React from "react";
import { Switch, Route, Routes } from "react-router-dom";
import Card from "./components/Admin";
import Category from "./components/Screen/Pages/Category/Category";
import EditCategory from "./components/Screen/Pages/Category/Edit";
import CreateCategory from "./components/Screen/Pages/Category/Create";
import Event from "./components/Screen/Pages/Event/index";
import CreateEvent from "./components/Screen/Pages/Event/Create";
import EditEvent from "./components/Screen/Pages/Event/Edit";
import Order from "./components/Screen/Pages/Order/index";
import { Test } from "./Test";
import NotFound from "./components/Screen/Pages/404/index";
import { Logout } from "./components/Logout";
import LayoutContent from "./components/Layouts/Layout";

const App = () => {
  return (
    <>

      <LayoutContent>
        <Routes>
          <Route path="/" element={<Card />} />

          {/* Category */}
          <Route path="category" element={<Category />}></Route>
          <Route path="/category/:id" element={<EditCategory />} />
          <Route path="/category/create" element={<CreateCategory />} />

          {/* Event */}
          <Route path="/event" element={<Event />} />
          <Route path="/event/create" element={<CreateEvent />} />
          <Route path="/event/:id" element={<EditEvent />} />

          {/* Order */}
          <Route path="/order" element={<Order />} />

          <Route path="/test" element={<Test />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </LayoutContent>
      {/* <ProtectedRoute exact path="/login" component={Login} /> */}
      {/* <Routes> */}
        {/* <Route path="/logout" element={<Logout />} /> */}
      {/* </Routes> */}



    </>
  );
}

export default App;
