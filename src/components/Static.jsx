import React from 'react'

function Static() {
  return (
    <>
        <div className=" p-4 bg-white rounded-lg md:p-8" id="stats" role="tabpanel" aria-labelledby="stats-tab">
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto sm:grid-cols-3 xl:grid-cols-3 sm:p-8">
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-2xl font-semibold">150+</dt>
                    <dd className="text-gray-500 text-center">Web Surveys</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-2xl font-semibold">48</dt>
                    <dd className="text-gray-500 text-center">Leading Surveys</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-2xl font-semibold ">10+</dt>
                    <dd className="text-gray-500 text-center">Web Projects <br/> &#40;Mini and Major&#41;</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-2xl font-semibold">35+</dt>
                    <dd className="text-gray-500 text-center">Public Repository</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-2xl font-semibold">2</dt>
                    <dd className="text-gray-500 text-center">Patents</dd>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-2xl font-semibold">6</dt>
                    <dd className="text-gray-500 text-center">IOT Projects</dd>
                </div>
            </dl>
        </div>
    </>
  )
}

export default Static
