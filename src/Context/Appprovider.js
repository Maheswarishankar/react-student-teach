
import React from 'react'
import { createContext, useContext, useState } from 'react';
import { data } from '../Data/data';
import { TeacherData } from '../Data/TeacherData';

//step 1 create a context
const AppContext = createContext();

const Appprovider = ({ children }) => {
    const [students, setStudents] = useState(data);
    const [teacher, setTeacher] = useState(TeacherData)

    // step 2 create provider subcriber model
    return (
        <AppContext.Provider
            value={{
                students,
                setStudents,
                teacher,
                setTeacher

            }}>
            {children}
        </AppContext.Provider>
    )
}
// step 3 use the context

export const Appstate = () => {
    return useContext(AppContext)
}
export default Appprovider