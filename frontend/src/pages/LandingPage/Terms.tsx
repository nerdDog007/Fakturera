import { useEffect, useState } from "react"
import Navbar from "../../components/Navbar"
import { useNavigate } from "react-router-dom";

function Terms() {
    const [terms, setTerms] = useState([]);
    const navigate = useNavigate();
    console.log("thus")
    useEffect(() => {
        fetch("https://fakturera-i7to.onrender.com/terms")
          .then((response) => response.json())
          .then((data) => {
            const m = data.terms.split("_");
            setTerms(m); 
            console.log(terms)
          })
          .catch((error) => {
            console.error("Failuree:", error);
          });
      }, []);
    

  return (
    <div className="terms">
        <div className='bg-image'></div>
        <Navbar/>
        {terms.length>1 && <div className=" terms-cont">
            <h1 className="terms-h">Villkor</h1>
            <button className="submit-btn terms-btn"
            onClick={()=>navigate("/login")}
            >Log In</button>
            <div className="terms-text">
            {
                terms.map((item,index)=>
                    <p key={index} className="terms-p">{item}</p>
                )
            }
            </div>
            <button className="submit-btn terms-btn"
            onClick={()=>navigate("/login")}
            >Log In</button>

        </div>}
    </div>
  )
}

export default Terms