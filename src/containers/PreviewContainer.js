import Preview from '../components/Preview';
import { connect } from 'react-redux';
import { addCard } from '../actions/index'

const mapStateToProps = (state) => {
  const { deck } = state
  // Currently converting the deck array into an object to populate
  // in that props of Preview. We need to start working with
  // semi-real data and make sure we are modeling/massaging the correct
  // architechture that scales best
  const deckObj = deck.reduce((acc, cur, i) => {
    const id = cur.id
    acc[id] = cur;
    return acc;
  }, {});
  console.log('deckObj: ', deckObj)
  return deckObj
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCardClick: (text) => {
      dispatch(addCard(text))
    }
  }
}

const PreviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview)

export default PreviewContainer;
