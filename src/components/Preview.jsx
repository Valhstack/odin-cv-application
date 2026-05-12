export function Preview({ generalInfo, educations }) {
    return (
        <div id='preview'>
            <p>{generalInfo.fullName}</p>
            <p>{generalInfo.email}</p>
            <p>{generalInfo.phoneNumber}</p>
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
    )
}