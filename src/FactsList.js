import React, { useEffect, useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './FactsList.css'

const FactsList = () => {
    const [facts, editFacts] = useState(null)
    const navigate=useNavigate()

    const onEdit=(userId,id)=>{
        navigate("facts/edit/"+userId+"/"+id)
    }

    useEffect(() => {
        fetch("http://localhost:8000/factsList")
            .then(res => res.json())
            .then(data =>{
                console.log(data) 
                editFacts(data)})
            .catch(err => console.log(err))
    },[])
    return (

        <div className="container">

            <div className='card'>
                <div className='card-title card-title-1'>
                    <h2 className='list-main-name'>Dashboard</h2>
                    <button className='list-main-btn'><Link className='facts-list-knowmore-btn' to='facts/create'>Create New Post</Link></button>

                </div>
                <div className='card-body'>
                    <table className='table table-bordered list-table'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <td className='list-table-head-text'>User id</td>
                                <td className='list-table-head-text'>id</td>
                                <td className='list-table-head-text'>title</td>
                                <td className='list-table-head-text'>action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {facts && facts.map((obj) => 
                            <tr className='facts-list-table-body-data' key={obj.id}>
                                <td><p>{obj.user_id}</p></td>
                                <td><p>{obj.id}</p></td>
                                <td><p>{obj.title}</p></td>
                                <td><button className="list-main-btn"><a className='facts-list-knowmore-btn' onClick={()=>{onEdit(obj.user_id,obj.id)}}>know More</a></button> </td>
                            </tr>)}
                            

                        </tbody>
                    </table>
                </div>
            </div>
        </div>


    )
}

export default FactsList