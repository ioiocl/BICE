import React, { Component } from "react";
import { connect } from "react-redux";

import { addStock } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addArticle: article => dispatch(addStock(article))
  };
}

class ConnectedForm extends Component {


  render() {
    
    return (<div></div>
    );
  }
}

const Trade = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Trade;
