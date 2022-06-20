import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";

import { Navigation } from './Components/Navigation.js'
import { Home } from './Components/Home.js'
import { Destination } from './Components/Destination.js'
import { Crew } from './Components/Crew.js'
import { Technology } from './Components/Technology.js'

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
