import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/index";
import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Course from "./components/Course";
import Faculty from "./components/Faculty";
import PrivateRoute from "./components/privateRoute";


function App() {

  return (
    <Router>
      <Routes>
        
        <Route  path="/auth/login" Component={Login} />
        <Route  path="/auth/register" Component={Register} />
        <Route exact path="/" Component={Home} />
        <Route element={<PrivateRoute/>}>
          
          <Route  path="/courses" Component={Course}/>
          <Route  path="/faculty" Component={Faculty}/>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
