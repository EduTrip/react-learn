import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import Content from './component/Content';
import ContentLoader from './component/ContentLoader';
import SegmentHeader from './component/SegmentHeader';
import ContentTable from './component/ContentTable';

function App() {
  return (
    <div>
      <SegmentHeader />
      <ContentLoader />
      <Content />
      <ContentTable />
    </div>
  );
}

export default App;
