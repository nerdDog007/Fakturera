import { FaBars } from "react-icons/fa";
import Swe from '../assets/flag.png'
import logo from '../assets/diamond.png'
import { useEffect, useState } from "react";
function Navbar() {
    const [isClicked, setIsClicked] = useState(false);
    const [navbar, setNavbar] = useState([]);
    
      useEffect(() => {
        fetch("http://localhost:3000/navbar")
          .then((response) => response.json())
          .then((data) => {
            const m = typeof data.navbar === "string" ? data.navbar.split(",") : [];
            setNavbar(m);
            console.log(navbar)
          })
          .catch((error) => {
            console.error("Failer:", error);
          });
      }, []);
  return (
    <>

        <nav className="mob-navbar">
            <FaBars className="nav-bar" onClick={() => setIsClicked(!isClicked)}/>
            <div className="nav-title">
            <h1 >Svenska</h1>
            <img src={Swe} alt="it is a Swedish Flag" className="flag"/>
            </div>
                <ul className={`nav-items-mob ${isClicked ? 'anim' : ''}`}>
                    {
                        navbar.map((item,index)=>
                            <NavItem key={index} title={item}/>
                        )
                    }
                </ul>
        </nav>


        <nav className="desktop-navbar">
            <img src={logo} alt="" className="nav-logo"/>
            <ul className="desktop-navbar-list">
                {
                    navbar.map((item,index)=>
                        <NavItem key={index} title={item}/>
                    )
                }
            <li className="nav-title">
                <h1 >Svenska</h1>
                <img src={Swe} alt="it is a Swedish Flag" className="flag"/>
            </li>
            </ul>
        </nav>
    </>
  )
}

function NavItem({title}: {title: string}) {
    return (
        <li>{title}</li>
    )
}

export default Navbar
