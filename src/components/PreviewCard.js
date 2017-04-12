import React from 'react';

class PreviewCard extends React.Component {
  render() {
    return (
      <div className="card-preview-item">{this.props.cardName}</div>
    )
  }
}

export default PreviewCard;
