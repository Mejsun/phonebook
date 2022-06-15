import axios from 'axios'
import React from 'react'

function Profilepic() {
    const getToken = localStorage.getItem('token')

    function profilePicDefault (){
        axios.post('https://interview.intrinsiccloud.net/profile/profileImage', {
          headers: {
          Authorization: `Bearer ${getToken}`
         }
        })
          .then(res => {
            console.log(res.data)
          })
          .catch(err => {
            console.log(err.response)
          })
      }

  return (
    <div>
        <img src='#' alt='profilepic'></img>
        <button type='button' onClick={profilePicDefault}>img</button>

    </div>
  )
}

export default Profilepic