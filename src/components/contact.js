import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';


class Contact extends Component {
  render() {
    return(

      <MDBContainer className="MDBcontainer-color" style={{paddingLeft: '500px', paddingTop: '100px', minWidth:'100%', width:'100%',
      height:'100%', minHeight:'100%'}}>
     <MDBRow>
       <MDBCol md="7">
        <div className="formborder">
         <form action="POST" data-netlify="true">
           <p className="h4 text-center mb-4" style={{color: 'white'}}>Let's Talk!</p>
           <label htmlFor="defaultFormContactNameEx" className="white-text">
             Name
           </label>
           <input
             type="text"
             id="defaultFormContactNameEx"
             className="form-control"
           />
           <br />
           <label htmlFor="defaultFormContactEmailEx" className="white-text">
             Email
           </label>
           <input
             type="email"
             id="defaultFormContactEmailEx"
             className="form-control"
           />
           <br />
           <label
             htmlFor="defaultFormContactSubjectEx"
             className="white-text"
           >
             Subject
           </label>
           <input
             type="text"
             id="defaultFormContactSubjectEx"
             className="form-control"
           />
           <br />
           <label
             htmlFor="defaultFormContactMessageEx"
             className="white-text"
           >
             Message
           </label>
           <textarea
             type="text"
             id="defaultFormContactMessageEx"
             className="form-control"
             rows="3"
           />
           <div className="text-center mt-4">
             <MDBBtn color="warning" outline type="submit">
               Send
               <MDBIcon far icon="paper-plane" className="ml-2" />
             </MDBBtn>
           </div>
         </form>
        </div>
       </MDBCol>
     </MDBRow>
   </MDBContainer>
    )
  }
}

export default Contact;
