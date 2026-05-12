export function EducationInfoForm({ educationInfo, isExpanded, onEducationInfoChange }) {
    return (
        <div id='education-info-form' className={!isExpanded ? 'inactive' : 'info-form'}>
            <div className="label-input-wrapper">
                <label htmlFor='schoolName'>School Name: </label>
                <input type="text" name='schoolName' id='schoolName' value={educationInfo.schoolName} onChange={onEducationInfoChange} />
            </div>

            <div className="label-input-wrapper">
                <label htmlFor='studyTitle'>Title Of Study: </label>
                <input type="text" name='studyTitle' id='studyTitle' value={educationInfo.studyTitle} onChange={onEducationInfoChange} />
            </div>
            <div className="label-input-wrapper">
                <label htmlFor='startOfStudy'>Start Month and Year: </label>
                <input type="month" name='startOfStudy' id='startOfStudy' value={educationInfo.startOfStudy} onChange={onEducationInfoChange} />
            </div>
            <div className="label-input-wrapper">
                <label htmlFor='endOfStudy'>End Month and Year: </label>
                <input type="month" name='endOfStudy' id='endOfStudy' value={educationInfo.endOfStudy} onChange={onEducationInfoChange} />
            </div>
        </div>
    )
}