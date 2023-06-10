import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Navbar = () => {
  return (
    <>
    
     <div className="navbar">
        
     <nav >
      <ul className="menu-bar navbar_title" >
      
      
 <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-Home" role="tab" aria-controls="v-pills-home" aria-selected="true"></a>
  <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-Dashboard" role="tab" aria-controls="v-pills-Dashboard" aria-selected="false"></a>
  <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-Report" role="tab" aria-controls="v-pills-Report" aria-selected="false"></a>
  <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-Order" role="tab" aria-controls="v-pills-Order" aria-selected="false"></a>
  <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-Invertory" role="tab" aria-controls="v-pills-Invertor" aria-selected="false"></a>
  <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-Settings" role="tab" aria-controls="v-pills-settings" aria-selected="false"></a>

</div>

<div className="tab-content" id="v-pills-tabContent">

<Link className="navbar_item" href="/">
  <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">Home</div>
  </Link>

  <Link className="navbar_item" href="/Dashboard">
  <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">Dashboard</div>
  </Link>
  <Link className="navbar_item" href="/Reports">
  <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">Report</div>
  </Link>
  <Link className="navbar_item" href="/Order">
  <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">Order</div>
  </Link>
  <Link className="navbar_item" href="/Invertory">
  <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">Invertory</div>
  </Link>
  <Link className="navbar_item" href="/Settings">
  <div className="tab-pane fade" id="v-pills-Settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">Settings</div>
  </Link>
</div>


      </ul>
    </nav> 
     </div>

    </>
  )
}

export default verNavbar
