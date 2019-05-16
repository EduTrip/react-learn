import React from 'react';
import Header from './Pages/Header';
import Footer from './Pages/Footer';
import MenuUtama from "./Pages/MenuUtama";
import MenuTentangKami from "./Pages/MenuTentangKami";
import MenuKontak from "./Pages/MenuKontak";
import MenuMakanan from "./Pages/MenuMakanan";

function App() {
  return (
    <div>
      <Header />
      <MenuUtama />
      <MenuMakanan />
      <MenuTentangKami />
      <MenuKontak />
      <Footer />
    </div>
  );
}

export default App;
