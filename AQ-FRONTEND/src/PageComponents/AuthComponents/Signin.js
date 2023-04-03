import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import userServiceOperations from "../../services/user";
import {FiCheck} from "react-icons/fi"

const AquaSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { userLogin } = userServiceOperations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      setError(true);
    } else {
      setLoading(true);
      userLogin({ email: email, password: password }).then((data) => {
        setLoading(setInterval(false, 5000));
        console.log("user", data.data);
        setSuccess(true);
      });
    }
  };
  return (
    <>
      {success ? (
        <div className="text-success text-center">
          <FiCheck size={200}/>
          <h5>Successfully Logged in</h5>
        </div>
      ) : (
        <>
          {error ? (
            <Alert variant="danger" onClose={() => setError(false)} dismissible>
              <Alert.Heading>Please fill your details.</Alert.Heading>
            </Alert>
          ) : (
            <div />
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        </>
      )}
    </>
  );
};
export default AquaSignin;
