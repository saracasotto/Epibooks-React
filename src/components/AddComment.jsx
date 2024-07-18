import { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const AddComment = ({ asin }) => {
  const [comment, setComment] = useState({
    comment: '',
    rate: 1,
    elementId: null,
  })

  useEffect(() => {
    setComment((c) => ({
      ...c,
      elementId: asin,
    }))
  }, [asin])

  const sendComment = async (e) => {
    e.preventDefault()
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments',
        {
          method: 'POST',
          body: JSON.stringify(comment),
          headers: {
            'Content-type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4OWQyYjhmYzBmMzAwMTU1ZTViOTQiLCJpYXQiOjE3MjAzNzg3MDksImV4cCI6MTcyMTU4ODMwOX0.At7r4n44Pl4t3AWIAX-4wozh7rKIHNE9FeX0DGGYfEE',
          },
        }
      )
      if (response.ok) {
        alert('Review Sent')
        setComment({
          comment: '',
          rate: 1,
          elementId: null,
        })
      } else {
        throw new Error('Error sending review')
      }
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="add-comment-form my-3">
      <Form onSubmit={sendComment}>
        <Form.Group className="mb-2">
          <Form.Label>Review</Form.Label>
          <Form.Control
            type="text"
            placeholder="Add your review here"
            value={comment.comment}
            onChange={(e) =>
              setComment({
                ...comment,
                comment: e.target.value,
              })
            }
          />
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label>Stars</Form.Label>
          <Form.Control
            as="select"
            value={comment.rate}
            onChange={(e) =>
              setComment({
                ...comment,
                rate: e.target.value,
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
        <Button type="submit">
          Send
        </Button>
      </Form>
    </div>
  )
}

export default AddComment
