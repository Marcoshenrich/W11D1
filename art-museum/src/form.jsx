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
        signup: false
    })

    const [checkbox, setCheckbox] = useState(false)

    const [errors, setErrors] = useState([])

    const validate = () => { 
        let errors = [];
        return errors;
    }

    const handleChange = (incomingKey) => { 
        return e => { 
            const newObj = Object.assign({}, user, {[incomingKey]: e.target.value})
            console.log(e.target.value)
            console.log("before " + user.signup)
            setUser(newObj)
            console.log("after " + user.signup)
        }
    }

    const handleSubmit= (e) => { 

        const newObj = Object.assign({}, user, {"signup": checkbox})
        setUser(newObj)
        console.log(user)

        e.preventDefault()
        let errors = validate()
        if (errors.length) {
            //code that submits
            setErrors(errors)
        } else { 
            setUser({
                name: "",
                email: "",
                password: "",
                phoneNumber: "",
                phoneType: "",
                role: "",
                bio: "",
                signup: ""
            });
            setErrors([]);
        }
    }

    return (
       
        <>
        <form onSubmit={handleSubmit}>
            <label>Name
                <input type="text" value={user.name} onChange={handleChange("name")} />
            </label>

            <label>Email
                    <input type="text" value={user.email} onChange={handleChange("email")} />
            </label>

            <label>Phone Number
                    <input type="text" value={user.phoneNumber} onChange={handleChange("phoneNumber")} />
            </label>

            <label>Phone Type
                <select onChange={handleChange("phoneType")}>
                <option selected ="selected" disabled>choose one</option>
                <option value="home">home</option>
                <option value="work">work</option>
                <option value="mobile">mobile</option>
                </select>
            </label>

            <label>Student
                    <input type="radio" name="student" value="student" onChange={handleChange("role")} checked={user.role === 'student'} />
            </label>
            <label>Instructor
                    <input type="radio" name="instructor" value="instructor" onChange={handleChange("role")} checked={user.role === 'instructor'}  />
            </label>

            <label>Get Notifications
                    <input type="checkbox" name="signup" onChange={()=> setCheckbox(!checkbox)} value={user.signup} defaultChecked={false} />
            </label>
            <button>submit</button>
        </form>
        </>
    )
}

export default Form