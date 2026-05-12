import { useState } from "react";
import { Sidebar } from './Sidebar.jsx';
import { Preview } from './Preview.jsx';

export function Main() {
    const [generalInfo, setGeneralInfo] = useState({
        fullName: '',
        email: '',
        phoneNumber: ''
    })

    const [educations, setEducations] = useState([
        /*{
            id: crypto.randomUUID(),
            schoolName: '',
            studyTitle: '',
            startOfStudy: '',
            endOfStudy: ''
        }*/
    ])

    const [educationInfo, setEducationInfo] = useState({
        schoolName: '',
        studyTitle: '',
        startOfStudy: '',
        endOfStudy: ''
    })

    const handleGeneralInfoChange = (e) => {
        const { name, value } = e.target;

        setGeneralInfo(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleEducationInfoChange = (e) => {
        const { name, value } = e.target;

        setEducationInfo(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleAddEducationBtn = () => {
        setEducations(prev => [
            ...prev,
            {
                id: crypto.randomUUID(),
                ...educationInfo
            }
        ]);

        setEducationInfo({
            schoolName: '',
            studyTitle: '',
            startOfStudy: '',
            endOfStudy: ''
        });
    };

    return (
        <main id='main'>
            <Sidebar generalInfo={generalInfo} onGeneralInfoChange={handleGeneralInfoChange} educationInfo={educationInfo} onEducationInfoChange={handleEducationInfoChange} onAddEducationBtnClick={handleAddEducationBtn} />
            <Preview generalInfo={generalInfo} educations={educations} />
        </main>
    )
}