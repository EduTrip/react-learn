import React , { Component } from "react";

class MenuKontak extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alamat: "Jl.Swadaya IV,Pd.Ranggon, Cipayung jakarta aye",
            nomor: "Kontak Kami : 081233141210"
        };
    }
    render() {
        return(
            <div>
                <center>
                    <h3>{this.state.alamat}</h3>
                    <b>{this.state.nomor}</b>
                </center>
            </div>
        );
    }
}

export default MenuKontak;