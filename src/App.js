import SignUp from "./components/signup/signup"
import SignIn from "./components/signin/signin"
import Landing from "./components/landing"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap"
import AuthProvider from "./components/context";
function App() {
  return (
    <AuthProvider>
      <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight:"100vh"}}
      >
        <div className="w-100" style={{maxWidth:"400px"}}>
          <Router>
            <Routes>
              <Route exact path="/" element={<Landing/>}/>
              <Route path="/signup" element={<SignUp/>}/>
              <Route path="/signin" element={<SignIn/>}/>
            </Routes>
          </Router>
        </div>
      </Container>
    </AuthProvider>
    
  );
}

export default App;
