import React from 'react'

export const Input = ({input, register, errors }) => {
   
    if(input.type !== 'select' && input.type !== 'submit'){
        let name = input.name;
        if(input.type === 'checkbox'){
            return(
                <div>
                <label htmlFor={""+input.name}>
                    {""+input.label}
                </label>
                <input 
                    className='custom-control custom-checkbox'
                    placeholder={""+input.label} 
                    type={""+input.type} 
                    {...register(name+"", {
                        required: input.required
                    })}
                >
                </input>
                {(errors[input.name]?.type === 'required' && (
                            <span className="text-danger">
                                Debes completar éste campo.
                            </span>))}
            </div>
            )
        }
        let err = input.type === 'text' ? /[a-zA-Z\s:]/ : input.type === 'email' ? /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/ : null; 
        return(
            <div>
                <label htmlFor={""+input.name}>
                    {""+input.label}
                </label>
                <input 
                    className='form-control'
                    placeholder={""+input.label} 
                    type={""+input.type} 
                    {...register(name+"", {
                        required: input.required,
                        pattern: err,
                        minLength: 2
                    })}
                >
                </input>
                {(errors[input.name]?.type === 'required' && (
                            <span className="text-danger">
                                Debes completar éste campo.
                            </span>
                            )
                            ||
                    errors[input.name]?.type === 'pattern' && (
                        <span className="text-danger">
                            Ingresa correctamente los datos.
                        </span>
                        )
                        ||
                    errors[input.name]?.type === 'minLength' && (
                        <span className="text-danger">
                            Ingresa la información completa, por favor.
                        </span>
                        )
                            )}
            </div>
        )
    }
    if(input.type === 'select' && input.type !== 'submit'){
        let name = input.name;
        return(
            <div>
                <label htmlFor={""+input.name}>
                    {""+input.label}
                </label>
                <select
                    className='my-select selectpicker'
                    {...register(name+"", {
                        required: input.required,
                        minLength: 2
                    })}
                >
                <option value="" >País...</option>
                    {
                        input.options?.map((option)=>{
                            return(
                                <option 
                                    key={option.label} 
                                    value={option.value}
                                >
                                    {option.label}
                                </option>
                            )
                        })
                    }
                </select>
                {(errors[input.name]?.type === 'required' && (
                            <span className="text-danger">
                                Debes completar éste campo.
                            </span>
                            )
                            ||
                    errors[input.name]?.type === 'minLength' && (
                        <span className="text-danger">
                            Debes completar éste campo.
                        </span>
                        )
                    )}
            </div>
        );
    };
    if(input.type === 'submit'){
        return(
        <button type='submit' className={`btn btn-success`}>
            {input.label+""}
        </button>
        )
    }
};
