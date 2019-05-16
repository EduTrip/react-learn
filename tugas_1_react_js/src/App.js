import React from 'react';
import MenuKontak from "./Page/MenuKontak"
import MenuProduct from "./Page/MenuProduct"
import MenuTentangKami from "./Page/MenuTentangKami"
import MenuUtama from "./Page/MenuUtama"

const Header = () => {
  return(
    <div>
      <h2>Ini Halaman Untuk Header</h2>
    </div>
  );
};

const Footer = () => {
  return(
    <div>
      <h2>Ini Halaman Untuk Footer</h2>
    </div>
  );
};

function App() {
  return (
    <div>
      <Header />
      <MenuUtama />
      <MenuProduct />
      <MenuKontak />
      <MenuTentangKami />
      <Footer />
    </div>
  );
}

export default App;
