import React, { Component } from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pesan: "",
      jumlah: 0,
      tampil: false
    };
    this.pilihPesanan = this.pilihPesanan.bind(this);
    this.nasiPadang = this.nasiPadang.bind(this);
    this.sate = this.sate.bind(this);
    this.sotoLamongan = this.sotoLamongan.bind(this);
    this.nasiUduk = this.nasiUduk.bind(this);
    this.nasiKuning = this.nasiKuning.bind(this);
    this.batal = this.batal.bind(this);
  }

  pilihPesanan(value, e){
      this.setState( { [value]: e.target.value, tampil: true} )
  }

  nasiPadang() {
      this.setState( {
          pesan: "Nasi Padang",
          jumlah: this.state.jumlah + 1,
          tampil: true
      })
  }
  sate() {
      this.setState( {
          pesan: "Sate",
          jumlah: this.state.jumlah + 1,
          tampil: true
      })
  }

  sotoLamongan() {
      this.setState( {
          pesan: "Soto Lamongan",
          jumlah: this.state.jumlah + 1,
          tampil: true
      })
  }

  nasiUduk() {
      this.setState( {
          pesan: "Nasi Uduk",
          jumlah: this.state.jumlah + 1,
          tampil: true
      })
  }

  nasiKuning() {
      this.setState( {
          pesan: "Nasi Kuning",
          jumlah: this.state.jumlah + 1,
          tampil: true
      })
  }

  batal() {
      this.setState ( {
          pesan: " ",
          jumlah: 0,
          tampil: false
      })
  }

  render() {
    return (
      <div>
        <h3> Daftar Makanan Yang Kami Sediakan : </h3>
        <table>
          <tbody>
            <tr>
              <td>
                <ListMakanan linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                <center>
                  <button onClick={this.nasiPadang}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
                <center>
                  <button onClick={this.sate}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan linkGambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
                <center>
                  <button onClick={this.sotoLamongan}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan linkGambar="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
                <center>
                  <button onClick={this.nasiUduk}>Pesan Sekarang</button>
                </center>
              </td>
              <td>
                <ListMakanan linkGambar="https://pesona.travel/media/nasi-kuning-sarapan-khas-nusantara-bermakna-mendalam_144651_1140.jpg" />
                <center>
                  <button onClick={this.nasiKuning}>Pesan Sekarang</button>
                </center>
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <input type="text" placeholder="Masukan pesanan Anda" onChange={e => this.pilihPesanan("pesan", e)} />
        <input type="number" placeholder="Jumlah Pesanan" onChange={e => this.pilihPesanan("jumlah", e)} />
        <button onClick={this.batal}>Batalkan semua pesanan</button>
        {this.state.tampil ? (
            <div>
                <h3>Pesanan Anda : {this.state.pesan} </h3>
                <h4>Jumlah Pesanan Anda : {this.state.jumlah} </h4>
            </div>
        ) : (
            <h1>
                Anda Belum Memesan
            </h1>
        )}
      </div>
    );
  }
}

export default MenuMakanan;
