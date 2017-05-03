import React from 'react';
import PreviewCard from './PreviewCard';
import PropTypes from 'prop-types';

class Preview extends React.Component {
  props = this.props;
  render() {
    let stateCards = this.props.cards.map((currentCard) => <PreviewCard {...currentCard} onCardClick={this.props.onCardClick} key={currentCard.id}></PreviewCard>);
    console.log(this.props.cards)
    return (
      <div className="preview-view-item">
        <p>{this.props.text}</p>
        <div className="card-preview-container">
          <PreviewCard cardName="1" onCardClick={this.props.onCardClick}></PreviewCard>
          <PreviewCard cardName="2" onCardClick={this.props.onCardClick}></PreviewCard>
          <PreviewCard cardName="3" onCardClick={this.props.onCardClick}></PreviewCard>
          <PreviewCard cardName="4" onCardClick={this.props.onCardClick}></PreviewCard>
          {stateCards}
        </div>
      </div>
    )
  }
}

Preview.propTypes = {
  cards: PropTypes.array,
  onCardClick: PropTypes.func.isRequired
}

export default Preview;
