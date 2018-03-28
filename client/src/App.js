import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  state = {
    fieldData: [],
  }
  componentDidMount() {
    axios.get('http://localhost:3001/fields').then(resp => {
      console.log(resp.data)
      this.setState({
        fieldData: resp.data
      })
     
    })
  }

  handleFormSubmit() {

  }

  render() {
    return (
      <div className="container">
        <div className="App">
          <div className="header">
            <h1>File a claim</h1>
          </div>
          <form onSubmit={this.handleFormSubmit} id="form-container">
              {this.state.fieldData.map((field, i) => {
                if(field.type === "text" || field.type === "email" || field.type === "tel") {
                  return <div key={"kevin" + i}><i className={"fa " + field.icon}></i>
                  <input  type={field.type} className="inputs" label={field.label} id={field.id} placeholder={field.label}/></div>
                
                } else if (field.type === "select") {
                  return <select key={"kevin" + i} type={field.type} className="select" label={field.label} id={field.id}>
                          {field.options.map((option, i) => {
                            return <option key={"kevin" + i}label={option.label}>{option.value}</option>
                          })}
                        </select>
                } else if (field.type === "textarea") {
                  return <div key={"kevin" + i}><i className={"fa " + field.icon} ></i>
                  <textarea type={field.type} className="textarea" label={field.label} id={field.id}></textarea></div>
                } 
              })}
              <button type="button" id="btn1">Get Lost</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
