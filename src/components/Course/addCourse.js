import { useState } from 'react';
import './index.css'

function AddCourse()
{

    const [course, setCourse] = useState({code:'', name:'', ch:'none'});
    const handleAddBtn = ()=>{
        setCourse({code:'', name:'', ch:'none'});
    }
    return(<>
            <section className="addCoursePage">
                <div>
                    <label>Course Code: <input value={course.code} placeholder="e.g: CS1002" onChange={(e)=>setCourse({...course, code:e.target.value})}/></label>
                    <label>Course Name: <input value={course.name} onChange={(e)=>setCourse({...course, name:e.target.value})} style={{width: '28%'}} placeholder="e.g: Programming Fundamentals"/></label>
                </div><br></br>
                <div>
                    <label>Credit Hours: 
                        <select value={course.ch} placeholder="Select" onChange={(e)=>setCourse({...course, ch:e.target.value})}>
                            <option value="none">Select</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </label><br></br><br></br>
                </div>
                <center>
                    <button onClick={handleAddBtn} className='addCourseBtn'>Add</button>
                </center>                
            </section>
    </>)
}

export default AddCourse;