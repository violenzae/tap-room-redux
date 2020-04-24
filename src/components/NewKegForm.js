import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {

  const formStyle = {
    paddingTop: '50px',
    width: '60%' 
  }

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, pints: 124, id: v4()});

    }
  

  return (
    <React.Fragment>
      <h1>Add a new keg</h1>
      <div className='form-group' style={formStyle}> 
        <form onSubmit={handleNewKegFormSubmission}>
        <label for="name">name</label>
          <input className="form-control"
            type='text'
            name='name'
            placeholder='name' /><br/>
          <label for="brand">brand</label>  
          <input className="form-control"
            type='text'
            name='brand'
            placeholder='brand' /><br/>
          <label for="price per pint">price per pint</label>  
          <input className="form-control"
            type='number'
            name='price'
            placeholder='price per pint' /><br/>
          <label for="alcohol content">alcohol content</label>  
          <input className="form-control"
            type='number'
            name='alcoholContent'
            placeholder='% alcohol content' /><br/>
          {/* <input className="form-control"
            type='hidden'
            name='pints'
            value='124' />     */}

          <button type='submit'>add</button>
        </form>
        <br/>
      </div>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
