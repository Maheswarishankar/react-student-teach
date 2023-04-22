import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function BaseApp({ title, children}) {
    const history = useHistory()

    return (
        <div>
            <div>
                <nav className='nav-styles'>
                    <div className='nav-buttons'>
                        <span>
                            <Button variant='dark'
                                onClick={() => history.push("/home")}>
                                Home
                            </Button>
                        </span>

                        <span>
                            <Button variant='dark'
                                onClick={() => history.push("/students")}>
                                Students
                            </Button>
                        </span>

                        <span>
                            <Button variant='dark'
                                onClick={() => history.push("/teacher")}>
                                Teacher
                            </Button>
                        </span>
                    </div>
                </nav>
            </div>

            <div className='title'>
                <div className={title}>{title}</div>
            </div>

            <div className='children'>
                {children}
            </div>

            <footer >
                <p>Copyright © Your Website 2023</p>
            </footer>
        </div>

    )
}

export default BaseApp