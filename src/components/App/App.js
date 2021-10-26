import React from "react";
import { render } from "react-dom";
import "./App.css";
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
class App extends React.Component{
    render(){
        return(
            <div className="app">
                {/* Nav section */}
                <Nav />
                {/* Landing page */}
                <Landing/>
                {/* Challenege section */}

                {/* Footer */}
            </div>
        )
    }
}

export default App;