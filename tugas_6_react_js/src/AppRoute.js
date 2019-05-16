import React from "react";
import { BrowserRouter as Router , Route } from "react-router-dom";
import App from "./App";
import Kontak from "./Page/Kontak"
import MenuMinuman from "./Page/MenuMinuman";
import MenuMakanan from "./Page/MenuMakanan";

const AppRoute = () => (
    <Router>
        <div>
            <Route path="/" exact component ={App}/>
            <Route path="/kontak" exact component={Kontak} />
            <Route path="/menu_makanan" exact component={MenuMakanan} />
            <Route path="/menu_minuman" exact component={MenuMinuman} />
        </div>
    </Router>
);

export default AppRoute;