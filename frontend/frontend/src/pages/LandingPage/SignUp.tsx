import Navbar from "../../components/Navbar"
import { useDispatch,useSelector } from "react-redux"
import { setEmail,setIsLoggedIn,setName,setPassword,setToken,setUsername } from "../../redux/slices/Auth"
import { useNavigate } from "react-router-dom"

function SignUp() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {email,isLoggedIn,name,password,token,username} = useSelector((state:any)=>state.auth)
  return (
    <div className="sign-container">
        <div className='bg-image'></div>
        <Navbar/>
        <div className="signUp">
            <h1 className="jh">Registrera dig</h1>
            <form action="" className="signUp-form">
                <input type="text" placeholder="Your name" className="input" value={name} onChange={(e)=>dispatch(setName(e.target.value))}/>
                <input type="text" placeholder="Your username" className="input"
                value={username} onChange={(e)=>dispatch(setUsername(e.target.value))}
                />
                <input type="email" placeholder="Your email" className="input" 
                value={email} onChange={(e)=>dispatch(setEmail(e.target.value))}
                />
                <input type="password" placeholder=" Your new Password " className="input"
                value={password} onChange={(e)=>dispatch(setPassword(e.target.value))}
                />
                <p className="sa">Du kan använda och prova 123 Fakturera helt gratis i 14 dagar.Detta är en äkta fullversion, så att du kan skicka 1000 fakturor eller mer, helt gratis.123 Fakturera är så lätt och självförklarande att chansen för att du kommer att behöva support är minimal, men om du skulle behöva support, så är vi här för dig, med vårt kontor bemannat större delen av dygnet. Efter provperioden så fortsätter abonnemanget och kostar 99 kronor exkl. moms per månad, som faktureras årligen. Om du inte vill behålla programmet, så är det bara att avbryta provperioden genom att ge besked inom 14 dagar från i dag.Klicka Fakturera Nu för att fakturera och för att godkänna villkoren, och din första faktura är normalt klar till att skickas inom 5-10 minuter.</p>
                <button type="submit" className="submit-btn"
                onClick={async (e)=>{
                    e.preventDefault()
                    console.log(email,name,password,username) 
                    await fetch("http://localhost:3000/signUp",{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify({
                            email:email,
                            password:password,
                            username:username,
                            name:name
                        })
                    }
                
                ).then((res)=>{
                    if(res.status===201){
                        navigate("/login")
                    }
                }).catch((err)=>{
                    console.log(err)
                })
                }}
                >Registrera dig</button>
            </form>
        </div>
    </div>
  )
}

export default SignUp
