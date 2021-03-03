import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/SignInMethods")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <Card class="split left">
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
        <Button className="w-100" style={{backgroundColor:"green"}}><Link to="/update-profile"><medium class="text-white"><b>Update Profile</b></medium></Link></Button>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2" class="split right">
      <div class="centered">
	<p style={{color:"green"}}> Want to Logout?</p>
        <Button variant="link" onClick={handleLogout} style={{backgroundColor:"green",color:"white"}}>
         <b> Log Out</b>
        </Button>
      </div></div>
    </>
  )
}
