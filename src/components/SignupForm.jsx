import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import googleIcon from '../assets/gmail.png';
import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons';
export default function SignupForm() {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },

    validate: values => {
      const errors = {};


      if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 6) {
        errors.password = 'Must be 6 characters';
      }

      if (!values.confirmPassword) {
        errors.confirmPassword = 'Confirm Password is a Required';
      }
      else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = 'Password Dont Match, Please Retype ypur password correctly';
      }


      if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      return errors;
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  function handleShowPassword() {
    console.log("working")

      setPasswordVisible(prev=>!prev)

  }


  return (
    <div>
      <h3> SignupForm  </h3>

      <div className="signupform">
        <form onSubmit={formik.handleSubmit}>
          <div className="inputField">
            <label htmlFor="email">Email</label>
            <input className='formInput' type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} placeholder='Enter your email' onBlur={formik.handleBlur} />
            {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
          </div>
          <div className="inputField">
            <label htmlFor="password">password</label>
            <div className='flex'>
              <input className='formInput flex-1' type={passwordVisible ? "text" : "password"} id="password" name="password" onChange={formik.handleChange} value={formik.values.password} placeholder='Enter your password' onBlur={formik.handleBlur} />
              <button className='viewpass' type="button" onClick={handleShowPassword} >
                  <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} style={{ cursor: 'pointer' }}/>
              </button>
            </div>
            {/* <button className='viewpass' onClick={handleShowPassword}>{ isShowMePassword ? <FontAwesomeIcon icon={faEye}/> : <FontAwesomeIcon icon={faEyeSlash}/> } </button> */}

            {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
          </div>

          <div className="inputField">
            <label htmlFor="confirmpassword">Confirm password</label>
            <input className='formInput' type="password" id="confirmpassword" name="confirmPassword" onChange={formik.handleChange} value={formik.values.confirmPassword} placeholder='Confirm your password' onBlur={formik.handleBlur} />
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? <div className='error'>{formik.errors.confirmPassword}</div> : null}
          </div>


          <button type="submit" className='btnSignup'>Login</button>
        </form>

        <div className="separate-or"><div className="line"></div> <span>or </span> <div className="line"></div></div>
        <button type="button" className="colorlight">Sign up with <img src={googleIcon} alt="" style={{ height: "14px" }} /></button>

      </div>
    </div>
  )
}
