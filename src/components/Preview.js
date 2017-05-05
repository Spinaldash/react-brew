import React from 'react';
import PreviewCard from './PreviewCard';
import PropTypes from 'prop-types';

class Preview extends React.Component {
  props = this.props;
  render() {
    console.log('this.props: ', this.props)
    let previewCards = this.props.state.deck.map((currentCard) => <PreviewCard {...currentCard} onCardClick={this.props.onCardClick} key={currentCard.id}></PreviewCard>);
    console.log(this.props.cards)
    return (
      <div className="preview-view-item">
        <p>{this.props.text}</p>
        <div className="card-preview-container">
          <PreviewCard cardName="1" onCardClick={this.props.onCardClick}></PreviewCard>
          <PreviewCard cardName="2" onCardClick={this.props.onCardClick}></PreviewCard>
          <PreviewCard cardName="3" onCardClick={this.props.onCardClick}></PreviewCard>
          <PreviewCard cardName="4" onCardClick={this.props.onCardClick}></PreviewCard>
          {previewCards}
        </div>
      </div>
    )
  }
}

Preview.propTypes = {
  cards: PropTypes.object,
  onCardClick: PropTypes.func.isRequired
}

export default Preview;
