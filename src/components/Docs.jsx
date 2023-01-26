import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import {collection, getDocs} from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

export const Docs = () => {
    const [posts, setPosts] = useState([]);

    const postsCollection = collection(db, 'posts');

    const getPost = async()=>{
        const data = await getDocs(postsCollection);
        setPosts(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
    }
    useEffect(()=>{
        getPost()
    },[])

  return (
    <div className='docsContainer'>
        <div class="container table-responsive py-5">
            <table class="table table-bordered table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Email</th>
                        <th scope="col">Cumpleaños</th>
                        <th scope="col">País</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    posts && posts?.map((post, index)=>{
                        return(
                            <tr key={post.full_name+index}>
                                <th scope="row">{post.full_name}</th>
                                <td>{post.email}</td>
                                <td>{post.birth_date}</td>
                                <td>{post.country_of_origin}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    <div>
        <button className='btn btn-outline-primary'>
            <Link
                exact='true' 
                to={"/"}
                style={{textDecoration:'none'}}
            >
                Ir al formulario!
            </Link>
        </button>
    </div>
    </div>

  )
}
