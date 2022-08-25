import React from "react";
import './App.css';
import Header from "./components/Header";
import './bootstrap.min.css';
import {Container} from "react-bootstrap";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import PageNotFound from "./screens/PageNotFound";

function App() {
    return (
        <div>
            <Router>
                <Header/>
                <main className={'py-3'}>
                    <Container>
                        <Routes>
                            <Route path="/" exact element={<HomeScreen/>}/>
                            <Route path="/product/:id" element={<ProductScreen/>}/>
                            <Route path="*" element={<PageNotFound/>}/>
                        </Routes>
                    </Container>
                </main>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
