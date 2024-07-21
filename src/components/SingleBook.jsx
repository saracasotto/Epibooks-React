import { Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../styles/SingleBook.css'

const SingleBook = ({ setSelected, selected, book }) => {
  const navigate = useNavigate()

  return (
    <>
      <Card data-testid='book-card'
        onClick={() => setSelected(book.asin)}
        style={{
          border: selected === book.asin ? '2px solid #d22e68' : '1px solid #22908c',
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
          <Button >
            Save &#9825;
          </Button>
        </Card.Body>
      </Card>

    </>
  )
}

export default SingleBook
