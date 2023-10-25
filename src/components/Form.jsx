import './Form.css'
import { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        details: '',
      });
    
      const [submitted, setSubmitted] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // Basic form validation - check if required fields are filled
        if (!formData.name || !formData.email || !formData.subject || !formData.details) {
          alert('Please fill in all required fields.');
        } else {
          // Form is valid, show the "Booked" alert and reset the form
          alert('Booked');
          setFormData({
            name: '',
            email: '',
            subject: '',
            details: '',
          });
          setSubmitted(true);
        }
      };
  return (
    <div className='form'>
    {submitted ? (<div style={{textAlign: 'center', fontSize: '4rem', fontWeight: '800', textTransform: 'upperCase'}}>Booked</div>) : (
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type='text' name='name' value={formData.name} onChange={handleChange}></input>
        <label>Email</label>
        <input type='text' name='email' value={formData.email} onChange={handleChange}></input>
        <label>Subject</label>
        <input type='text' name='subject' value={formData.subject} onChange={handleChange}></input>
        <label>Details</label>
        <input type='text' name='details' value={formData.details} onChange={handleChange}></input>
        <textarea rows={6} placeholder='Type a short message here...' />
        <button className='btn' >Submit</button>
      </form>
      )}
    </div>
  )
}

export default Form
