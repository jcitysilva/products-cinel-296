import React from 'react'

function IdCard({ lastName, firstName, gender, height, birth, picture }) {

    height = (height / 100) + "m"
    birth = birth.toDateString()

    return (
        <div className='id-card'>
            <img src={picture} alt="" />
            <div className='info'>
                <div><strong>First name:</strong> {firstName}</div>
                <div><strong>Last name:</strong> {lastName}</div>
                <div><strong>Gender:</strong> {gender}</div>
                <div><strong>Height:</strong> {height}</div>
                <div><strong>Birth:</strong> {birth}</div>
            </div>
        </div>
    )
}

export default IdCard