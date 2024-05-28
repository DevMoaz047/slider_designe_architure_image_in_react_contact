import React from "react";
import img3 from "../Images/Img (5).jpg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Contect(){
    return(
        <>
        <div className="main1" >

            <div className="m1">

                <div className="m">
                    <i className="fa fa-search"></i>
                    {/* <FontAwesomeIcon  icon={faSearch}/>      */}
                    <h3>Ready to started?</h3>
                    <p>All the live scores, fixtures and tables for Pakistan Pakistan Super League from LiveScore.com. </p>
                </div>

                <div className="m">
                <h3>Ready to started?</h3>
                    <p>All the live scores, fixtures and tables for Pakistan Pakistan Super League from LiveScore.com. </p>
                
                </div>

                <div className="m">
                <h3>Ready to started?</h3>
                    <p>All the live scores, fixtures and tables for Pakistan Pakistan Super League from LiveScore.com. </p>
                </div>

                <div className="m">
                <h3>Ready to started?</h3>
                    <p>All the live scores, fixtures and tables for Pakistan Pakistan Super League from LiveScore.com. </p>
                </div>

            </div>
            
            <div className="m2">
                <div className="m22">
                <h1>Contect Info</h1>
                <p>
                    Silver Star Medal Air Force's Personnel Center Display
                    The Silver Star is currently awarded by all branches of the 
                    Armed Forces to any person who, while serving in any capacity, 
                    is cited for gallantry in action against an enemy of the United States
                    while engaged in military operations involving conflict with an opposing 
                    foreign force, or while serving with friendly forces
                </p> 
                <img src={img3}  class="img-fluid" alt="no source found"/>
                <hr/>
                <h5> image From free<u>Pakistan</u></h5>
                </div>
                <div className="m22">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="User name"/>
                    </div>

                    <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="d-grid gap-2">
                    <button class="btn btn-primary" type="button">Button</button>
                    </div>

                </div>
            </div>

        </div>
        
        </>
    );
}

export default Contect;