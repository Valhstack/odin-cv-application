import { useState } from "react";

export function GeneralInfo({ generalInfo, onGeneralInfoChange }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div id='general-info-wrapper'>
            <button id='general-info-btn' onClick={() => setIsExpanded(!isExpanded)}>General Information</button>
            <div id='general-info-form' className={!isExpanded ? 'inactive' : 'info-form'}>
                <div className="label-input-wrapper">
                    <label htmlFor='fullName'>Full Name: </label>
                    <input type='text' name='fullName' id='fullName' value={generalInfo.fullName} onChange={onGeneralInfoChange} placeholder='John Dou'></input>
                </div>
                <div className="label-input-wrapper">
                    <label htmlFor='email'>Email: </label>
                    <input type='email' name='email' id='email' value={generalInfo.email} onChange={onGeneralInfoChange} placeholder='john.dou@emaildomain.com'></input>
                </div>
                <div className="label-input-wrapper">
                    <label htmlFor='phoneNumber'>Phone number: </label>
                    <input type='tel' name='phoneNumber' id='phoneNumber' value={generalInfo.phoneNumber} onChange={onGeneralInfoChange} placeholder='+1 234 567 8910'></input>
                </div>
            </div>
        </div>
    )
}