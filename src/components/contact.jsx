import React from 'react';
import { render } from 'react-dom';
import { Formik, Field, Form } from "formik";
import * as yup from 'yup';
import axios from 'axios';
import { Redirect, BrowserRouter, Route, withRouter } from 'react-router-dom';

import Recaptcha from "react-recaptcha";

import { useEffect } from 'react';

import './contact.css';


let recaptchaInstance
class Contact extends React.Component {

/*
  componentDidMount(){
    //$script('https://www.google.com/recaptcha/api.js', 'recaptcha');
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.defer = true;
    s.href = 'https://www.google.com/recaptcha/api.js';
    document.head.appendChild(s);
  }
  */

  redirectToHome = () => {
   const { history } = this.props;
   console.log(history);
   history.goBack();
   //if(history) history.push('/linkedin');
  }

  executeCaptcha = () => {
     recaptchaInstance.execute();
   }
   verifyCallback = (response) => {
     if(response){
       console.log(response);
       // document.getElementById("mc-embedded-subscribe-form").submit();
     }
   }



  render() {

    return (

      <div className=" col-sm-6 mx-auto container">
      <h1 className="purple">Contact</h1>
        <Formik
          initialValues={{
            name: "",
            email: "",
            company: "",
            recaptcha: "",
          }}
          onSubmit={async (values) => {
            let formData = new FormData();

            formData.append("name", values.name);
            formData.append("company", values.company);
            formData.append("email", values.email);
            formData.append("message", values.message);
            formData.append("recaptcha", values.recaptcha);

            // you would submit with fetch for example
            // const res = await fetch("posturl", { method: "POST", body: formData });
            // Do whatever on the sever

            const API_PATH = 'https://cxtvgc0949.execute-api.eu-central-1.amazonaws.com/prod';
            //const API_PATH = 'https://rpormm46i0.execute-api.us-east-2.amazonaws.com/prod';
            axios({
               method: 'post',
               url: API_PATH,
               headers: { 'content-type': 'application/json' },
               data: {name: formData.get("name"), company: formData.get("company"), email: formData.get("email"), message: formData.get("message") }
           })
           .then(result => {
             if(result.status == 200){
               alert("Your message was sent successfully");
             }
           })
           /*
            console.log(formData.get("name"));
            console.log(formData.get("email"));
            console.log(formData.get("company"));
            console.log(formData.get("message"));
            console.log(formData.get("recaptcha"));
            */
            localStorage.setItem("token", "T");

            this.redirectToHome();


          }}
          validationSchema={yup.object().shape({
            name: yup.string(),
            company: yup.string(),
            email: yup.string().email().required(),
            message: yup.string().required(),
            recaptcha: yup.string().required(),
          })}
          render={({ values, errors, touched, handleSubmit, handleChange, setFieldValue }) => (
            <form onSubmit={handleSubmit}>

            <div className="mt-3 row">
              <div className="col-sm-6 form-group">
                  <h5>Name</h5>
                <input id="name" name="name" type="text" className="form-control"
                  value={values.name} onChange={handleChange} />
              </div>

              <div className="col-sm-6 form-group">
                <h5>Company</h5>
                <input id="company" name="company" type="text" className="form-control"
                  value={values.company} onChange={handleChange} />
              </div>
            </div>

              <div className="mt-3 form-group">
                <h5 className="required">E-Mail</h5> <h5> {errors.email && touched.email && (<b className="p red">{errors.email}</b>)}</h5>
                <input id="email" name="email" type="email" className="form-control"
                  value={values.email} onChange={handleChange} />

              </div>

              <div className="mt-3">
                <h5 className="required">I'm Interested In</h5> <h5>{errors.message && (<b className="p red">{errors.message}</b>)}</h5>
                <Field className="form-control" as="select" onChange={handleChange} name="message">
                <option value=""> --- Select what you're interested in ---</option>
                  <option value="I'm interested in partnering with Evologic Technologies"> I'm interested in partnering with Evologic Technologies</option>
                  <option value="I'm from the Biologicals field interested in your Technology and Capabilities"> I'm from the Biologicals field interested in your Technology and Capabilities</option>
                  <option value="I'm a Journalist and am interested in your impact on sustainable agriculture"> I'm a Journalist and am interested in your impact on sustainable agriculture</option>
                  <option value="I'm a Masters student and am interested in work-study opportunities"> I'm a Masters student and am interested in work-study opportunities</option>
                  <option value="I'm a Scientist interested in your job opportunities"> I'm a Scientist interested in your job opportunities</option>
                </Field>
              </div>


              <div className="my-5 row">
              <div className="col-sm-6 d-flex"><button type="submit" onClick={this.myfunction} className=" btn-lg mx-auto my-auto btn-primary">Send</button></div>
              <div className="col-sm-6 form-group">
              <h5>{errors.recaptcha && touched.recaptcha && (<b className="p red">{errors.recaptcha}</b>)}</h5>

                {/*<Recaptcha
                  sitekey="6LcMpGwaAAAAAFVBBSlV4N0v3_BfSTkJmKbxiSdE"
                  render="explicit"
                  verifyCallback={(response) => { setFieldValue("recaptcha", response); }}
                  onloadCallback={() => { console.log("done loading!"); }}
                />*/}
                <Recaptcha
                      ref={e => recaptchaInstance = e}
                      sitekey="6LcMpGwaAAAAAFVBBSlV4N0v3_BfSTkJmKbxiSdE"
                      size="explicit"
                      onloadCallback={() => { console.log("done loading!"); }}
                      verifyCallback={(response) => { setFieldValue("recaptcha", response); }}
                    />





              </div>


            </div>
            </form>
          )} />
      </div>
    );
  }
};

export default withRouter(Contact);
