import React, { useEffect, useState } from 'react'
import { firestore } from '../config/firebase'
import { collection, deleteDoc, getDocs, doc } from 'firebase/firestore/lite'
import { useGlobalContext } from '../context';

const Read = () => {
    const [documents, setDocuments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const collectionName = 'users'
    const collectionRef = collection(firestore, collectionName);

    const { showAlert } = useGlobalContext();

    const readDocs = async () => {
        let array = [];

        const querySnapshot = await getDocs(collectionRef);
        querySnapshot.forEach(docs => {
            array.push({ ...docs.data(), id: docs.id });
        });
        setDocuments(array);
        setIsLoading(false);
    }

    useEffect(() => {
        readDocs();
    }, [])

    // Function for deleting documents
    const deleteDocument = async (document) => {
        try {

            await deleteDoc(doc(firestore, collectionName, document.id));

            showAlert('success', 'User has been deleted successfully');

            let newArray = documents.filter((doc) => {
                return document.id !== doc.id;
            })

            setDocuments(newArray);

        } catch (error) {
            console.log(error);
            showAlert('error', 'User is not deleted! Please Try Again.')
        }

    }

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
                                <div className="spinner-grow text-white" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            : <>
                                {
                                    documents.map((doc) => {
                                        return <p key={doc.id} className="text-white text-center" >FullName: {doc.name} || Age: {doc.age} <button className='btn btn-primary' onClick={() => deleteDocument(doc)}>delete</button></p>
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