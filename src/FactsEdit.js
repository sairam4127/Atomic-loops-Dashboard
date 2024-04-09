import React, { useEffect, useState } from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import './FactsEdit.css'

const FactsEdit = () => {
    const {userid,id}=useParams()
    const [facts,updFacts]=useState({})

    const navigate=useNavigate()

    const onClicked=()=>{
navigate('/facts/create')
    }


    useEffect(()=>{
        fetch(`http://localhost:8000/factsList?user_id=${userid}&id=${id}`)
            .then(res => res.json())
            .then(data =>{console.log(data)
                
                updFacts(data[0])
            })
            .catch(err => console.log(err))
    },[])

  return (
    <div>
            <div className="container">

                <div className='card'>
                    <div className='card-title card-title-1'>
                        <h2 className='list-main-name'>Dashboard</h2>
                        <button className='list-main-btn' onClick={onClicked}>Create New Post</button>

                    </div>
                    <div className='card-body'>
                    <h1 className='create-new-post-h1'>View Details</h1>
                    
                    <div className='col-lg-12 facts-create-user-id-input-cont'>
                            <label htmlFor='facts-create-userid-id'>UserId:</label>
                            <input type='text' className='facts-create-user-id-input-ele facts-edit-input-ele' id='facts-create-userid-id'  value={facts.user_id}/>
                        </div>
                        <div className='col-lg-12 facts-create-user-id-input-cont'>
                            <label htmlFor='facts-create-id-id'>id:</label>
                            <input type='text' className='facts-create-user-id-input-ele' id='facts-create-id-id'  value={facts.id}/>
                        </div>
                        <div className='col-lg-12 facts-create-user-id-input-cont'>
                            <label htmlFor='facts-create-title-id'>title:</label>
                            <p className='facts-edit-para-ele'>{facts.title}</p>
                        </div>
                        <div className='col-lg-12 facts-create-user-id-input-cont'>
                            <label htmlFor='facts-create-title-id'>body:</label>
                            
                            <p className='facts-edit-para-ele'>{facts.body}</p>
                        </div>
                        <div className='facts-edit-save-btn-cont'> <button className='list-main-btn' >Save</button></div>

                       
                    </div>
                </div>
            </div>


        </div>
  )
}

export default FactsEdit