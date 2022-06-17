import './App.css';
import {Route, Routes} from "react-router-dom";
import Section from "./components/Section";
import Header from "./components/Header";
import Admin from "./components/Pages/admin";
import Motion from "./components/Pages/motion";
import Test from "./components/Pages/test";


function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Section/>}/>
                <Route path="/connect" element={<Admin/>}/>
                <Route path="/admin" element={<Motion/>}/>
                <Route path="/admin/test" element={<Test/>}/>
            </Routes>
        </div>
    );

}

export default App;
