import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SingleBook = ({ setSelected, selected, book }) => {
  const navigate = useNavigate()

  return (
    <>
      <Card
        onClick={() => setSelected(book.asin)}
        style={{
          border: selected === book.asin ? '1px solid #22908c' : 'none',
        }}
      >
        <div className="card-img-container">
          <Card.Img variant="top" src={book.img} />
        </div>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Button 
          onClick={() => navigate(`/details/${book.asin}`)}>
            Check Details
          </Button>
        </Card.Body>
      </Card>

    </>
  )
}

export default SingleBook
