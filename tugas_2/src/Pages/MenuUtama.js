import React , { Component } from "react";
import ListMenuUtama from "../ListData/ListMenuUtama";

class MenuUtama extends Component {
    render() {
        return(
            <div style={{ textAlign: "center"}}>
                <h2>Selamat Datang Di Warung Nusantara</h2>
                <ListMenuUtama linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg" lebar="500"/>
            </div>
        )
    }
}

export default MenuUtama;