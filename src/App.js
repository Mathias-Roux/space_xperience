import * as React from "react";
import { Routes, Route} from "react-router-dom";

import './App.css'

import { Navigation } from './Components/Navigation/Navigation.js'
import { Home } from './Components/Home/Home.js'
import { Destination } from './Components/Destination/Destination.js'
import { Crew } from './Components/Crew/Crew.js'
import { Technology } from './Components/Technology/Technology.js'

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App
