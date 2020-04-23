import React, { Component } from "react";
import { connect } from "react-redux";

import { addStock } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    addStock: article => dispatch(addStock(article))
  };
}

class ConnectedForm extends Component {

  render() {
    
    return (<div></div>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
