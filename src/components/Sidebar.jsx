import { EducationInfo } from './EducationInfo.jsx';
import { GeneralInfo } from './GeneralInfo.jsx';

export function Sidebar({ generalInfo, onGeneralInfoChange, educationInfo, onEducationInfoChange, onAddEducationBtnClick }) {
    return (
        <div id='sidebar'>
            <GeneralInfo generalInfo={generalInfo} onGeneralInfoChange={onGeneralInfoChange} />
            <EducationInfo educationInfo={educationInfo} onEducationInfoChange={onEducationInfoChange} onAddEducationBtnClick={onAddEducationBtnClick} />
        </div>
    )
}