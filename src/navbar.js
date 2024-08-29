import { IoMdPeople } from "react-icons/io";
import { VscLayoutPanel } from "react-icons/vsc";
import { RiDiscountPercentFill } from "react-icons/ri";
import { BiSolidReport } from "react-icons/bi";
import { TbReportAnalytics } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { FaCircleQuestion } from "react-icons/fa6";
import { FaArrowRightFromBracket } from "react-icons/fa6";
function handleSignout(){
    window.location="https://google.com";
}
function NavBar(){
    return (
        <div className="navbar">
            <img src='logo.jpeg' alt='logo'/> 
            <ul>
                <li><span className="navelem"><IoMdPeople /></span>Student Management</li>
                <li><span className="navelem"><VscLayoutPanel /></span>Financial Management</li>             
                <li> <span className="navelem"><RiDiscountPercentFill /></span>Quality Control</li>
                <li><span className="navelem"><TbReportAnalytics /></span>Report Delivery</li>
                <li><span className="navelem"><BiSolidReport /></span>Attendance</li>
                <li className="sign"><FaCircleQuestion  />
                <IoIosSettings  />
                <FaArrowRightFromBracket  onClick={()=>{handleSignout()}} /></li>
            </ul>
            
            
        </div>
    )
}

export default NavBar;