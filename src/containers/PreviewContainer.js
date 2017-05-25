import Preview from '../components/Preview';
import { connect } from 'react-redux';
import { addCard } from '../actions/index'

const mapStateToProps = (state) => {
  // some super-kawaii destructuring 😊
  const { deck } = state;
  return { deck }
}

const mapDispatchToProps = (dispatch) => {
  // TODO: consider renaming the onCardclick function, its overly specific and inaccurate
  return {
    onCardClick: (text) => {
      dispatch(addCard(text));
    }
  }
}

const PreviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview)

export default PreviewContainer;
