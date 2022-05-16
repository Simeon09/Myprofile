import Home from "./component/Home/Home";
import "./App.css";
import Welcome from "./Welcome/Welcome";
import ProtectedRoutes from "./component/ProtectedRoutes/ProtectedRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <BrowserRouter basename="/MyProfile">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/*" element={<Welcome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

