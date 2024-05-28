import React from 'react'
import { useFormik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
export default function SignupForm() {




  
    const formik = useFormik({
      initialValues : {
        email:'',
        password : '',
      },     
    
      validate : values => {
        const errors = {};
        if (!values.password) {
          errors.password = 'Required';
        } else if (values.password.length > 15) {
          errors.password = 'Must be 15 characters';
        }
      
        if (!values.email) {
          errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
        }
      
        return errors;
      },
    
    onSubmit :  values => {
       alert(JSON.stringify(values, null, 2));
    },
    });


  return (
    <div>
       <h3> SignupForm  </h3>

       <div className="signupform">
          <form onSubmit={formik.handleSubmit}>
             <div className="inputField">
             <label htmlFor="email">Email</label>
              <input className='formInput' type="email" id="email"  name="email" onChange={formik.handleChange} value={formik.values.email} placeholder='Enter your email' onBlur={formik.handleBlur}/>
              {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
              </div>
              <div className="inputField">
              <label htmlFor="password">password</label>
              <input className='formInput' type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password} placeholder='Enter your password' onBlur={formik.handleBlur}/>
              {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}
              </div>
              
              <button type="submit">Login</button>
          </form>

          <div className="separate-or"><div className="line"></div> <span>or </span> <div className="line"></div></div>
          <button type="button" className="colorlight">Sign up with <FontAwesomeIcon icon={faGoogle}/></button>

       </div>
    </div>
  )
}
