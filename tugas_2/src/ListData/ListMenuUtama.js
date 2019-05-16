import React, { Component } from "react";

class ListMenuUtama extends Component {
    render() {
        return(
            <div>
                <img src={this.props.linkGambar} alt="food1" width={this.props.lebar}/>
            </div>
        );
    }
}

export default ListMenuUtama;