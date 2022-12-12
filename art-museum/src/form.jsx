import userEvent from '@testing-library/user-event'
import React, { useEffect, useState } from 'react'

function Form(props) {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        phoneType: "",
        role: "",
        bio: "",
        signup: ""
    })

    return (
        <>
            <label>Name
                <input type="text" value={user.name} />
            </label>

            <label>Email
                <input type="text" value={user.email} />
            </label>

            <label>Phone Number
                <input type="text" value={user.phoneNumber} />
            </label>

            <label>Phone Type
                <select value={user.phoneType}>
                <option selected="selected" value="home">home</option>
                <option value="work">work</option>
                <option value="mobile">mobile</option>
                </select>
            </label>

            <label>Student
                <input type="radio" name="student" value="student" value={user.role} />
            </label>
            <label>Instructor
                <input type="radio" name="instructor" value="instructor" value={user.role} />
            </label>

            <label>Get Notifications

            </label>


        </>
    )
}

export default Form