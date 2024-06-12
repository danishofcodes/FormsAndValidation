
import { useState } from 'react';
import './App.css'
import Newsletter from './components/Newsletter';
import PersonalDetailsForm from './components/PersonalDetailsForm';
import SignupForm from './components/SignupForm';

function App() {
  // const [count, setCount] = useState(0)
  const [activeTab, setActiveTab] = useState('signup')
  function handleClick(event) {
    const buttonValue = event.target.value;
    if (buttonValue === "signup") {
      setActiveTab('signup')
      console.log('signup')
    }
    else if (buttonValue === "newsletter") {
      setActiveTab('newsletter')
      console.log("newsletter")
    } else if (buttonValue === "personaldata") {
      setActiveTab('personaldata')
      console.log("personaldata")
    } else {
      console.warn("Unexpected Button")
    }
  }
  return (
    <>
      <div className='flex flex-wrap'>
        <button className={`tabbutton ${activeTab === 'signup' ? 'activetab' : ''}`} onClick={handleClick} value="signup">Signup Form</button>
        <button className={`tabbutton ${activeTab === 'newsletter' ? 'activetab' : ''}`} onClick={handleClick} value="newsletter">Newsletter Form</button>
        <button className={`tabbutton ${activeTab === 'personaldata' ? 'activetab' : ''}`} onClick={handleClick} value="personaldata">Personal Details Form</button>
        {/* <button></button> */}
      </div>

      <div className='tabcontentsection'>
        {activeTab == 'signup' && <SignupForm />}
        {activeTab == 'newsletter' && <Newsletter />}
        {activeTab == 'personaldata' && <PersonalDetailsForm />}
      </div>

    </>
  )
}

export default App
