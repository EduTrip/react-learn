import React, { Component } from "react";

class FormMakanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      makanan: "",
      jumlah: ""
    };

    this.handleValueMakanan = this.handleValueMakanan.bind(this);
    this.handleValueJumlah = this.handleValueJumlah.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.textInput = React.createRef();
  }

  handleValueMakanan(e) {
    this.setState({ makanan: e.target.value });
  }

  handleValueJumlah(e) {
    this.setState({ jumlah: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    alert(
      "Pesanan anda adalah " +
        this.state.makanan +
        "\n Jumlah pesanan = " +
        this.state.jumlah
    );
  }

  render() {
    return (
      <div>
        <center>
          <form onSubmit={this.handleSubmit}>
            <input
              onChange={this.handleValueMakanan}
              type="text"
              value={this.state.makanan}
              ref={this.textInput}
            />
            <input
              onChange={this.handleValueJumlah}
              type="number"
              value={this.state.jumlah}
              placeholder="masukan jumlah pesanan"
            />
            <br />
            <br />
            <input type="submit" value="pesan" />
          </form>
        </center>
      </div>
    );
  }
}

export default FormMakanan;
