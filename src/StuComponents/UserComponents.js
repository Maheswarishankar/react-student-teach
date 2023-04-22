import React from 'react'
import BaseApp from '../Core/BaseApp'
import { Table } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { Appstate } from '../Context/Appprovider'

function Usercomponents() {
  const {students,setStudents}=Appstate();
  const history = useHistory();

  const deleteUser = (idx) => {
    const alterList = students.filter((per) => per.id !== idx)
    console.log(alterList)
    setStudents(alterList)
  }
  return (
    <div>
      <BaseApp
        title="Student Data"                   
        >          
        <div className='user-content'>
          <div className=' table-responsive text-center' >           
            <Table striped bordered hover>
              <thead className='thead text-white'>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Course</th>
                  <th>SessionTimings</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>                
                {
                  students &&(
                
                students?.map((person, idx) => {
                  return <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{person.name}</td>
                    <td>{person.email}</td>
                    <td>{person.course}</td>
                    <td>{person.sessionTimings}</td>
                    <td>
                      <div>
                        <Button variant="info" className='viewbtn'
                          onClick={() => history.push(`/user/${idx}`)}>View</Button>&nbsp;&nbsp;&nbsp;&nbsp;

                        <Button variant="secondary"
                          onClick={() => history.push(`/edit/${person.id}`)}
                        >Edit</Button>&nbsp;&nbsp;&nbsp;&nbsp;

                        <Button variant="danger" className='delebtn' onClick={() => deleteUser(person.id)} >Delete</Button>
                      </div>
                    </td>
                  </tr>
                }))
                }
              </tbody>
            </Table>
            <div className='newadd-btn'>                       
                        <Button variant="dark" onClick={() => history.push("/add/user")}>Create New Students</Button>&nbsp;&nbsp;&nbsp;&nbsp;                        
                    </div>
            
          </div>
        </div>
      </BaseApp>
    </div>
  )
}

export default Usercomponents