import React from "react";
import { render } from "react-dom";
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from '../ChallengeSection/ChallengeSection';
class App extends React.Component{
    render(){
        return(
            <div className="app">
                {/* Nav section */}
                <Nav />

                {/* Landing page */}
                <Landing/>

                {/* Challenege section */}
                <ChallengeSection></ChallengeSection>
                {/* Footer */}
                <Footer/>
            </div>
        )
    }
}

export default App;