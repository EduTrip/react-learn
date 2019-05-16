import React, { Component } from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deskripsi: "Daftar menu yang kami sediakan"
    };
  }

  render() {
    return (
      <div>
        <center>
        <p>{this.state.deskripsi}</p>
        <td>
          <ListMakanan
            linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"
            lebar="200"
          />
        </td>
        <td>
          <ListMakanan
            linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
            lebar="140"
          />
        </td>
        <td>
          <ListMakanan
            linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"
            lebar="200"
          />
        </td>
        <td>
          <ListMakanan
            linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"
            lebar="200"
          />
        </td>
        </center>
      </div>
    );
  }
}

export default MenuMakanan;
