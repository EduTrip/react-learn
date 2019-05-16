import React , { Component } from "react";

class MenuTentangKami extends Component {
    constructor(props){
        super(props);
        this.state = {
            description: "lorem ipsum dolor sit amet polium ret erdigan ibinza ret postre"
        };
    }

    render() {
        return(
          <div>
              <center>
              <p>Tentang Kami</p>
              <p>{this.state.description}</p>
              </center>
          </div>  
        );
    }
}

export default MenuTentangKami;