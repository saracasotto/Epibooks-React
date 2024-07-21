import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'
import '../styles/CommentList.css'

const CommentList = ({ commentsToShow }) => (
  <ListGroup>
    {commentsToShow.map((comment) => (
      <SingleComment comment={comment} key={comment._id} />
    ))}
  </ListGroup>
)

export default CommentList
