import React, { useState } from 'react';
import { Button, ListGroup, Form } from 'react-bootstrap';

const SingleComment = ({ comment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);
  const [editedRate, setEditedRate] = useState(comment.rate);

  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4OWQyYjhmYzBmMzAwMTU1ZTViOTQiLCJpYXQiOjE3MjAzNzg3MDksImV4cCI6MTcyMTU4ODMwOX0.At7r4n44Pl4t3AWIAX-4wozh7rKIHNE9FeX0DGGYfEE',
          },
        }
      );
      if (response.ok) {
        alert('The review has been successfully cancelled');
      } else {
        throw new Error('The review couldn\'t be cancelled!');
      }
    } catch (error) {
      alert(error);
    }
  };

  const editComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4OWQyYjhmYzBmMzAwMTU1ZTViOTQiLCJpYXQiOjE3MjAzNzg3MDksImV4cCI6MTcyMTU4ODMwOX0.At7r4n44Pl4t3AWIAX-4wozh7rKIHNE9FeX0DGGYfEE',
          },
          body: JSON.stringify({ comment: editedComment, rate: editedRate }),
        }
      );
      if (response.ok) {
        alert('The review has been successfully edited');
        setIsEditing(false);
      } else {
        throw new Error('The review couldn\'t be edited!');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup.Item>
      {isEditing ? (
        <div>
          <Form.Group controlId="editComment">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="editRate">
            <Form.Label>Rate</Form.Label>
            <Form.Control
              type="number"
              value={editedRate}
              onChange={(e) => setEditedRate(e.target.value)}
              min={1}
              max={5}
            />
          </Form.Group>
          <Button
            variant="success"
            className="me-2"
            onClick={() => editComment(comment._id)}
          >
            Save
          </Button>
          <Button variant="secondary" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
        </div>
      ) : (
        <div>
          <p>
            <span>Comment: </span>
            <span className="comment">{comment.comment}</span>
          </p>
          <div>
            <p>
              <span>Author: </span>
              <span className="author">{comment.author}</span>
            </p>
            <p>
              <span>Rating: </span>
              <span className="rating">{comment.rate}</span>
            </p>
          </div>
          <Button variant="warning" className="me-2" onClick={() => setIsEditing(true)}>
            Edit
          </Button>
          <Button variant="danger" onClick={() => deleteComment(comment._id)}>
            Delete
          </Button>
        </div>
      )}
    </ListGroup.Item>
  );
};

export default SingleComment;
