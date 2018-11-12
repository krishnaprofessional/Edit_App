import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Editor from '../Editor';
import * as actions from '../../actions/classActions';

export class EditorContainer extends React.Component {
  addItem = ({bgColor, height, width, radius}) => {

   this.props.actions.addItem(bgColor, height, width, radius);
    };

  render() {
    return (
      <Editor
      addItem = {this.addItem}
      />
    );
  }
}
  
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  null,
  mapDispatchToProps
)(EditorContainer);
