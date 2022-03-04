import React, { useState } from 'react'
import { useRef } from "react"
import { Button, Card, Form, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../context'

const SignUp = () => {
  const emailRef = useRef()
  const passwordRef=useRef()
  const {signin}=useAuth
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)


  async function handleSubmit(e){
    e.preventDefault()

    
      
      try{
        setError("")
        setLoading(true)
        await signin(emailRef.current.value, passwordRef.current.value)
      }
      
      catch{
        setError("Failed to create account")
      }

      setLoading(false)
  }
  return (
    <>
      <Card>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <h2 className="text-center mb-4">Sign In</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required/>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required/>
            </Form.Group>
            <Button type="submit" 
            className="w-100"
            style={{marginTop:10}} 
            // need refactering of the button when loading to disable 
            disabled={loading}
            >Sign Up</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}

export default SignUp