import React, { Suspense } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { adminRoutes, clientRoutes } from "./routes";
import Home from "./Pages/Home/Home.tsx";
import Login from "./Pages/Login/Login";
import About from "./Pages/About/About";
import LoginPage from "./components/LoginPage/LoginPage.tsx";

const Header = React.lazy(() => import("./components/Header/Header.tsx"));

function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading</div>}>
          <Header />
        </Suspense>
        <hr />
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
