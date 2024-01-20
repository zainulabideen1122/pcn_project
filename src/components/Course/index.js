import Navigation from "../navbar/Navigation";
import AddCourse from "./addCourse";
import AllCourses from "./allCourses";
import './index.css'
import { useState } from "react";

function Course()
{
    const [activeTab, setActiveTab] = useState('allCourses');
    const handleTabClick=(tab)=>{
        setActiveTab(tab);
    }

    const allCourseStyle = (activeTab === 'allCourses' ? 'activeCourseTab' : '');
    const addCourseStyle = (activeTab === 'addCourse' ? 'activeCourseTab' : '');
    const moreOptionStyle = (activeTab === 'moreOptions' ? 'activeCourseTab' : '');

    return(<>
            <Navigation/>
            <section style={{marginLeft:"18%"}}>
                <h1 className="pageTitle"> Course / {activeTab}</h1>
                <div className="coursePageUpperList">
                    <ul>
                        <li onClick={()=>handleTabClick('allCourses')} className={allCourseStyle}>All Courses</li>
                        <li onClick={()=>handleTabClick('addCourse')} className={addCourseStyle}>Add New Course</li>
                        <li onClick={()=>handleTabClick('moreOptions')} className={moreOptionStyle}>More Options will be added</li>
                    </ul>
                </div>

                <div className="coursePageContent">
                    {activeTab === 'allCourses' && <AllCourses/>}
                    {activeTab === 'addCourse' && <AddCourse/>}
                </div>
            </section>
    </>)
}


export default Course;