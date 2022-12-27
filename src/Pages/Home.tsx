import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'

function Home() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Welcome!</h1>
      <Button onClick={() => navigate('/about')}>Create a Card</Button>
      <br />
      <Button
        onClick={() => {
          navigate('/card-view')
        }}
      >
        View Cards
      </Button>
    </div>
  )
}

export default Home
