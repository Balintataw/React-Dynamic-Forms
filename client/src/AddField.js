import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
// import App from './App';
import './AddField.css';

export class AddField extends Component {
  state = {
      selectValue: 'text',
      options: [],
      isHidden: true,
      optionValue: ''
  }
  handleFormSubmit() {

  }

  handleSelectChange = (e) => {
    const value = e.target.value
    this.setState({
        selectValue: value
    })
    if (value === 'Select') {
        console.log('worked')
        this.toggleHidden()
    }
  }

  toggleHidden = (e) => {
      this.setState({
          isHidden: !this.state.isHidden
      })
  }

  render() {
    return (
      <div>
          <form onSubmit={this.handleFormSubmit} id="form-container">
             <div>
               <select onChange={this.handleSelectChange} value={this.state.selectValue} type="select" className="inputs" label="Field Type" id="field-type" placeholder="Field Type">
                <option value="txt">Text</option>
                <option>Select</option>
                <option>Text Area</option>
               </select>
               {!this.state.isHidden && <Child optionValue={this.state.optionValue}/>}
             </div>
             <div>
               <input type="text" className="inputs" label="Field Label" id="field-label" placeholder="Field Label"/>
             </div>
             <div>
               <input type="text" className="inputs" label="Field ID" id="field-id" placeholder="Field ID"/>
             </div>
             <div>
               <input type="text" className="inputs" label="Field icen" id="field-icon" placeholder="Field Icon"/>
             </div>
              <div className="buttons">
                <Link to="/"><button type="button" id="btn1">Get Lost</button></Link>
                <Link to='/AddField'><button type="button" id="btn2">Add Field</button></Link>
              </div>
          </form>
      </div>
    )
  }
};

const Child = () => {
    return <input type="text"   label="Field Option" id="field-option" placeholder="Option" />
    {console.log(this.props.optionValue)}
}

export default AddField;
