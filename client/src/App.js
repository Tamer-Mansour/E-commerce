import React from "react";
import './App.css';
import Header from "./components/Header";
import './bootstrap.min.css';
import {Container} from "react-bootstrap";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Routes, Route} from 'react-router-dom';

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <main className={'py-3'}>
                    <Container>
                        <Route exact path="/" component={HomeScreen}/>
                    </Container>
                </main>
                <Footer/>
            </Routes>
        </>
    );
}

export default App;
