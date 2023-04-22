import React from 'react'
import BaseApp from '../Core/BaseApp'
import { Table } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Appstate } from '../Context/Appprovider'

function TeacherDetails() {
    const {teacher} = Appstate();
    const { id } = useParams()
    console.log(id)
    const person = teacher[id]
    return (
        <div>
            <BaseApp
                title="Teacher Details"
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
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{person.id}</td>
                                    <td>{person.name}</td>
                                    <td>{person.email}</td>                                    
                                    <td>{person.sessionTimings}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
            </BaseApp>
        </div>
    )
}

export default TeacherDetails