import React from 'react';
import PreviewCard from './PreviewCard';

class Preview extends React.Component {
  render() {
    return (
      <div className="preview-view-item">
        <p>Preview</p>
        <div className="card-preview-container">
          <PreviewCard cardName="1"></PreviewCard>
          <PreviewCard cardName="2"></PreviewCard>
          <PreviewCard cardName="3"></PreviewCard>
          <PreviewCard cardName="4"></PreviewCard>
        </div>
      </div>
    )
  }
}

export default Preview;
