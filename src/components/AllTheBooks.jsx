import { Col, Row } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'
import SingleBook from './SingleBook'
import CommentArea from './CommentArea'
import { useState } from 'react'

const AllTheBooks = ({ searchQuery }) => {
  const [selected, setSelected] = useState(false)

  return (
    <Row>
      <Col lg={4} className="order-lg-2 order-1">
        <CommentArea asin={selected} />
      </Col>
      <Col lg={8} className="order-lg-1 order-2">
        <Row className="g-2 mt-3">
          {fantasy
            .filter((b) => b.title.toLowerCase().includes(searchQuery))
            .map((book) => (
              <Col xs={12} md={6} xl={4} key={book.asin}>
                <SingleBook
                  book={book}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Col>
            ))}
        </Row>
      </Col>
    </Row>
  );
}

export default AllTheBooks
