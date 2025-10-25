import { useEffect } from 'react';
import  {useNavigate} from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  useEffect(() => {
    navigate('/login');
  }, [navigate]);
    console.log("thiss");
  return (
    <div>

    </div>
  )
}

export default Home
