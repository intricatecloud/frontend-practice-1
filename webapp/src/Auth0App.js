import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import { Button, Container, Row, Col, Image } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

function SignedIn(props) {
  return (
    <div>
      <Container style={{ textAlign: "center" }}>
        <Row>
          <Col>
            <Image
              width={80}
              height={80}
              src={props.user.picture}
              roundedCircle
            />
            <div>{props.user.name}</div>
            <div>{props.user.email}</div>
            <div>{props.idToken}</div>
            <Button variant="warning" onClick={props.onLogoutClicked}>
              Logout
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

function App() {
  const {
    loginWithRedirect,
    user,
    isAuthenticated,
    getIdTokenClaims,
    logout,
  } = useAuth0();
  const [tokenClaims, setTokenClaims] = useState(null);

  const onSignInClicked = () => {
    console.log("sign in clicked");
    loginWithRedirect();
  };
  if (isAuthenticated) {
    getIdTokenClaims().then((tokenClaims) => {
      console.log(tokenClaims);
    });
    return (
      <SignedIn
        user={user}
        idToken={tokenClaims}
        onLogoutClicked={() => logout()}
      />
    );
  } else {
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
              <i style={{ float: "left" }} className="bi bi-facebook"></i>
              Continue with Facebook
            </Button>
            <Button block>
              <i style={{ float: "left" }} className="bi bi-google"></i>
              Continue with Google
            </Button>
            <Button
              style={{ marginBottom: "3em" }}
              onClick={() => onSignInClicked()}
              block
            >
              <i style={{ float: "left" }} className="bi bi-envelope"></i>
              Sign in with email
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
