import React from 'react';
import './Form.css';
import img2 from './img/img-3.svg'


const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Seu cadastro foi realizado com sucesso!</h1>
      <img className='form-img-2' src={img2} alt='success' />
    </div>
  );
};

export default FormSuccess;
