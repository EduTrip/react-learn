import React, { Component } from 'react';

class ListMakanan extends Component {
    constructor(props){
    super(props);
    this.state = {
            linkgambar: this.props.linkGambar
        };
    }
    
    render() {
        return(
            <div style={{ display: "inline-block", marginLeft: "24px"}}>
                <img src={this.state.linkgambar} alt="product makanan" width={this.props.lebar}/>
            </div>
        );
    }
}

export default ListMakanan;