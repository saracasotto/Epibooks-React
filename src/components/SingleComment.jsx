import React, { useState } from 'react';
import { Button, ListGroup, Form } from 'react-bootstrap';
import AlertComponent from './AlertComponent';

const SingleComment = ({ comment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);
  const [editedRate, setEditedRate] = useState(comment.rate);

  const [alert, setAlert] = useState({
    show: false,
    variant: '',
    message: '',
  });

  const deleteComment = async (asin) => {
    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/comments/' + asin,
        {
          method: 'DELETE',
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4OWQyYjhmYzBmMzAwMTU1ZTViOTQiLCJpYXQiOjE3MjE2Mzc2NjcsImV4cCI6MTcyMjg0NzI2N30.XTSLW2peynNCJd_5KmfTadNlz1dq2kcA2asPPqTsHvs',
          },
        }
      );
      if (response.ok) {
        setAlert({
          show: true,
          variant: 'success',
          message: 'The review has been successfully cancelled',
        });
      } else {
        throw new Error("The review couldn't be cancelled!");
      }
    } catch (error) {
      setAlert({
        show: true,
        variant: 'danger',
        message: error.message,
      });
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
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4OWQyYjhmYzBmMzAwMTU1ZTViOTQiLCJpYXQiOjE3MjE2Mzc2NjcsImV4cCI6MTcyMjg0NzI2N30.XTSLW2peynNCJd_5KmfTadNlz1dq2kcA2asPPqTsHvs',
          },
          body: JSON.stringify({ comment: editedComment, rate: editedRate }),
        }
      );
      if (response.ok) {
        setAlert({
          show: true,
          variant: 'success',
          message: 'The review has been successfully edited',
        });
        setIsEditing(false);
      } else {
        throw new Error("The review couldn't be edited!");
      }
    } catch (error) {
      setAlert({
        show: true,
        variant: 'danger',
        message: error.message,
      });
    }
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, show: false });
  };

  return (
    <ListGroup.Item>
      <AlertComponent 
        show={alert.show} 
        variant={alert.variant} 
        message={alert.message} 
        onClose={handleCloseAlert} 
      />
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
            onClick={() => editComment(comment._id)}
          >
            Save
          </Button>
          <Button onClick={() => setIsEditing(false)}>
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
          <Button onClick={() => setIsEditing(true)}>
            Edit
          </Button>
          <Button  onClick={() => deleteComment(comment._id)}>
            Delete
          </Button>
        </div>
      )}
    </ListGroup.Item>
  );
};

export default SingleComment;
