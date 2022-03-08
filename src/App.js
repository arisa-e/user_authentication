import SignUp from "./components/signup/signup"
import SignIn from "./components/signin/signin"
import Landing from "./components/landing"
import Update from "./components/update/update"
import ForgotPassword from "./components/forgotPassword/forgotPassword"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap"
import  AuthProvider  from "./components/AuthContext";
import PrivateRoute from "./privateRoute"
function App() {
  return (
    <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight:"100vh"}}
      >
        <div className="w-100" style={{maxWidth:"400px"}}>
          <Router>
            <Routes>
            <Route path="/landing" element={<PrivateRoute><Landing/></PrivateRoute>}/>
              <Route exact path="/" element={<SignIn/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/forgotPassword" element={<ForgotPassword/>}/>
              <Route path="/update" element={<PrivateRoute><Update/></PrivateRoute>}/>
            </Routes>
          </Router>
        </div>
      </Container>
    </AuthProvider>
    
  );
}

export default App;
