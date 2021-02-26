import React from 'react';

import './contact.css';
import { ReCaptcha } from 'react-recaptcha-google';
import Captcha from './captcha';
import axios from 'axios';

class Contact_Form extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       name: '',
       email: '',
       company: '',
       message: "I'm interested in partnering with Evologic Technologies"
     }
   }



   handleSubmit(e){
     const API_PATH = 'https://cxtvgc0949.execute-api.eu-central-1.amazonaws.com/prod';
     e.preventDefault();
     axios({
        method: 'post',
        url: API_PATH,
        headers: { 'content-type': 'application/json' },
        data: this.state
    })
    .then(result => {
      if(result.status == 200){
        alert("Your message was sent successfully");
      }
    })
   }

   handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  }

   resetForm(){
     this.setState({name: '', email: '', company: '', message: ''})
   }

   render() {
     return(
       <div className="col-6 mx-auto">
        <h1 className="purple">Contact</h1>
         <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
         <div className="row">
             <div className="col-sm-6">
                 <h5 >Name</h5>
                 <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.handleInputChange.bind(this)} />
             </div>
             <div className="col-sm-6">
                 <h5>Company</h5>
                 <input className="form-control" name="company" value={this.state.company} onChange={this.handleInputChange.bind(this)} />
             </div>
           </div>
           <div className="my-3">
               <h5 className="required">Email address</h5>
               <input type="email" required={true} name="email" className="form-control" value={this.state.email} onChange={this.handleInputChange.bind(this)} />
           </div>

           <div>
               <h5 className="required">I'm Interested In</h5>
               <select className="form-control" options={this.state.selectOptions} aria-label="Default select example" name="message" value={this.state.message} onChange={this.handleInputChange.bind(this)} >
                <option value="I'm interested in partnering with Evologic Technologies"> I'm interested in partnering with Evologic Technologies</option>
                <option value="I'm from the Biologicals field interested in your Technology and Capabilities"> I'm from the Biologicals field interested in your Technology and Capabilities</option>
                <option value="I'm a Journalist and am interested in your impact on sustainable agriculture"> I'm a Journalist and am interested in your impact on sustainable agriculture</option>
                <option value="I'm a Masters student and am interested in work-study opportunities"> I'm a Masters student and am interested in work-study opportunities</option>
                <option value="I'm a Scientist interested in your job opportunities"> I'm a Scientist interested in your job opportunities</option>
               </select>
           </div>
           <div className="row"><button type="submit" className="btn-lg btn-primary mx-auto my-5">Submit</button></div>

           <Captcha />
         </form>

       </div>
     );
   }

   onNameChange(event) {
 	  this.setState({name: event.target.value})
   }

   onEmailChange(event) {
 	  this.setState({email: event.target.value})
   }

   onMessageChange(event) {
 	  this.setState({message: event.target.value})
   }
 }


export default Contact_Form;
