import { useState } from 'react'
import './App.css'

function Navbar() {
  return (
    <nav id='navbar'>CV Generator</nav>
  )
}

function GeneralInfo({ generalInfo, onFullNameChange, onEmailChange, onPhoneNumberChange }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div id='general-info-wrapper'>
      <button id='general-info-btn' onClick={() => setIsExpanded(!isExpanded)}>General Information</button>
      <div id='general-info-form' className={!isExpanded ? 'inactive' : 'general-info-form'}>
        <div className="label-input-wrapper">
          <label for='full-name'>Full Name: </label>
          <input type='text' name='full-name' id='full-name' value={generalInfo.fullName} onChange={onFullNameChange} placeholder='John Dou'></input>
        </div>
        <div className="label-input-wrapper">
          <label for='email'>Email: </label>
          <input type='email' name='email' id='email' value={generalInfo.email} onChange={onEmailChange} placeholder='john.dou@emaildomain.com'></input>
        </div>
        <div className="label-input-wrapper">
          <label for='phone-number'>Phone number: </label>
          <input type='tel' name='phone-number' id='phone-number' value={generalInfo.phoneNumber} onChange={onPhoneNumberChange} placeholder='+1 234 567 8910'></input>
        </div>
      </div>
    </div>
  )
}

/*function EducationInfo() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div id='education-info-wrapper'>
      <button id='education-info-btn' onClick={() => setIsExpanded(!isExpanded)}>Education Information</button>
      <div id='education-info-form' className={!isExpanded ? 'inactive' : ''}>

      </div>
    </div>
  )
}*/

function Sidebar({ generalInfo, onFullNameChange, onEmailChange, onPhoneNumberChange }) {
  return (
    <div id='sidebar'>
      <GeneralInfo generalInfo={generalInfo} onFullNameChange={onFullNameChange} onEmailChange={onEmailChange} onPhoneNumberChange={onPhoneNumberChange} />
    </div>
  )
}

function Preview({ generalInfo }) {
  return (
    <div id='preview'>
      <p>{generalInfo.fullName}</p>
      <p>{generalInfo.email}</p>
      <p>{generalInfo.phoneNumber}</p>
    </div>
  )
}

function Main() {
  const [generalInfo, setGeneralInfo] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  })

  const handleFullNameChange = (e) => {
    setGeneralInfo({
      ...generalInfo,
      fullName: e.target.value
    });
  }

  const handleEmailChange = (e) => {
    setGeneralInfo({
      ...generalInfo,
      email: e.target.value
    })
  }

  const handlePhoneNumberChange = (e) => {
    setGeneralInfo({
      ...generalInfo,
      phoneNumber: e.target.value
    })
  }

  return (
    <main id='main'>
      <Sidebar generalInfo={generalInfo} onFullNameChange={handleFullNameChange} onEmailChange={handleEmailChange} onPhoneNumberChange={handlePhoneNumberChange} />
      <Preview generalInfo={generalInfo} />
    </main>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <Main />
    </>
  )
}

export default App
