import { async } from '@firebase/util';
import React, { useState } from 'react'
import { firestore } from '../config/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore/lite';

const Add = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const collectionName = 'users';
    const collectionRef = collection(firestore,collectionName);

    const createDoc = async (e)=>{
        e.preventDefault();
        let userAge = Number(age);
        let formData = {name, age:userAge, dateCreated: serverTimestamp()}

        try {
            const docRef = await addDoc(collectionRef, formData);
            setAge('');
            setName('');
            console.log('data has been added');
            console.log("Document written with ID: ", docRef.id);
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <div className='d-flex justify-content-center align-items-center min-vh-50'>
    <div className="container">
        <div className="row">
            <div className="col">
                <h1 className='text-center text-white mt-5'>Add User</h1>
            </div>
        </div>
        <div className="row mt-3">
            <div className="col">
                <form onSubmit={createDoc}>
                    <div className="row">
                        <div className="col">
                            <input type="text" placeholder='Full Name' name='fullName' className='form-control' value={name} onChange={e =>{setName(e.target.value)}}/>
                        </div>
                        <div className="col">
                            <input type="number" placeholder='Age' name='age' className='form-control' value={age} onChange={e =>{setAge(e.target.value)}}  />
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col text-center">
                            <button className='btn btn-success'>Add User</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>

</div>
  )
}

export default Add