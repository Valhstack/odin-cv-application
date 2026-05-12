import { useState } from "react";
import { EducationInfoForm } from './EducationInfoForm.jsx';

export function EducationInfo({ educationInfo, onEducationInfoChange, onAddEducationBtnClick }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div id='education-info-wrapper'>
            <button id='education-info-btn' onClick={() => setIsExpanded(!isExpanded)}>Education Information</button>
            <EducationInfoForm educationInfo={educationInfo} isExpanded={isExpanded} onEducationInfoChange={onEducationInfoChange} />

            <button id="add-education-btn" onClick={onAddEducationBtnClick}>+Add Education</button>
        </div>
    )
}