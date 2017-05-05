import Preview from '../components/Preview';
import { connect } from 'react-redux';
import { addCard } from '../actions/index'

const mapStateToProps = (state) => {
  return {
    state
  }
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
