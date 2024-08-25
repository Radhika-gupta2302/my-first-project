import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AuthProvider, useAuth} from './pages/AuthContext';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import EventLog from './EventLog';
import Navbar from './pages/Navbar';
import ProtectedRoute from './ProtectedRoute';
import Contact from './pages/Contact';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';


function App() {
   {
    return (
        <AuthProvider>
            <Router>
                <Main />
            </Router>
        </AuthProvider>
    );
}

function Main() {
    const { isAuthenticated } = useAuth();

    return (
        <main>
            {isAuthenticated && <Navbar />}
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/homepage" element={<ProtectedRoute element={<HomePage />} />} />
                <Route path="/eventlog" element={<ProtectedRoute element={<EventLog />} />} />
                <Route path="/contact" element={<ProtectedRoute element={<Contact />} />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </main>
    );
}
}

export default App;
