import React from 'react'
import BaseApp from '../Core/BaseApp'
import { Button } from 'react-bootstrap'
import {Table} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Appstate } from '../Context/Appprovider';

function TeachUsercomponents() {
    const {teacher,setTeacher}=Appstate();
    const history = useHistory();
  
    const deleteUser = (idx) => {
      const alterList = teacher.filter((per) => per.id !== idx)
      console.log(alterList)
      setTeacher(alterList)
    }
  return (
    <div>
        <BaseApp
        title="Teacher Data"       
        >
        <div className='user-content'>
          <div className=' table-responsive text-center' >
            <Table striped bordered hover>
              <thead className='thead text-white'>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>                  
                  <th>SessionTimings</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>                
                {
                  teacher &&(
                
                teacher?.map((person, idx) => {
                  return <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{person.name}</td>
                    <td>{person.email}</td>                   
                    <td>{person.sessionTimings}</td>
                    <td>
                      <div>
                        <Button variant="info" className='viewbtn'
                          onClick={() => history.push(`/viewteacher/${idx}`)}>View</Button>&nbsp;&nbsp;&nbsp;&nbsp;

                        <Button variant="secondary"
                          onClick={() => history.push(`/editteacher/${person.id}`)}
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
                        <Button variant="dark" onClick={() => history.push("/add/teacher")}>Create New Teacher</Button>&nbsp;&nbsp;&nbsp;&nbsp;                        
                    </div>
            
          </div>
        </div>
      </BaseApp>
    </div>
  )
}

export default TeachUsercomponents