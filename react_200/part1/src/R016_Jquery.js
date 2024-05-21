import React, { Component } from "react";
import $ from 'jquery';

export default class R016_Jquery extends Component {

  input_alert = (e) => {
    var input_var = $('#inputId').val();
    alert(input_var);
  }
  render() {
    return (
      <div>
        <h2>[THIS IS jquery]</h2>
        <input id="inputId" name="inputName" />
        <button id="buttonId" onClick={e => this.input_alert(e)}>
          Jquery Button
        </button>

      </div>
    )
  }
}

