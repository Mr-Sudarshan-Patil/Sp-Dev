import React from 'react'
import Resume from '/Resume.pdf'

function Download() {
  return (
    <div>
      <a href={Resume} download={Resume}>
      <button className=' bg-pink-700 text-white pt-1 pb-1 pr-6 pl-6 rounded-full text-md font-normal fixed bottom-5 right-4 z-40' >Resume / CV</button></a>
    </div>
  )
}

export default Download
