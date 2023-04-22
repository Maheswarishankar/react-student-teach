
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import BaseApp from '../Core/BaseApp';
import { useHistory } from 'react-router-dom';
import { Appstate } from '../Context/Appprovider';

export default function AddTeacher() {
    const {teacher,setTeacher}=Appstate();
    const history = useHistory()
    const [id, setid] = useState("")
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");   
    const [sessionTimings, setsessionTimings] = useState("");

    const addNewTeacher = () => {
        const newUser = {
            id,
            name,
            email,           
            sessionTimings
        }
        console.log(newUser);
        setTeacher([...teacher, newUser])
        history.push('/teacher')
        setid("");
        setName("");
        setEmail("");
        setsessionTimings("");
    }
    return (

        <BaseApp
            title="Add A New Teacher"
            >
            <div className='Addform'>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name"
                            value={id}
                            onChange={(event) => setid(event.target.value)}
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
                        <Form.Select defaultValue={"0"} onChange={(event) => setsessionTimings(event.target.value)}>
                            <option value="0" disabled>Session Timmings</option>
                            <option value="10am-12pm">10am-12pm</option>
                            <option value="12pm-2pm">12pm-2pm</option>
                            <option value="2pm-4pm">2pm-4pm</option>
                            <option value="4pm-6pm">4pm-6pm</option>
                        </Form.Select>
                    </Form.Group>

                    <Button className='Addsubmit' variant="primary" onClick={addNewTeacher} >Add New Teacher</Button>
                </Form>
            </div>
        </BaseApp>
    )
}
