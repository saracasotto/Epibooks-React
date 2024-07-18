import { useEffect, useState } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getComments = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(
          `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
          {
            headers: {
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjY4OWQyYjhmYzBmMzAwMTU1ZTViOTQiLCJpYXQiOjE3MjAzNzg3MDksImV4cCI6MTcyMTU4ODMwOX0.At7r4n44Pl4t3AWIAX-4wozh7rKIHNE9FeX0DGGYfEE',
            },
          }
        )
        if (response.ok) {
          const comments = await response.json()
          setComments(comments)
          setIsError(false)
        } else {
          setIsError(true)
        }
      } catch (error) {
        console.error(error)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    if (asin) {
      getComments()
    }
  }, [asin])

  return (
    <div className="comment-area text-center">
      {isLoading ? <Loading /> : isError ? <Error /> : <CommentList commentsToShow={comments} />}
      <AddComment asin={asin} />
    </div>
  )
}

export default CommentArea

