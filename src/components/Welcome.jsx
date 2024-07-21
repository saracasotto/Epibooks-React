import { Alert } from 'react-bootstrap'

const Welcome = () => (
  <Alert className="text-center" data-testid='welcome'
  style={
    {backgroundColor:'#f0f0f0',
    color: '#d22e68',
    border: '#d22e68'}
  }>
    <h1>Welcome to Epibooks!</h1>
  </Alert>
)

export default Welcome
