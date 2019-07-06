import React, { Component } from 'react';
import { MDBCol, MDBBtn, MDBIcon } from 'mdbreact';


class Success extends Component {
  render() {
    return(

      <div class="container-fluid" style={{}}>
          <div class= "row justify-content-md-center" style={{paddingTop: '5vw'}}>
            <div class="col-md-3 mr-5">
            <div class="text-center">
            <div className="text-center mt-4">
            <a href="#myModal" class="trigger-btn" data-toggle="modal">Click to Open Confirm Modal</a>
            </div>
            <div id="myModal" class="modal fade">
              <div class="modal-dialog modal-confirm">
                <div class="modal-content">
                  <div class="modal-header">
                    <div class="icon-box">
                      <i class="material-icons">&#xE876;</i>
                    </div>
                    <h4 class="modal-title">ESKETI!</h4>
                  </div>
                  <div class="modal-body">
                    <p class="text-center">Thanks for connecting!</p>
                  </div>
                  <div class="modal-footer">
                    <button class="btn btn-success btn-block" data-dismiss="modal">OK</button>
                  </div>
                </div>
                </div>
                </div>
                </div>
          </div>
          </div>
          </div>






    )
  }
}

export default Success;
