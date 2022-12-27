import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
function CardView() {
  const navigate = useNavigate()
  return (
    <div>
      <h1>This is the card page</h1>
      <h3>Want to create your own card?</h3>
      <Button onClick={() => navigate('/about')}>Create Card</Button>
    </div>
  )
}

export default CardView
