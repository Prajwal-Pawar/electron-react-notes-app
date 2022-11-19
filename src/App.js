import './App.css';
import { Button, Form, Container } from 'react-bootstrap';

function App() {
  return (
    <Container id="container">
      <div>
        <h1 className="text-center mb-4">Welcome to Notes</h1>

        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Your Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Your name" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enter
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default App;
