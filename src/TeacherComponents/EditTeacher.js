import { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import BaseApp from '../Core/BaseApp'
import { useHistory, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { Appstate } from '../Context/Appprovider'

function EditTeacher() {
  const {teacher,setTeacher} = Appstate();
  const [idx, setidx] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");  
  const [sessionTimings, setsessionTimings] = useState("");

  const { id } = useParams()
  const history = useHistory()

  // console.log(id)
  const selectedUser = teacher.find((per) => per.id === id);
  // console.log(selectedUser.id);

  useEffect(() => {
    setidx(selectedUser.id);
    setName(selectedUser.name);
    setEmail(selectedUser.email);    
    setsessionTimings(selectedUser.sessionTimings);

  },[]);
  const updateUser = () => {
    const editIndex = teacher.findIndex(per => per.id === id)
    // console.log(editIndex);
    const editedData = {
      id: idx,
      name,
      email,      
      sessionTimings
    }
    //   console.log(editedData);
    teacher[editIndex] = editedData;
    setTeacher([...teacher]);
    history.push("/teacher");
  }

  return (
    <div>
      <BaseApp
        title="Edit Teacher Details"
        >
        <div className='Editform'>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>ID</Form.Label>
              <Form.Control type="text" placeholder="Enter Name"
                value={idx}
                onChange={(event) => setidx(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Session Timmings</Form.Label>
              <Form.Select defaultValue={sessionTimings} onChange={(event) => setsessionTimings(event.target.value)}>
                <option value="0" disabled>Session Timmings</option>
                <option value="10am-12pm">10am-12pm</option>
                <option value="12pm-2pm">12pm-2pm</option>
                <option value="2pm-4pm">2pm-4pm</option>
                <option value="4pm-6pm">4pm-6pm</option>
              </Form.Select>
            </Form.Group>

            <Button className='Editsubmit' variant="primary"
              onClick={updateUser}>Edit Teacher data</Button>
          </Form>
        </div>
      </BaseApp>
    </div>
  )
}


export default EditTeacher