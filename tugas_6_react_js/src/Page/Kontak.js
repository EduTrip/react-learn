import React, { Component } from "react";
import Header from "./Header";
import "../Style/Kontak.css";

class Kontak extends Component {
    render() {
        return (
            <div id="kontak_bg">
                <Header />
                <div className="kontak">
                    <h3>
                        Jl.Swadaya IV, Pd Ranggon Jakarta 
                    </h3>
                    <p>0812314441242</p>
                </div>
            </div>
        );
    }
}

export default Kontak;