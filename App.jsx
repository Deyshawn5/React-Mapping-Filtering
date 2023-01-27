import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Friends from "./components/friends/Friends";
import Blogs from "./components/blogs/Blogs";
import Jobs from "./components/jobs/Jobs";
import TechCompanies from "./components/techCompanies/TechCompanies";
import Events from "./components/events/Events";
import TestAjax from "./components/TestAjax";
import UnknownUser from "./components/UnknownUser";
import Login from "./components/users/Login";
import Register from "./components/users/Register";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import NewFriend from "./components/friends/NewFriend";
import "./assets.css";
import Car from "./components/codeChallenge/Car";
import Product from "./components/productSender/ProductSender";
import CarsModel from "./components/CarsModel";
import Aircraft from "./components/Aircraft";

function App() {
  const [currentUser] = useState({
    firstName: "Deyshawn",
    lastName: "Fox",
    isLoggedIn: false,
  });

  const [cars] = useState([
    {
      make: "Kia",
      model: "Sorento",
      year: 2020,
    },
    {
      make: "Kia",
      model: "Optima",
      year: 2019,
    },
    {
      make: "Tesla",
      model: "Model 3",
      year: 2021,
    },
    {
      make: "Honda",
      model: "Civic",
      year: 2019,
    },
    {
      make: "Honda",
      model: "Accord",
      year: 2018,
    },
    {
      make: "Volkswagen",
      model: "Jetta",
      year: 2021,
    },
  ]);

  return (
    <React.Fragment>
      <SiteNav user={currentUser}></SiteNav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home user={currentUser} />}></Route>
          <Route path="/friends" element={<Friends />}></Route>
          <Route path="/friends/new" element={<NewFriend />}></Route>
          <Route path="/friends/:friendId/edit" element={<NewFriend />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/jobs" element={<Jobs />}></Route>
          <Route path="/techCompanies" element={<TechCompanies />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/testAjax" element={<TestAjax />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/unknownUser" element={<UnknownUser />}></Route>
          <Route path="/car" element={<Car />}></Route>
          <Route path="/carsModel" element={<CarsModel user={cars} />}></Route>
          <Route path="/Aircraft" element={<Aircraft />} />

          <Route
            path="/sender"
            element={<Product user={currentUser} />}
          ></Route>
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
