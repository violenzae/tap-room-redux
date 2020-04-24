import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';

function NewKegForm(props) {

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: event.target.alcoholContent.value, pints: 124, id: v4()});

    }
  

  return (
    <React.Fragment>
      <form onSubmit={handleNewKegFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='name' />
        <input
          type='text'
          name='brand'
          placeholder='brand' />
        <input
          type='number'
          name='price'
          placeholder='price per pint' />
        <input
          type='number'
          name='alcoholContent'
          placeholder='% alcohol content' />
        <input
          type='hidden'
          name='pints'
          value='124' />    

        <button type='submit'>add</button>
      </form>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
