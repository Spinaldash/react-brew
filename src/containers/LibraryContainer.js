import Library from '../components/Library';
import { connect } from 'react-redux';
import { addCard } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    // cards: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCardClick: (text) => {
      dispatch(addCard(text))
    }
  }
}

const LibraryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Library)

export default LibraryContainer;
