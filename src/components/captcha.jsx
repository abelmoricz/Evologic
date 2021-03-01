import React from 'react';
import { render } from 'react-dom';
import { Formik } from "formik";
import * as yup from 'yup';
import Recaptcha from "react-recaptcha";

class Captcha extends React.Component {

  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }

  render() {
    return (
      <div className="container">
        <Formik
          initialValues={{
            recaptcha: "",
          }}
          onSubmit={(values) => {
            alert(
              JSON.stringify({ recaptcha: values.recaptcha,}, null,2));
          }}
          validationSchema={yup.object().shape({
            recaptcha: yup.string().required(),
          })}
          render={({ values, errors, touched, handleSubmit, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <Recaptcha
                  sitekey="6LcfclcUAAAAAGNylZI8zih_qfHfF7yYg7D8F0CQ"
                  render="explicit"
                  theme="light"
                  verifyCallback={(response) => { setFieldValue("recaptcha", response); }}
                  onloadCallback={() => { console.log("done loading!"); }}
                />
                {errors.recaptcha
                  && touched.recaptcha && (
                  <p>{errors.recaptcha}</p>
                )}
              </div>

              <button type="submit" className="">submit</button>
            </form>
          )} />
      </div>
    );
  }
};

export default Captcha;
