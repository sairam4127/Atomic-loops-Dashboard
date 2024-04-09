import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './FactsCreate.css'

const FactsCreate = () => {
    const useridref = useRef(null)
    const idref = useRef(null)
    const titleref = useRef()
    const bodyref = useRef()

    const [err, updateerr] = useState(null)
    const navigate = useNavigate()

    const onClicked = () => {
        const userIdInputValue = parseInt(useridref.current.value);
        const idInputValue = parseInt(idref.current.value);
        const titleInputValue = titleref.current.value
        const bodyInputValue = bodyref.current.value

        if (userIdInputValue && idInputValue && titleInputValue && bodyInputValue) {
            const newObj = {
                "user_id": userIdInputValue,
                "id": idInputValue,
                "title": titleInputValue,
                "body": bodyInputValue
            }
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newObj)
            }
            fetch('http://localhost:8000/factsList', options)
                .then(res => {
                    alert('created')
                    navigate('/')
                })
                .catch(err => {
                    console.log(err)
                })
        }
        else {
            updateerr('Please fill all the required details')
        }
    }

    return (
        <div>
            <div className="container">

                <div className='card'>
                    <div className='card-title card-title-1'>
                        <h2 className='list-main-name'>Dashboard</h2>
                        <button className='list-main-btn' onClick={onClicked}>Create New Post</button>

                    </div>
                    <div className='card-body'>
                        <h1 className='create-new-post-h1'>Create New Post</h1>
                        {err && <h1 className='create-new-post-err'>{err}</h1>}
                        <div className='col-lg-12 facts-create-user-id-input-cont'>
                            <label htmlFor='facts-create-userid-id'>UserId:</label>
                            <input type='text' className='facts-create-user-id-input-ele' id='facts-create-userid-id' ref={useridref} />
                        </div>
                        <div className='col-lg-12 facts-create-user-id-input-cont'>
                            <label htmlFor='facts-create-id-id'>id:</label>
                            <input type='text' className='facts-create-user-id-input-ele' id='facts-create-id-id' ref={idref} />
                        </div><div className='col-lg-12 facts-create-user-id-input-cont'>
                            <label htmlFor='facts-create-title-id'>title:</label>
                            <input type='text' className='facts-create-user-id-input-ele' id='facts-create-title-id' ref={titleref} />
                        </div>
                        <div className='col-lg-12 facts-create-user-id-input-cont'>
                            <label htmlFor='facts-create-body-id'>body:</label>
                            <input type='text' className='facts-create-user-id-input-ele' id='facts-create-body-id' ref={bodyref} />
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default FactsCreate