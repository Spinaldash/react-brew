import Library from '../components/Library';
import { connect } from 'react-redux';
import { addCard, addLibrarySource } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addLibrarySource: (card) => {
      dispatch(addLibrarySource(card));
    },
    onCardClick: (text) => {
      dispatch(addCard(text));
    }
  }
}

const LibraryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Library)

export default LibraryContainer;
