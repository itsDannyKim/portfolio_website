import React, { Component } from 'react';
import { MDBCol, MDBBtn, MDBIcon } from 'mdbreact';


class Contact extends Component {
  render() {
    return(

      <div class="container-fluid" style={{paddingTop:'3rem'}}>
      <div class= "row justify-content-md-center">
       <MDBCol md="6" >
        <div className="formborder">
         <form action="/components/success.js"   method="POST" name="contact" data-netlify="true"  data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
           <p className="h4 text-center mb-4" style={{color: 'white'}}>Let's Talk!</p>
           <label htmlFor="defaultFormContactNameEx" className="white-text" style={{float:'left'}}>
             Name
           </label>
           <input
             type="text"
             name="name"
             className="form-control"
           />
           <br />
           <label htmlFor="defaultFormContactEmailEx" className="white-text" style={{float:'left'}}>
             Email
           </label>
           <input
             type="email"
             name="email"
             className="form-control"
           />
           <br />
           <label
             htmlFor="defaultFormContactSubjectEx"
             className="white-text"
             style={{float:'left'}}
           >
             Subject
           </label>
           <input
             type="text"
             name="subject"
             className="form-control"
             style={{float:'left'}}
           />
           <br />
           <label
             htmlFor="defaultFormContactMessageEx"
             className="white-text"
             style={{float:'left', paddingTop:'1rem'}}
           >
             Message
           </label>
           <textarea
             type="text"
             name="message"
             className="form-control"
             rows="3"
           />
           <div className="text-center mt-4">
              <MDBBtn color="warning" outline type="submit">
                Send
                <MDBIcon far icon="paper-plane" className="ml-2" />
              </MDBBtn>
            </div>
            <div data-netlify-recaptcha="true"></div>
         </form>
        </div>
       </MDBCol>
  </div>
  </div>
    )
  }
}

export default Contact;
