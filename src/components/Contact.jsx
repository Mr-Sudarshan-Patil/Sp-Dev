import React from 'react'

function Contact({ContactRef}) {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <p className='text-2xl font-semibold text-center' ref={ContactRef} style={{ paddingTop: '90px' }}>Contact</p>
    <div className=' h-[50vh] container mx-auto px-4 md:px-20 flex justify-center items-center mt-[-30px]'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-2xl font-normal text-center'>For any questions please mail us:</h1>
        <h3 className='text-xl font-normal'>mr.sudarsh@gmail.com</h3>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    </>

  )
}

export default Contact
