import { useState } from "react";
import { Sidebar } from './Sidebar.jsx';
import { Preview } from './Preview.jsx';

export function Main() {
    const [generalInfo, setGeneralInfo] = useState({
        fullName: '',
        email: '',
        phoneNumber: ''
    })

    const [educations, setEducations] = useState([]);

    const [educationInfo, setEducationInfo] = useState({
        schoolName: '',
        studyTitle: '',
        startOfStudy: '',
        endOfStudy: ''
    });

    const [works, setWorks] = useState([]);
    const [workInfo, setWorkInfo] = useState({
        companyName: '',
        positionTitle: '',
        responsibilities: '',
        startOfWork: '',
        endOfWork: ''
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

    const handleWorkInfoChange = (e) => {
        const { name, value } = e.target;

        setWorkInfo(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleAddWorkBtn = () => {
        setWorks(prev => [
            ...prev,
            {
                id: crypto.randomUUID(),
                ...workInfo
            }
        ]);

        setWorkInfo({
            companyName: '',
            positionTitle: '',
            responsibilities: '',
            startOfWork: '',
            endOfWork: ''
        });
    };

    return (
        <main id='main'>
            <Sidebar generalInfo={generalInfo} onGeneralInfoChange={handleGeneralInfoChange} educationInfo={educationInfo} onEducationInfoChange={handleEducationInfoChange} onAddEducationBtnClick={handleAddEducationBtn} workInfo={workInfo} onWorkInfoChange={handleWorkInfoChange} onAddWorkBtnClick={handleAddWorkBtn} />
            <Preview generalInfo={generalInfo} educations={educations} works={works} />
        </main>
    )
}