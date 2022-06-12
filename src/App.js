import React from "react";
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/styles/tailwind.css";

// layouts

import Admin from "./layouts/Admin.js";
import Auth from "./layouts/Auth.js";

// views without layouts

import Landing from "./views/Landing.js";
import Profile from "./views/Profile.js";
// import Index from "./views/Index.js";
import Settings from "./views/admin/Settings";
import Dashboard from "./views/admin/Dashboard";
import Maps from "./views/admin/Maps";
import Tables from "./views/admin/Tables";
import LandingSetting from "./views/admin/Landing";


export default function App(){
    return(
        <Router>
        <Routes>
          {/* add routes with layouts */}
          <Route path="/admin/*" element={<Admin/>}>
            <Route path="dashboard" exact element={<Dashboard/>} />
            <Route path="maps" exact element={<Maps/>} />
            <Route path="settings" exact element={<Settings/>} />
            <Route path="tables" exact element={<Tables/>} />
            <Route path="landing" element={<LandingSetting/>}/>
            <Route path="*" exact element={<Navigate to="/admin/dashboard"/>}/>
            </Route>
          <Route path="/auth" element={<Auth/>} />
          {/* add routes without layouts */}
          <Route path="/profile" exact element={<Profile/>} />
          <Route path="/" element={<Landing/>} />
          {/* add redirect for first page */}
          <Route path="/*" exact element={<Navigate to="/"/>}/>
        </Routes>
      </Router>
    )
}
