import { useState } from "react";
import {Spinner ,Alert , Form , Button} from "react-bootstrap";
import userServiceOperations from "../../services/user";
import {FiCheck} from "react-icons/fi"

const AquaSignin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage , setErrorMessage] = useState("")
  const [success, setSuccess] = useState(false);

  const { userLogin } = userServiceOperations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      setError(true);
      setErrorMessage("please fill details")
    } else {
      setLoading(true);
      userLogin({ email: email, password: password })
      .then((data) => {
        localStorage.setItem("user", data.data)
        setLoading(setTimeout(3000 ,false))
        setSuccess(true)
        // setLoading(setInterval(false, 5000));
        // localStorage.setItem("user" , JSON.parse(data.data))
        // console.log("user", data.data);
        // setSuccess(true);
      })
      .catch(()=>{
        setError(true)
        setErrorMessage("please fill valid details")
      })
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
              <Alert.Heading>{errorMessage}</Alert.Heading>
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
            <Button variant="link">Don't have an Account..?</Button>
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit">
                {loading?(
                  <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
                ) : (
                  <h4>Login</h4>
                )}
              </Button>
            </div>
          </Form>
        </>
      )}
    </>
  );
};
export default AquaSignin;
