import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/index";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Course from "./components/Course";


function App() {

  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route  path="/auth/login" Component={Login} />
        <Route  path="/auth/register" Component={Register} />
        <Route  path="/courses" Component={Course}/>
      </Routes>
    </Router>
  );
}

export default App;
