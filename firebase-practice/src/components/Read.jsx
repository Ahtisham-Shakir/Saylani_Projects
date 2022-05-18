import React, { useEffect, useState } from 'react'
import { firestore } from '../config/firebase'
import { collection, deleteDoc, getDocs, doc, onSnapshot } from 'firebase/firestore'
import { useGlobalContext } from '../context';

const Read = () => {
    const [documents, setDocuments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const collectionName = 'users'
    const collectionRef = collection(firestore, collectionName);

    const { showAlert } = useGlobalContext();


    useEffect(() => {
        // This function runs only one time we have to reload to fetch latest users
        const readDocs = async () => {
            let array = [];

            const querySnapshot = await getDocs(collectionRef);
            querySnapshot.forEach(docs => {
                array.push({ ...docs.data(), id: docs.id });
            });
            setDocuments(array);
            setIsLoading(false);
        }

        readDocs();
    }, [collectionRef])

    // When ever collection in the firebase change this function runs automatically and set documents state to the lates one. So we don't have to re to fetch latest users
    onSnapshot(collectionRef, (snapshot) => {
        let array = [];
        snapshot.docs.forEach((doc) => {
            array.push({ ...doc.data(), id: doc.id })
        })
        setDocuments(array);

    })

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