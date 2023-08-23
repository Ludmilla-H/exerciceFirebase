import React, { useEffect, useState } from 'react'
import { firestore } from './firebase';
import {query , getDocs , collection } from 'firebase/firestore'
import Loading from './common/Loading';
import Sacs from './common/sacs';

const Liste = () => {

    const [sacs, setSacs] = useState([]) ;
    const [loading, setLoading] = useState(false) ;

    const getAllSac = async () => { 
        console.log("start")
        setLoading(true)
        const rqSacs = query(collection(firestore , "sacs")) ;
        const snapSacs = await getDocs(rqSacs) ;

        if (!snapSacs.empty) {
            const tempData = snapSacs.docs.map(itemSacs => {

                return {id:itemSacs.id,
                        ...itemSacs.data()}

            });

            console.log("tempData :" , tempData)

        setSacs(tempData) ;
        setLoading(false)

        }
    }

    useEffect(()=> {
        getAllSac()

    },[])


  return (
    <div>Liste
        {
        loading ? <Loading/> :
        sacs.map(itemSacs => <Sacs key = {itemSacs.id}
                                    data = {itemSacs}/>
            )}
    </div>
  )
}

export default Liste