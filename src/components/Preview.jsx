export function Preview({ generalInfo, educations, works }) {
    return (
        <div id='preview'>
            <div>
                <p>General Information: </p>
                <div>
                    <p>{generalInfo.fullName}</p>
                    <p>{generalInfo.email}</p>
                    <p>{generalInfo.phoneNumber}</p>
                </div>
            </div>
            <div>
                <p>Education: </p>
                <ul>
                    {educations.map(education => (
                        <li key={education.id}>
                            <p>{education.schoolName}</p>
                            <p>{education.studyTitle}</p>
                            <p>{education.startOfStudy}</p>
                            <p>{education.endOfStudy}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <p>Work Experience: </p>
                <ul>
                    {works.map(work => (
                        <li key={work.id}>
                            <p>{work.companyName}</p>
                            <p>{work.positionTitle}</p>
                            <p>{work.responsibilities}</p>
                            <p>{work.startOfWork}</p>
                            <p>{work.endOfWork}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}