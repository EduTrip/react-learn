import React from 'react';
import "semantic-ui-css/semantic.min.css";

import SegmentHeader from './component/SegmentHeader';
import ContentLoader from './component/ContentLoader';
import Content from './component/Content';

function App() {
  return (
    <div>
      <SegmentHeader />
      <ContentLoader />
      <Content />
    </div>
  );
}

export default App;
