import DashNav from "../../components/DashNav"
import { useSelector } from "react-redux"
import PriceList from "./PriceList"
import { TbFileInvoice } from "react-icons/tb";
import { FaPerson } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { BsJournalAlbum } from "react-icons/bs";
import { MdPriceCheck } from "react-icons/md";
import { PiInvoiceFill } from "react-icons/pi";
import { IoMdCut } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { MdOutlineCardMembership } from "react-icons/md";
import { PiExportLight } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
function Home() {
  const {currenIndex} = useSelector((state:any)=>state.dash)
  return (
    <div className="Dashboard">
      <DashNav/>
      <div className=" mk">
        <div className=" kjl">
          <h1 className="menu">Menu</h1>
          <ul className="ul-l">
            <Mk Icon={TbFileInvoice} text="Invoices"/>
            <Mk Icon={FaPerson} text="Customers"/>
            <Mk Icon={IoMdSettings} text="My Business"/>
            <Mk Icon={BsJournalAlbum} text="Invoice Journal"/>
            <Mk Icon={MdPriceCheck} text="Price List"/>
            <Mk Icon={PiInvoiceFill} text="Multiple Invoicing"/>
            <Mk Icon={IoMdCut} text="Unpaid Invoices"/>
            <Mk Icon={BiSolidOffer} text="Offers"/>
            <Mk Icon={SlCalender} text="Inventing Control"/>
            <Mk Icon={MdOutlineCardMembership} text="Member Invoicing"/>
            <Mk Icon={PiExportLight} text="Import/Export"/>
            <Mk Icon={CiLogout} text="Logout"/>
          </ul>
        </div>
        {/* <div className="w-1/2 mx-auto"> */}
        {
          currenIndex === "Price List" && <PriceList/>
        }
        {/* </div> */}
      </div>
    </div>
  )
}

function Mk({Icon,text}:{Icon:any,text:string}) {
  return(
    <li className= {`ghj ${text==="Price List"?"active":""}`}>
      <Icon className="icon"/>
      <p>{text}</p>
    </li>
  )
}

export default Home