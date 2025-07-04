/*
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const UserForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post('http://localhost:8080/userform_submit_post', values);
      console.log('Response:', response.data);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit the form. Please try again.');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <Field name="firstName" type="text" />
            <ErrorMessage name="firstName" component="div" style={{ color: 'red' }} />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <Field name="lastName" type="text" />
            <ErrorMessage name="lastName" component="div" style={{ color: 'red' }} />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default UserForm;
*/

import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL, DEBUG_MODE } from '../../config';

const UserForm = () => {

  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Replace with your API endpoint
      /*
      const response = await axios.post
      ( API_BASE_URL + "/userform_submit_post" 
        , 
        {
        firstName,
        lastName,
      });
      */
      const response = await axios.post
      ( API_BASE_URL + "/userform_submit_post" 
          +"?firstName=" + firstName + "&lastName=" + lastName + ""
      )
      console.log(firstName);
      console.log(lastName);
      console.log('Response:', response.data);
      setSuccess(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Failed to submit the form. Please try again.');
    } finally {
      setLoading(false);
      // Resetting the form fields
      setFirstName('');
      setLastName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>Form submitted successfully!</p>}
    </form>
  );
};

export default UserForm;
