import './App.css';
import { Button, Form, Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <h1 className="text-center mt-4 mb-3">Notes</h1>

      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Title" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Note</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Note ..."
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default App;
