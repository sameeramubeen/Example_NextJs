import Link from "next/link";
import Image from 'next/image';

const Navbar = () => {
  return (
    
    
     <div className="navbar" id="navbarId"> 

     <div id="imageDiv">
     <Image
      src="aynama_logo.svg"
      width={100}
      height={100}
      alt="Picture of the author"
    />    
      </div>
      <div id="navDiv">
      
      <nav align="">
      
      <ul className="menu-bar navbar_title">

      
      <Link className="navbar_item" href="/">
          Home
        </Link>

        <Link className="navbar_item" href="/About">
          About
        </Link>

        <Link className="navbar_item" href="/Contact">
        Contact
        </Link>

        <Link className="navbar_item" href="/Product">
        Product
        </Link>

     </ul>
    </nav> 
        </div>   
     
 </div>

    
  )
}

export default Navbar
