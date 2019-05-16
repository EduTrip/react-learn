import React from 'react';
import NavMenu from "./component/NavMenu";
import SubMenu from "./component/SubMenu";
import AppContent from "./component/content/AppContent";

function App() {
  return (
    <div>
      <NavMenu />
      <SubMenu />
      <AppContent />
    </div>
  );
}

export default App;
