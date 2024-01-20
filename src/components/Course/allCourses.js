import './index.css'
import { SiGooglesheets } from "react-icons/si";


function AllCourses(){


    const demoCourseData = [
        {
            courseCode : 'CS1001',
            courseName : "Programming Fundamentals",
            creditHourse : '4'
        },
        {
            courseCode : 'CS1002',
            courseName : "Object Oriented Programming",
            creditHourse : '4'
        },
        {
            courseCode : 'CS1003',
            courseName : "Data Structures",
            creditHourse : '4'
        },
        {
            courseCode : 'CS1004',
            courseName : "Design and analysis of Algorithms",
            creditHourse : '4'
        }
    ]

    return(<>
        <div className="exportButton">
          <p>Export</p><SiGooglesheets />
        </div>
        <section className="allCoursesPage">
        <table>
                <thead>
                  <tr>
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Credit Hours</th>
                    <th>Operations</th>
                  </tr>
                </thead>
                <tbody>
                  {demoCourseData.map((course) => (
                    <tr key={course.courseCode}>
                      <td>{course.courseCode}</td>
                      <td>{course.courseName}</td>
                      <td>{course.creditHourse}</td> 
                      <td>
                        <button style={{backgroundColor:'#2ecc71'}}>Update</button>
                        <button style={{backgroundColor:'Red'}}>Delete</button>
                      </td> 
                    </tr>
                  ))}
                </tbody>
                </table>
        </section>
    </>)
}


export default AllCourses;