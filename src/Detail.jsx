import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { firestore } from './firebase';
import { doc, getDoc } from 'firebase/firestore' ;
import Loading from './common/Loading';


const Detail = () => {

    let { idSac } = useParams();
    console.log("idSac :", idSac)

    const [sac, setSac] = useState([]);
    const [loading, setLoading] = useState(false);


    const getOneSac = async () => {
        setLoading(true);
        const rqSac = doc(firestore, "sac" , idSac);
        const snapSac = await getDoc(rqSac);

        if (!snapSac.exists) {
            setSac(snapSac.data()) ;

            setLoading(false);
        }
    } 

    useEffect(() => {
        getOneSac()

    }, [])


    return (
        <div>
            detail
            <img
            src= {sac.nom}
            alt = {sac.nom}
            />
        </div>
    )
}

export default Detail