import React, { useState } from 'react'
import { useRef } from "react"
import { Button, Card, Form, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../AuthContext'

const ForgotPassword = () => {
  const emailRef = useRef()
  const { reset }=useAuth()
  const [error, setError] = useState("")
  const [text, setText]=useState("")
  const [loading, setLoading] = useState(false)


  async function handleSubmit(e){
    e.preventDefault()

    
      
      try{
          setText("")
        setError("")
        setLoading(true)
        await reset(emailRef.current.value)
        setText("Check your Email")
      }
      
      catch (err){
        setError(err.message)
      }

      setLoading(false)
  }
  return (
    <>
      <Card>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {text && <Alert variant="success">{text}</Alert>}
          <h2 className="text-center mb-4">Reset Password</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required/>
            </Form.Group>
            <Button type="submit" 
            className="w-100"
            style={{marginTop:10}} 
            disabled={loading}
            >Reset</Button>
            <Link to="/">Sign in</Link>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Have an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}

export default ForgotPassword