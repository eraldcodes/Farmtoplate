import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Shop from "./routes/Shop";
import Aboutus from "./routes/Aboutus";
import Contact from "./routes/Contact";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Profile from "./routes/Profile1";
import ShopPage from "./routes/ShopPage";
import FarmRegistration from "./routes/Profile"
import { Route, Routes} from "react-router-dom";
import EditProfile from "./routes/EditProfile";
import Map from "./routes/Map";
import EditFarm from "./routes/Editfarm";
import Connect from "./routes/Connect";
import EmailVerified from "./routes/EmailVerified";
import Farmedited from "./components/Farmedited";
import Editfarm from "./routes/Editfarm";
import farmStrory from "./routes/farmStory";
import ReviewsPage from "./routes/ReviewsPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/ShopPage/:id" element={<ShopPage />} />

      <Route path="/farmreg" element={<FarmRegistration />} />
      <Route path= "/EditProfile" element={<EditProfile/>}/>
      <Route path= "/Emailverified" element={<EmailVerified/>}/>
      <Route path="/farmedited" element={<Farmedited />} />
      <Route path="/map" element={<Map />} />
      <Route path="/editfarm" element={<EditFarm />} />
      <Route path="/Reviews" element={<ReviewsPage />} />

      <Route path="/connect" element={<Connect />} />     
       <Route path="/farmStory" element={<farmStory/>} />






    </Routes>
    
    </>
  );
}


export default App;
