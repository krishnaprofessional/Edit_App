import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/classActions';
import Gallery from '../Gallery';

export class GalleryContainer extends React.Component {
  removeItem = index => {
    this.props.actions.removeItem(index);
    };
  render() {
    return (
      <Gallery
      boxes={this.props.boxes}
      removeItem = {this.removeItem}
      />
    );
  }
}


function mapStateToProps(state) {
  return {
    boxes: state.boxes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GalleryContainer);
