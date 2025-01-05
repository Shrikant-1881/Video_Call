import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LandingPage from "./pages/landing";
import "./App.css";
import Authentication from "./pages/authentication";
import { AuthProvider } from "./contexts/AuthContext";
import VideoMeetComponent from "./pages/videoMeet";
import History from "./pages/history";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/home" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/:url" element={<VideoMeetComponent />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;