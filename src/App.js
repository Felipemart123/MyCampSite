import { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage";
import CampsiteDetailPage from "./pages/CampsiteDetailPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutPage from "./pages/AboutPage";
import {fetchCampsites} from './features/campsites/campsitesSlice'
import {fetchComments} from './features/campsites/commentsSlice'

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCampsites());
        dispatch(fetchPartners());
        dispatch(fetchPromotions());
        dispatch(fetchComments());
    }, [dispatch]);
    
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="contact" element={<ContactPage />} />
                <Route path="directory" element={<CampsitesDirectoryPage />} />
                <Route
                    path="directory/:campsiteId"
                    element={<CampsiteDetailPage />}
                />
                <Route path="about" element={<AboutPage />} />
            </Routes>
            <Footer />
        </div>
    );
}
export default App;
