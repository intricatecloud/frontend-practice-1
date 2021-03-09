import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Button, Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <Container
      fluid
      className="bg-image"
      style={{ color: "white", textAlign: "center" }}
    >
      <Row style={{ height: "100%" }}>
        <Col style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ paddingTop: "5em" }}>
            <h1>A New Start</h1>
          </div>
          <div
            style={{
              marginLeft: "3em",
              marginRight: "3em",
            }}
          >
            Signing up or login to see our top picks for you
          </div>
          <Button style={{ marginTop: "auto" }} block>
            <i style={{ float: "left" }} class="bi bi-facebook"></i>
            Continue with Facebook
          </Button>
          <Button block>
            <i style={{ float: "left" }} class="bi bi-google"></i>
            Continue with Google
          </Button>
          <Button style={{ marginBottom: "3em" }} block>
            <i style={{ float: "left" }} class="bi bi-envelope"></i>
            Sign in with email
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
