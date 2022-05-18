import React, { useEffect, useState } from 'react'
import { firestore } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore/lite'

const Read = () => {
    const [documents, setDocuments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const collectionName = 'users'
    const collectionRef = collection(firestore, collectionName);

    const readDocs = async()=>{
        let array = [];

        const querySnapshot = await getDocs(collectionRef);
        querySnapshot.forEach(docs => {
            array.push({...docs.data(), id:docs.id});
        });
        setDocuments(array);
        setIsLoading(false);
    }

    useEffect(()=>{
        readDocs();
    },[])
    
    return (
        <div className='d-flex justify-content-center align-items-center min-vh-100'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1 className='text-center text-white'>Read Users</h1>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                    {isLoading ?
                        <div className="text-center">
                            <div class="spinner-grow text-white" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        : <>
                            {
                                documents.map((doc) => {
                                    return <p key={doc.id} className="text-white text-center">FullName: {doc.name} || Age: {doc.age}</p>
                                })
                            }
                        </>
                    }
                </div>
            </div>
        </div>

    </div>
    )
}

export default Read