import { useEffect, useState } from "react"
import { setArticleNo, setItems } from "../../redux/slices/Dash"
import { useSelector,useDispatch } from "react-redux"
import { CiSearch } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { FaPrint } from "react-icons/fa";
import { MdOutlineArrowDownward } from "react-icons/md";
import { RxSlider } from "react-icons/rx";
import { IoIosMore } from "react-icons/io";
import {setField} from "../../redux/slices/Dash"


function PriceList() {
  const dispatch = useDispatch()
  const {items,article_no,field} = useSelector((state:any)=>state.dash)
  const [priceList,setPriceList] = useState([])
  const [value, setValue] = useState("Initial text");
  console.log(article_no)
  useEffect(()=>{
    fetch("https://fakturera-i7to.onrender.com/dashboard")
      .then(res=>res.json())
      .then(res=>{
        console.log(res)
        dispatch(setItems(res))
        
      })

      fetch("https://fakturera-i7to.onrender.com/priceList", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      })
        .then(res => res.json())
        .then(res => {
          setPriceList(res)
          console.log(res)
        })
        .catch(err => console.error(err));
  },[])
  return (
    <div className="dash-pricelist">
        <div className="dash-pp">
        <div className="gf">
          <Input Icon={CiSearch} placeholder="Search Article No"/>
          <Input Icon={CiSearch} placeholder="Search Product"/>
        </div>
        <div  className="fgh">
          <Item item="New Product" Icon={IoMdAdd}/>
          <Item item="Price List" Icon={FaPrint}/>
          <Item item="Advanced Mode" Icon={RxSlider}/>
        </div>
        </div>

<div className="contr">
  <div className="mnp">
    {/* Header */}
    <div className=" pop an">Article No
      <MdOutlineArrowDownward className=" icon-i"/>
    </div>
    <div className=" pop ps">Product/service
    <MdOutlineArrowDownward className="text-green-400"/>
    </div>
    <div className=" lop ">Price</div>
    <div className="lop inPrice">In Price</div>
    <div className="lop unit">Unit</div>
    <div className="lop inStock">In Stock</div>
    <div className="lop desc">Description</div>
    <div className="lop "></div>
    </div>
    {/* Rosw */}
    {priceList.map((item,i) => (
      <div className="mnp" key={item.id}> 
        <input
      className="qaw an shadow-2xl"
      value={item.article_no}
      onChange={ async (e) => {
        const newPriceList = [...priceList];
        newPriceList[i].article_no = e.target.value;
        setPriceList(newPriceList);
        await fetch(`https://fakturera-i7to.onrender.com/priceList/${item.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("token")}`
          },
          body: JSON.stringify(newPriceList[i])
        })
        .then(res => res.json())
        .then(data => {
          console.log(" success:", data);
        })
        .catch(err => console.error("Eror", err));
      }}
    />
        <input value={item.product_service} className="qaw  shadow-2xl"
         onChange={ async (e) => {
          const newPriceList = [...priceList];
          newPriceList[i].product_service = e.target.value;
          setPriceList(newPriceList);
          await fetch(`https://fakturera-i7to.onrender.com/priceList/${item.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(newPriceList[i])
          })
          .then(res => res.json())
          .then(data => {
            console.log(" success:", data);
          })
          .catch(err => console.error("Eror", err));
        }}
        />
        <input value={item.price}  className="qaw shadow-2xl "
         onChange={ async (e) => {
          const newPriceList = [...priceList];
          newPriceList[i].price = e.target.value;
          setPriceList(newPriceList);
          await fetch(`https://fakturera-i7to.onrender.com/${item.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(newPriceList[i])
          })
          .then(res => res.json())
          .then(data => {
            console.log(" success:", data);
          })
          .catch(err => console.error("Eror", err));
        }}
        />
        <input value={item.in_price} className="qaw shadow-2xl inPrice"
         onChange={ async (e) => {
          const newPriceList = [...priceList];
          newPriceList[i].in_price = e.target.value;
          setPriceList(newPriceList);
          await fetch(`https://fakturera-i7to.onrender.com/${item.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(newPriceList[i])
          })
          .then(res => res.json())
          .then(data => {
            console.log(" success:", data);
          })
          .catch(err => console.error("Eror", err));
        }}
        />
        <input value={item.unit} className="qaw shadow-2xl unit"
         onChange={ async (e) => {
          const newPriceList = [...priceList];
          newPriceList[i].unit = e.target.value;
          setPriceList(newPriceList);
          await fetch(`https://fakturera-i7to.onrender.com/${item.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(newPriceList[i])
          })
          .then(res => res.json())
          .then(data => {
            console.log(" success:", data);
          })
          .catch(err => console.error("Eror", err));
        }}
        />
        <input value={item.in_stock} className="qaw shadow-2xl inStock"
         onChange={ async (e) => {
          const newPriceList = [...priceList];
          newPriceList[i].in_stock = e.target.value;
          setPriceList(newPriceList);
          await fetch(`https://fakturera-i7to.onrender.com/${item.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(newPriceList[i])
          })
          .then(res => res.json())
          .then(data => {
            console.log(" success:", data);
          })
          .catch(err => console.error("Eror", err));
        }}
        />
        <input value={item.description} className="qaw shadow-2xl desc"
         onChange={ async (e) => {
          const newPriceList = [...priceList];
          newPriceList[i].description = e.target.value;
          setPriceList(newPriceList);
          await fetch(`https://fakturera-i7to.onrender.com/priceList/${item.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(newPriceList[i])
          })
          .then(res => res.json())
          .then(data => {
            console.log(" success:", data);
          })
          .catch(err => console.error("Eror", err));
        }}
        />
        <div className="ic shadow-2xl">
          <IoIosMore />
        </div>
      </div>

    ))}
 
</div>





    </div>
  )
}

function Input({Icon,placeholder}:{Icon:any,placeholder:string}) {
  return(
    <li className="re">
      <input type="text" name="" id="" className="input-rr"  placeholder={placeholder}/>
      <Icon className="iconn"/>
    </li>
  )
}

function Item({item,Icon}:{item:any,Icon:any}) {
  return(
    <div className="gm">
      <p className="gmm">{item}</p>
      <Icon className="icone"/>
    </div>
  )
}

export default PriceList