import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import {useFetch} from '../customHooks/useFetch.js';
import { Input } from './Input.jsx';
import { postForm } from '../firebase/firebaseConfig.js' 
export const Form = () => {
    const {data, error, isLoading} = useFetch('db.json');
    const [btn, setBtn] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        fullname:'',
        email:'',
        birth_date:'',
        country_of_origin:'',
        terms_and_conditions:''
    });
    const onSubmit = async(data)=> {
        data = { ...data};
        let nombre = data.full_name;
        console.log(nombre)
        postForm(data, nombre);
        reset();
        setBtn(true)
        alert('Datos enviados!')
    }
  return (
    <div className='docsContainer'>
        <div className='container'>
            <div className='form-group'>
                <form onSubmit={handleSubmit(onSubmit)}>
                {
                    isLoading ?
                    <h1>Cargando...</h1>
                    :
                    error ?
                    <h2>Ups... Hubo un error.</h2>
                    :
                    data?.map((input, index)=>{
                        return <Input
                            key={input.name+index}
                            input={input}
                            require={input.require} 
                            register={register} 
                            errors={errors}
                        />
                    })
                }
                </form>
            </div>
        </div>
        <div>
            <button className={ btn ? 'btn btn-outline-primary' : 'buttonHidden'}>
                <Link
                    exact='true' 
                    to={"/table"}
                    style={{textDecoration:'none'}}
                >
                    Ver listado!
                </Link>
            </button>
        </div>
    </div>
  )
}
