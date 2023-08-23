import React from 'react'

const sacs = ({ data }) => {
    return (
        <div className=''>
            <div className=" mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                <img className="h-48 w-full object-cover object-center" src={data.image}  />
           
                <div className="p-4">
                    <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900"> <a href = {"detail/" + data.id}>{data.nom}</a></h2>
                    <div className="flex items-center">
                        <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">{data.prix}€</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default sacs