export function WorkInfoForm({ workInfo, isExpanded, onWorkInfoChange, onAddWorkBtnClick }) {
    return (
        <div id="education-info-form-wrapper" className={!isExpanded ? 'inactive' : 'info-form'} >
            <div id='education-info-form'>
                <div className="label-input-wrapper">
                    <label htmlFor='companyName'>Company Name: </label>
                    <input type="text" name='companyName' id='companyName' value={workInfo.companyName} onChange={onWorkInfoChange} />
                </div>

                <div className="label-input-wrapper">
                    <label htmlFor='positionTitle'>Position Title: </label>
                    <input type="text" name='positionTitle' id='positionTitle' value={workInfo.positionTitle} onChange={onWorkInfoChange} />
                </div>

                <div className="label-input-wrapper">
                    <label htmlFor='responsibilities'>Responsibilities: </label>
                    <textarea name='responsibilities' id='responsibilities' value={workInfo.responsibilities} onChange={onWorkInfoChange} />
                </div>

                <div className="label-input-wrapper">
                    <label htmlFor='startOfWork'>Start Month and Year: </label>
                    <input type="month" name='startOfWork' id='startOfWork' value={workInfo.startOfWork} onChange={onWorkInfoChange} />
                </div>

                <div className="label-input-wrapper">
                    <label htmlFor='endOfWork'>End Month and Year: </label>
                    <input type="month" name='endOfWork' id='endOfWork' value={workInfo.endOfWork} onChange={onWorkInfoChange} />
                </div>
            </div>

            <button id="add-work-btn" onClick={onAddWorkBtnClick}>+Add Work Experience</button>
        </div >
    )
}