import Login from '../../components/Login'
import Navbar from '../../components/Navbar'
function Home() {
  return (
    <div className='relative'>
        <div className='bg-image'></div>
        <Navbar/>
        <Login/>
    </div>
  )
}

export default Home