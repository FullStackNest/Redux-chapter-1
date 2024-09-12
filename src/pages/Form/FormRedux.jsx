import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {formFillUp} from '../../redux/formSlice'

const languages = ['HTML' , 'CSS' , 'Javascript']


const FormRedux = () => {
 
    const formData = useSelector((state) => state.form.formData)
    const dispatch = useDispatch()

     const handleSubmit = () => {
        console.log(formData)
     }

     const handleForm = (e) => {
        const{name , value} = e.target 
        dispatch(formFillUp({name , value}))
     }


  
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={handleForm}
        name="username"
      />

      <input
        type="password"
        placeholder="Enter your password"
        onChange={handleForm}
        name="password"
      />

      {languages.map((item) => (
        <Fragment key={item}>
          <input type="checkbox" onChange={handleForm} name='languagues' value={item}/>{item}
        </Fragment>
      ))}
    
      <button className="btn btn-success" onClick={handleSubmit}>
        Submit
      </button>

      
    </>
  );
};

export default FormRedux;
