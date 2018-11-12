
import { NavLink, Route, Switch } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";
import 'bootstrap';
import EditorContainer from "./containers/EditorContainer";
import GalleryContainer from './containers/GalleryContainer';

class App extends React.Component {
  render() {
    const activeStyle = { color: '#000' };
    return (

      <div>
            <div id="main">
                <NavLink exact to="/" activeStyle={activeStyle} id="sub_header">Editor</NavLink>
                <NavLink to="/gallery" activeStyle={activeStyle} id="sub_header">Gallery</NavLink>
            </div>

            <Switch>
                <Route exact path="/" component={EditorContainer} />
                <Route path="/gallery" component={GalleryContainer} />
                <Route component={NotFoundPage} />
            </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
