import React from 'react'
import { useState } from "react"
import { Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from "./AuthContext"
import { Link, useNavigate } from "react-router-dom"

const Landing = () => {

  const [error, setError] = useState("")
  const { currentUser, logout }=useAuth()
  const navigate = useNavigate()

  async function handleLogout(){
    try{
      setError("")
      await logout()
      navigate("/")

    }catch(err){
      err(err.message)
    }
  }

  return (
    <>
      <Card>
      {error && <Alert variant="danger">{error}</Alert>}
      <h2 className="text-center mb-4">Profile</h2>
      <strong>Email:</strong>{currentUser.email}
      <Link to ="/update" className="btn btn-primary w-100 mt-3">Update</Link>
        
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link"onClick={handleLogout}>Logout</Button>  
      </div>
    </>
  )
}

export default Landing