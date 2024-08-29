import { IoPersonSharp } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { MdPersonAddAlt1 } from "react-icons/md";
import { ImBook } from "react-icons/im";
import { FaPeopleRoof } from "react-icons/fa6";
import { SiGoogleclassroom } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { FaHospital } from "react-icons/fa";
function Content({stdcount,setStdCount,remcount,setRemCount}){

   return(
    <div className="totalcontent">
        <div className="box">

            <div className="box1">
            <span className="elem1"><IoPersonSharp /></span>
            <p className="count">{stdcount}</p>
            <p>Regular Students</p>
            </div>

            <div className="box2">
            <span className="elem1"><FaUserTie /></span>
            <p className="count">{remcount}</p>
            <p>Remedial Students</p>
            
            </div>

            <div className="box3">
            <span className="elem1"><PiStudentBold /></span>
            <p className="count">{stdcount+remcount}</p>
            <p>In Paid Students</p>
            
            </div>
        </div>
        <div className="menucontains">
        <h1 className="menuhead">MENU</h1>
            <div className="menu">
                <div onClick={()=>setStdCount(stdcount+1)}>
                    <MdPersonAddAlt1 className="menustic" /> 
                    <p>Students Enrollment</p>
                </div>
                <div onClick={()=>setRemCount(remcount+1)}>
                    <ImBook className="menustic" />
                    <p>Remedial Enrollment</p>
                </div>
                <div>
                    <FaPeopleRoof className="menustic"/>
                    <p>Club Management</p>
                </div>
                <div>
                    <SiGoogleclassroom className="menustic" />
                    <p>Classroom Management</p>
                </div>
                <div>
                    <MdEmail className="menustic"/>
                    <p>SMS//EMAIL</p>
                </div>
                <div>
                    <TbReportSearch className="menustic"/>
                    <p>Attendance</p>
                </div>
                <div>
                    <FaHospital className="menustic"/>
                    <p>Clinic</p>
                </div>
            </div>
        </div>
    </div>
   )
}

export default Content