import Preview from '../components/Preview';
import { connect } from 'react-redux';
import { subtractCard } from '../actions/index'

const mapStateToProps = (state) => {
  // destructuring 😊
  const { deck } = state;
  return { deck }
}

const mapDispatchToProps = (dispatch) => {
  // TODO: consider renaming the onCardclick function, its overly specific and inaccurate
  return {
    onCardClick: (minicard) => {
      dispatch(subtractCard(minicard));
    }
  }
}

const PreviewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Preview)

export default PreviewContainer;
