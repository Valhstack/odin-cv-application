import { EducationInfo } from './EducationInfo.jsx';
import { GeneralInfo } from './GeneralInfo.jsx';
import { WorkInfo } from './WorkInfo.jsx';

export function Sidebar({ generalInfo, onGeneralInfoChange, educationInfo, onEducationInfoChange, onAddEducationBtnClick, workInfo, onWorkInfoChange, onAddWorkBtnClick }) {
    return (
        <div id='sidebar'>
            <GeneralInfo generalInfo={generalInfo} onGeneralInfoChange={onGeneralInfoChange} />
            <EducationInfo educationInfo={educationInfo} onEducationInfoChange={onEducationInfoChange} onAddEducationBtnClick={onAddEducationBtnClick} />
            <WorkInfo workInfo={workInfo} onWorkInfoChange={onWorkInfoChange} onAddWorkBtnClick={onAddWorkBtnClick} />
        </div>
    )
}