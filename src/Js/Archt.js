import React from "react";
import img1 from "../Images/img1.jpg";
import img2 from "../Images/Img (4).jpg";
import img3 from "../Images/Img (8).jpg";


function Archt(){
    return(
        <>
    <div className="maindiv">
    
    <div className="left">
    
    <div className="div1">
     <h3>Hi I'm Moaz</h3>
     <div className="div11">
 <img src={img1}  class="img-fluid rounded-circle" alt="no source found"/>
</div>
    </div>
    
    <div className="div2">

        <div className="div21">
        <img src={img2} class="img-fluid fit-box" alt="no source found"/>
        </div>

        <div className="div22">
            <h2>Thumbnail The .img-thumbnail class shapes.</h2>
            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dark dropdown
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButtonDark">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>

        </div>
    </div>

    </div>
    
    <div className="right">

    <div className="r2">

<div className="div21">
<img src={img3} class="img-fluid img-thumbnail" alt="no source found"/>
</div>

<div className="div22">
    <h2>Thumbnail The .img-thumbnail class shapes.</h2>
    <button class="btn btn-secondary" type="button"  aria-expanded="false">
Dark dropdown
</button>

</div>
</div>
<div className="r1">
     <h3>Hi I'm Moaz its a good boy. its studyse sin MSCS in university of Engeering and technology lahore</h3>
     <div className="r11">
 <img src={img1}  class=" img-fluid" alt="no source found"/>
</div>
img-fluid 
    </div>

    </div>

    </div>
    

        </>
    );
}
export default Archt;