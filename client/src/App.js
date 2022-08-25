import React from "react";
import './App.css';
import Header from "./components/Header";
import './bootstrap.min.css';
import {Container} from "react-bootstrap";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
    return (
        <div>
            <Router>
                <Header/>
                <main className={'py-3'}>
                    <Container>
                        <Route path="/home" component={HomeScreen}/>
                    </Container>
                </main>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;