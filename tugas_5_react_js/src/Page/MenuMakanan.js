import React, { Component } from "react";

import DaftarMakanan from "../Lib/DaftarMakanan";
import FormMakanan from "../Form/FormMakanan";

const listMakanan = [
  {
    Nama: "Nasi Padang",
    Harga: "Rp20.000"
  },
  {
    Nama: "Soto",
    Harga: "Rp10.000"
  },
  {
    Nama: "Nasi Uduk",
    Harga: "Rp15.000"
  },
  {
    Nama: "Nasi Kuning",
    Harga: "Rp15.000"
  },
  {
    Nama: "Sate",
    Harga: "Rp12.000"
  },
  {
    Nama: "Mie Ayam",
    Harga: "Rp12.000"
  }
];

class MenuMakanan extends Component {
  render() {
    return (
      <div>
        <h3>Daftar Makanan Favorite</h3>
        <table>
          <tbody>
            <tr>
              {DaftarMakanan.map((value, index) => {
                return (
                  <td key={index}>
                    <img
                      src={value.img}
                      alt={value.NamaMakanan}
                      width="150"
                      height="100"
                    />
                    <center>
                      <p>{value.NamaMakanan}</p>
                      <p>Harga : Rp.{value.Harga}</p>
                    </center>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>

        <h4>List Makanan</h4>
        {listMakanan.map((value, index) => {
          return (
            <div key={index}>
              <p>
                {value.Nama} | Harga : {value.Harga}
              </p>
            </div>
          );
        })}
        <FormMakanan />
      </div>
    );
  }
}

export default MenuMakanan;