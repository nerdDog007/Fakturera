import { IoPersonOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import flag from '../assets/flag.png'
import { FaBars } from "react-icons/fa";
function DashNav() {
    const {user} = useSelector((state:any)=>state.auth)
    console.log(user)
  return (
    <>
    {/* Nav for mobile */}
    <div className="mob-dashNavv">

    <nav className="mob-dashNav items-center">
    <FaBars className="gj"/>
    <div className="mnm">
                <p className="jk">Sweden</p>
                <img src={flag} alt="" className="img-flag"/>
    </div>
    </nav>
    </div>
    {/* Nav for desktop */}
    <nav className="desktop-dashNav ">
     <header className="desktop-header">
        <div className="thoi">
        <IoPersonOutline className="das"/>
        <div className="gh">
            <h1 className="rt">{user.name}</h1>
            <p className="rt">{user.address}</p>
        </div>
        </div>
        <div className="mnm">
                <p className="jk">Sweden</p>
                <img src={flag} alt="" className="img-flag"/>
        </div>
     </header>
    </nav>
    </>
  )
}

export default DashNav