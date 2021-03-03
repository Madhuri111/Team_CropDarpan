import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { loginViaGoogle } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    await loginViaGoogle()
    history.push("/")
  
  }

  return (
    <>
      <Card class="centered">
        <Card.Body>
          <h2 className="text-center mb-4">Login with Google</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit} class="split left">
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" style={{backgroundColor:"green"}} type="submit">
              <b>Login</b>
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
	  <Link to="/forgot-password"><small class="text-muted">Forgot Password?</small></Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2" class="split right">
      <div class="centered">
        <p style={{color: "green"}}>Need an account?</p>
	<Button className="w-100" style={{backgroundColor:"green"}}><Link to="/signup"><medium class="text-white"><b>Sign up</b></medium></Link></Button>
      </div></div>
    </>
  )
}
