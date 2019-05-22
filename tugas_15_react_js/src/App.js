import React from 'react';
import "semantic-ui-css/semantic.min.css";

import { Container } from "semantic-ui-react";
import ContentTable from './component/ContentTable';
import AppContent from './component/AppContent';

function App() {
  return (
      <Container>
      <ContentTable />
      <AppContent />
      </Container>
  );
}

export default App;
