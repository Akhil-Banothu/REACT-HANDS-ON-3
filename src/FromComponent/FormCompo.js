import React, { useState } from 'react'
import DataCompo from './DataCompo';
import './form.css';

const FormCompo = () => {

   const [Name, setName] = useState('');
   const [Department, setDepartment] = useState('');
   const [Rating, setRating] = useState(0);
   const [Data, setData] = useState([]);
   const [click, setClick] = useState(true);

   const handleName = (event) => {
      setName(event.target.value);
   }

   const handleDepartment = (event) => {
      setDepartment(event.target.value);
   }

   const handleRating = (event) => {
      setRating(event.target.value);
   }

   const handleSubmit = () => {
      const tempobj = {
         Name: Name,
         Department: Department,
         Rating: Rating,
      }
      const value = [...Data, tempobj];
      console.log(value);
      setData(value);
      setName('');
      setDepartment('');
      setRating(0);
      setClick(false);
   }

   const toggleClick = () => {
      setClick(!click)
   }

   return (
      <div>
         {click ? (
            <>
               <h1 className='heading'>EMPLOYEE FEEDBACK FORM</h1>
               <form>
                  <fieldset>
                     <label>Name: </label>
                     <input type='text' name='Name' placeholder='Enter your name' onChange={handleName} />
                  </fieldset>

                  <fieldset>
                     <label>Department: </label>
                     <input type='text' name='Department' placeholder='Enter your Department' onChange={handleDepartment} />
                  </fieldset>

                  <fieldset>
                     <label>Rating: </label>
                     <input type='number' name='Rating' placeholder='Please provide rating' onChange={handleRating} />
                  </fieldset>
               </form>

               <button className='btn-submit' onClick={handleSubmit}>Submit</button>
            </>
         ) : (
            <div className='data'>
               <DataCompo value={Data} toggle={toggleClick} />
            </div>
         )}


      </div>
   )
}

export default FormCompo