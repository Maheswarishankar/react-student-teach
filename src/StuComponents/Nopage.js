
import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function Nopage() {
    const history = useHistory()
  return (
    <div className='text-center m-5'>
        <h1>Sorry! you Entered wrong page 404</h1>
        <h2>Pls click on this Home Page Button</h2><br/>
        <Button onClick={()=>history.push("/home")}>Home Page</Button>
    </div>
  )
}

export default Nopage