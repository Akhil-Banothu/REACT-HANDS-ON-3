import React from 'react'


const DataCompo = ({ value, toggle }) => {
   return (
      <div >
         <h1 className="heading2">EMPLOYEE FEEDBACK DATA</h1>
         <div className='data-container'>
            {value.map((item, index) => {
               return (
                  <p key={index}>Name: {item.Name} | Department: {item.Department} | Rating: {item.Rating}</p>
               );
            })}
         </div>
         <button className='btn-submit' onClick={toggle}>Go Back</button>
      </div>
   )
}

export default DataCompo