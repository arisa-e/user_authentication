import React, { useState } from 'react'
import { useRef } from "react"
import { Button, Card, Form, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../AuthContext'

const Update = () => {
  const emailRef = useRef()
  const passwordRef =useRef()
  const reEnteredPasswordRef=useRef()
  const { currentUser, updatedEmail, updatedPassword }=useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate =useNavigate()



  function handleSubmit(e){
    e.preventDefault()

    if(passwordRef.current.value !== 
      reEnteredPasswordRef.current.value){
        return setError("Passwords do not match")
      }

      const promises=[]
      setLoading(true)
      setError("")

      if (emailRef.current.value !== currentUser.email){
        promises.push(updatedEmail(emailRef.current.value))
      }
      if (passwordRef.current.value){
        promises.push(updatedPassword(passwordRef.current.value))
      }
      
      Promise.all(promises).then(()=>{
        navigate("/landing")
      }).catch(()=>{
        setError("Failed to Update")
      }).finally(()=>{
        setLoading(false)
      })

  }
  return (
    <>
      <Card>
        <Card.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          <h2 className="text-center mb-4">Update Profile</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required
              defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} 
              placeholder="leave blank if not changing"
              />
            </Form.Group>
            <Form.Group id="reEnterPassword">
              <Form.Label>Re Enter Password</Form.Label>
              <Form.Control type="password" ref={reEnteredPasswordRef} 
              placeholder="leave blank if not changing"
              />
            </Form.Group>
            <Button type="submit" 
            className="w-100"
            style={{marginTop:10}} 
            disabled={loading}
            >Update</Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/landing">Back Home</Link>
      </div>
    </>
  )
}

export default Update