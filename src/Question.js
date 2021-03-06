import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import { API } from 'aws-amplify';
import './App.css';
import axios from "axios";
import aws_exports from './aws-exports';
import { Redirect } from 'react-router';
Amplify.configure(aws_exports);



var dict = {

AvailableMornings: false,
AvailableAfternoon: false,
AvailableEvenings: false, 
"Project1": false,
"Project2": false,
"Project3": false,
"Project4": false,
"Project5": false,
"Project6": false,
"SkillCompEngineering": false,
"SkillDatabase": false,
"SkillMechEngineering": false,
"SkillNetworkDesign": false,
"SkillProgramming": false,
"SkillWebDesign": false,
 id: ''

};

function changeme (x){
  if (dict[x] === true){
    dict[x] = false;
  }
  else {
    dict[x] = true;
  }
};


class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      AvailableAfternoon: dict['AvailableAfternoon'],
      AvailableEvenings: dict['AvailableEvenings'],
      AvailableMornings: dict['AvailableMornings'],
      "Project1": dict['Project1'],
      "Project2": dict['Project2'],
      "Project3": dict['Project3'],
      "Project4": dict['Project4'],
      "Project5": dict['Project5'],
      "Project6": dict['Project6'],
      "SkillCompEngineering": dict['SkillCompEngineering'],
      "SkillDatabase": dict['SkillDatabase'],
      "SkillMechEngineering": dict['SkillMechEngineering'],
      "SkillNetworkDesign": dict['SkillNetworkDesign'],
      "SkillProgramming": dict['SkillProgramming'],
      "SkillWebDesign": dict['SkillWebDesign'],
      ID: ''
      

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(e) {
    //const { verified } = this.state;
    e.preventDefault();
    // add calls to AWS API Gatewary and add items endpoint here
    
    if ((dict['AvailableAfternoon'] == true|| dict['AvailableEvenings'] == true || dict['AvailableMornings'] == true) && (dict['Project1'] == true || dict['Project2'] == true || dict['Project3'] == true || dict['Project4'] == true || dict['Project5'] == true || dict['Project6'] == true) && (dict['SkillCompEngineering'] == true || dict['SkillDatabase'] == true|| dict['SkillMechEngineering'] == true || dict['SkillNetworkDesign'] == true || dict['SkillProgramming'] == true || dict['SkillWebDesign'] == true)) {
    try{
      const params = {
        AvailableAfternoon: this.state.dict['AvailableAfternoon'],
        AvailableEvenings: this.state.dict['AvailableEvenings'],
        AvailableMornings: this.state.dict['AvailableMornings'],
        "Project1": this.state.dict['Project1'],
        "Project2": this.state.dict['Project2'],
        "Project3": this.state.dict['Project3'],
        "Project4": this.state.dict['Project4'],
        "Project5": this.state.dict['Project5'],
        "Project6": this.state.dict['Project6'],
        "SkillCompEngineering": this.state.dict['SkillCompEngineering'],
        "SkillDatabase": this.state.dict['SkillDatabase'],
        "SkillMechEngineering": this.state.dict['SkillMechEngineering'],
        "SkillNetworkDesign": this.state.dict['SkillNetworkDesign'],
        "SkillProgramming": this.state.dict['SkillProgramming'],
        "SkillWebDesign": this.state.dict['SkillWebDesign'],
        ID: ''
      };
      axios.post(`https://p714kevuqi.execute-api.us-east-1.amazonaws.com/answersTable-projectenv`, params);
      e.this.setState({ answers: [...this.state.answers, this.state.newanswers ] });
      e.this.setState( { newanswers: { 
        AvailableAfternoon: this.state.dict['AvailableAfternoon'],
        AvailableEvenings: this.state.dict['AvailbleEvenings'],
        AvailableMornings: this.state.dict['AvailableMornings'],
        "Project1": this.state.dict['Project1'],
        "Project2": this.state.dict['Project2'],
        "Project3": this.state.dict['Project3'],
        "Project4": this.state.dict['Project4'],
        "Project5": this.state.dict['Project5'],
        "Project6": this.state.dict['Project6'],
        "SkillCompEngineering": this.state.dict['SkillCompEngineering'],
        "SkillMechEngineering": this.state.dict['SkillMechEngineering'],
        "SkillNetworkDesign": this.state.dict['SkillNetworkDesign'],
        "SkillProgramming": this.state.dict['SkillProgramming'],
        "SkillWebDesign": this.state.dict['SkillWebDesign'],
        ID: ''
      }});
    }catch(err){
      console.log(`An error has occured: ${err}`);
    } 
      alert ('Submission successful! You may now close this tab.');
      e.target.reset();
      this.setState({redirect: true});
    }
    else {
      alert ('Submission failed. Please make sure to check at least one box in each category.');}
    }
    
   
  

  /**
   * @param {React.ChangeEvent<HTMLInputElement>} e
   */
  handleChange(e) {
    // this is a shorthand for using "name" field to set the state
    var { name, value } = e.target;
    changeme(name);
    value = dict[name];
    this.setState({ [name]: value });
  }
  

  render() {
       if (this.state.redirect) {
    return <Redirect push to="/" />;
  }
    else {
    
      return (
        
        
        
        <article>
        <div className="container">
        <h1>Questionaire</h1>
        </div>

        <div className="well d-inline-flex text-left questionWell">
          <section className="section questions ">
        
        
        <div className="container">
            <div className="container">
              <form onSubmit={this.handleSubmit}>
              <legend>Times available</legend>
                <div className="form-check">
                <input type="checkbox"
                  className="form-check-input"
                  id="AvailableMornings"
                  //label="AvailableMornings"
                  checked={!!this.state.AvailableMornings}
                  name="AvailableMornings"
                  onChange={this.handleChange}
                /><label className="form-check-label">Morning</label></div>
        
        <div className="form-check">
        
        <input type="checkbox"
                  className="form-check-input"
                  id="AvailableAfternoon"
                  //label="AvailableAfternoon"
                  checked={!!this.state.AvailableAfternoon}
                  name="AvailableAfternoon"
                  onChange={this.handleChange}
                /><label className="form-check-label">Afternoon</label></div>
          <div className="form-check">         
        

        <input type="checkbox"
                  className="form-check-input"
                  id="AvailableEvenings"
                  //label="AvailableEvenings"
                  checked={!!this.state.AvailableEvenings}
                  name="AvailableEvenings"
                  onChange={this.handleChange}
                /><label className="form-check-label">Evening</label></div>
                
        
                <br></br>
        <hr></hr>
        <legend>Preferred Projects</legend>
        <br></br>
        
               <div className="form-check">
                
                <input type="checkbox"
                  className="form-check-input"
                  id="Project1"
                  //label="Project1"
                  checked={!!this.state.Project1}
                  name="Project1"
                  onChange={this.handleChange}
                /><label className="form-check-label">Project 1</label></div>
        
        <div className="form-check">
                
                <input type="checkbox"
                  className="form-check-input"
                  id="Project2"
                  //label="Project2"
                  checked={!!this.state.Project2}
                  name="Project2"
                  onChange={this.handleChange}
                /><label className="form-check-label">Project 2</label></div>
          <div className="form-check">
                
                <input type="checkbox"
                  className="form-check-input"
                  id="Project3"
                  //label="Project3"
                  checked={!!this.state.Project3}
                  name="Project3"
                  onChange={this.handleChange}
                /><label className="form-check-label">Project 3</label></div>
        <div className="form-check">
                
                <input type="checkbox"
                  className="form-check-input"
                  id="Project4"
                  //label="Project4"
                  checked={!!this.state.Project4}
                  name="Project4"
                  onChange={this.handleChange}
                /><label className="form-check-label">Project 4</label></div>
        <div className="form-check">
                
                <input type="checkbox"
                  className="form-check-input"
                  id="Project5"
                  //label="Project5"
                  checked={!!this.state.Project5}
                  name="Project5"
                  onChange={this.handleChange}
                /><label className="form-check-label">Project 5</label></div>
        <div className="form-check">
                <input type="checkbox"
                  className="form-check-input"
                  id="Project6"
                  //label="Project6"
                  checked={!!this.state.Project6}
                  name="Project6"
                  onChange={this.handleChange}
                /><label className="form-check-label">Project 6</label></div>
                
        
                <br></br>
        <hr></hr>
                    <legend>Skills</legend>
                <div className="form-check">
                
                <input type="checkbox"
                  className="form-check-input"
                  id="SkillCompEngineering"
                  //label="SkillCompEngineering"
                  checked={!!this.state.SkillCompEngineering}
                  name="SkillCompEngineering"
                  onChange={this.handleChange}
                /><label className="form-check-label">Computer Engineering</label></div>
        
        <div className="form-check">
        
        <input type="checkbox"
                  className="form-check-input"
                  id="SkillDatabase"
                  //label="SkillDatabase"
                  checked={!!this.state.SkillDatabase}
                  name="SkillDatabase"
                  onChange={this.handleChange}
                /><label className="form-check-label">Databases</label></div>
          <div className="form-check">         
        

        <input type="checkbox"
                  className="form-check-input"
                  id="SkillMechEngineering"
                  //label="SkillMechEngineering"
                  checked={!!this.state.SkillMechEngineering}
                  name="SkillMechEngineering"
                  onChange={this.handleChange}
                /><label className="form-check-label">Mechanical Engineering</label></div>
                 <div className="form-check">         
        

        <input type="checkbox"
                  className="form-check-input"
                  id="SkillNetworkDesign"
                  //label="SkillNetworkDesign"
                  checked={!!this.state.SkillNetworkDesign}
                  name="SkillNetworkDesign"
                  onChange={this.handleChange}
                /><label className="form-check-label">Network Design</label></div>
         <div className="form-check">         
        

        <input type="checkbox"
                  className="form-check-input"
                  id="SkillProgramming"
                  //label="SkillProgramming"
                  checked={!!this.state.SkillProgramming}
                  name="SkillProgramming"
                  onChange={this.handleChange}
                /><label className="form-check-label">Programming</label></div>
         <div className="form-check">         
        

        <input type="checkbox"
                  className="form-check-input"
                  id="SkillWebDesign"
                  //label="SkillWebDesign"
                  checked={!!this.state.SkillWebDesign}
                  name="SkillWebDesign"
                  onChange={this.handleChange}
                /><label className="form-check-label">Web Design</label></div>
        
                <br className=""></br>
                <hr></hr>
                <div className="form-check">
                    <button type="submit" className="btn btn-custom">
                      Submit
                    </button>
                </div>
              </form>
            </div>
        </div>
          </section>
        </div>

        </article>
      );
    
  }}
}

export default Question;
