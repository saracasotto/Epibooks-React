import { Card, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import CommentArea from './CommentArea'
import fantasy from '../data/fantasy.json'
import '../styles/SingleBook.css'

const BookDetails = () => {
  const params = useParams()
  const foundBook = fantasy.find((book) => book.asin === params.asin)

  return (
    <Row className="justify-content-center">
      <Col md={6} lg={4}>
        <Card
        style={{
          border:'none'
        }}>
          <Card.Img variant="top" src={foundBook.img} />
          <Card.Body>
            <Card.Title>
              {foundBook.title}
            </Card.Title>
          </Card.Body>
        </Card>
        <CommentArea asin={params.asin} />
      </Col>
    </Row>
  )
}

export default BookDetails
