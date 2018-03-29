import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import App from './App';
import './AddField.css';
import axios from 'axios';

export class AddField extends Component {
  state = {
      selectValue: 'text',
      options: [],
      isDisabled: true,
      optionValue: '',
      label: '',
      id: '',
      icon: '',
  }
  handleFormSubmit = (e) => {
      e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3001/fields', this.state).then(resp => {
        this.props.history.push('/AddField')
    }).catch(e => console.log(e)) 
  }

  handleSelectChange = (e) => {
    const value = e.target.value
    this.setState({
        [e.target.name]: value
    })
    if (value === 'Select') {
        console.log('worked')
        this.toggleDisabled()

    }
  }

  handleChange = (e) => {
      const value = e.target.value
      this.setState({
          [e.target.name]: value
      })
  }

  addToOptions = (e) => {
    e.preventDefault()
    this.state.options.push(this.state.optionValue)
    this.state.optionValue = ''
  } 

  toggleDisabled = (e) => {
      this.setState({
          isDisabled: !this.state.isDisabled
      })
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handleFormSubmit} id="form-container">
             <div>
                {/* select and options fields */}
               <select onChange={this.handleSelectChange} 
                        value={this.state.selectValue} 
                        type="select" 
                        className="inputs" 
                        label="Field Type" 
                        id="field-type" 
                        placeholder="Field Type" 
                        name="selectValue">
                <option value="txt">Text</option>
                <option>Select</option>
                <option>Text Area</option>
               </select>
               <input onChange={this.handleChange} 
                        onClick={this.toggleDisabled} 
                        value={this.state.optionValue} 
                        disabled={(this.state.disabled)? "disabled" : ""}
                        type="text" 
                        label="Field Option" 
                        id="field-option" 
                        placeholder="'key':value" 
                        name="optionValue"/>
               <button onClick={this.addToOptions} id="addOption">+</button>
             </div>
             {/* field label */}
             <div>
               <input onChange={this.handleChange}
                        value={this.state.label} 
                        type="text" 
                        className="inputs" 
                        label="Field Label" 
                        id="field-label" 
                        placeholder="Field Label" 
                        name="label"/>
             </div>
             {/* field id */}
             <div>
               <input onChange={this.handleChange}
                        value={this.state.id} 
                        type="text" 
                        className="inputs" 
                        label="Field ID" 
                        id="field-id" 
                        placeholder="Field ID" 
                        name="id"/>
             </div>
             {/* field icon */}
             <div>
               <input onChange={this.handleChange}
                        value={this.state.icon} 
                        type="text" 
                        className="inputs" 
                        label="Field icen" 
                        id="field-icon" 
                        placeholder="Field Icon" 
                        name="icon"/>
             </div>
              <div className="buttons">
                <Link to='/ShowField'><button type="button" id="btn3">Go Back</button></Link>
                <button  type="submit" id="btn4">Add Field</button>
              </div>
          </form>
      </div>
    )
  }
};

// const Child = () => {
//     return <input onChange={this.handleOptionChange} type="text" label="Field Option" id="field-option" placeholder="Option" />
//     {console.log(this.props.optionValue)}
// }

export default AddField;
