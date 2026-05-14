import { useState } from "react";
import { WorkInfoForm } from "./WorkInfoForm";

export function WorkInfo({ workInfo, onWorkInfoChange, onAddWorkBtnClick }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div id='work-info-wrapper'>
            <button id='work-info-btn' onClick={() => setIsExpanded(!isExpanded)}>Work Experience</button>
            <WorkInfoForm workInfo={workInfo} isExpanded={isExpanded} onWorkInfoChange={onWorkInfoChange} onAddWorkBtnClick={onAddWorkBtnClick} />
        </div>
    )

}