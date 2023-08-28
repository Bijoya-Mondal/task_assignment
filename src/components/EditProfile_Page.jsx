import React , {useState} from "react";
import './EditProfile_Page.css';
import { Password } from 'primereact/password';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import bell_icon from "../assets-test1/edit_profile_page/Group 7.svg";
import small_pfp from '../assets-test1/edit_profile_page/small_pfp.svg';
import large_pfp from '../assets-test1/edit_profile_page/large_pfp.svg';
import check from '../assets-test1/edit_profile_page/Check.svg';
import date from '../assets-test1/edit_profile_page/Date_today.svg';
import folder from '../assets-test1/edit_profile_page/Folder_fill.svg';

function EditProfile_Page(){

    const [value, setValue] = useState('');

    const [email, setEmail] = useState('');
    const [email_isValid, setEmailIsValid] = useState(false);

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setEmailIsValid(validateEmailFormat(newEmail));
    };

    const validateEmailFormat = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };

    const [phone, setPhone] = useState('');
    const [phone_isValid, setPhoneIsValid] = useState(false);

    const handlePhoneChange = (e) => {
        const newPhone = e.target.value;
        setPhone(newPhone);
        setPhoneIsValid(validatePhoneNumber(newPhone));
    };

    const validatePhoneNumber = (phoneNumber) => {
        
        const numericPhone = phoneNumber.replace(/\D/g, '');
        return numericPhone.length === 10;
    };

    const [start_date, setStartDate] = useState(null);
    const [end_date, setEndDate] =useState(null);

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleIconClick = () => {
        // Trigger the click event of the hidden input
        document.getElementById("fileInput").click();
    };


    return(
        <div className="editprofile-div">

            <div className="upper-right">
                <img src={bell_icon} style={{paddingRight:'20px'}}/>
                <img src={small_pfp} />
            </div>

        <div className="editprofile-main">
            <div className="editprofile-header">
                <h1>Edit profile</h1>
                <img src={large_pfp} width='80px' height='80px'/>
            </div>

            <div className="editprofile-forms">

                <div className="name-form">

                    <div className="first-name">
                        <label className="form-labels">First Name</label>
                        <input className="small-forms"/>
                    </div>

                    <div className="last-name">
                        <label className="form-labels">Last Name</label>
                        <input className="small-forms"/>
                    </div>

                </div>

                <div className="email-form">
                    <label className="form-labels">Email</label>
                    <input className="forms" 
                    type="email"
                    value={email}
                    onChange={handleEmailChange} />
                    

                </div>
                {email_isValid && <div className="form-valid-checks"><img src={check} width='20px' height='20px' style={{backgroundColor:'green'}}/></div>}

                <div className="cellno-form">
                    <label className="form-labels">Mobile Number</label>
                    <input className="forms"
                    type="tel"
                    value={phone}
                    onChange={handlePhoneChange} />
                    
                </div>
                {phone_isValid && <div className="form-valid-checks"><img src={check} width='20px' height='20px' style={{backgroundColor:'green'}}/></div>}

                <div className="password-form">
                    <label className="form-labels">Password</label>
                    <div className="card flex justify-content-center">
                    <Password className='custom-password' value={value} onChange={(e) => setValue(e.target.value)} toggleMask={true} feedback={false} />
                    </div>
                </div>

                <div className="college-date-forms">

                    <div className="college-start-date">
                        <label className="form-labels">College Start Date</label>
                        <DatePicker className='small-forms' selected={start_date} onChange={(start_date) => setStartDate(start_date)} />
                        
                    </div>

                    {/* <div className="date-icon">
                        <img src={date} />
                    </div> */}

                    <div className="college-end-date">
                        <label className="form-labels">College End Date</label>
                        <DatePicker className='small-forms' selected={end_date} onChange={(end_date) => setEndDate(end_date)} />
                    </div>
                    {/* <div className="">
                        <img src={date} />
                        </div> */}

                </div>

                <div className="resume-form">
                    <label className="form-labels">Resume</label>
                    <input
                    className="forms"
                    type="text"
                    
                />
                </div>
                
                <div style={{float:'right', position:'relative',marginTop:'-33px',marginRight:'7px'}}>
                    <img src={folder} />
                </div>

                <br />
                <div className="buttons">
                    <button id='editpage-cancel-btn'>Cancel</button>
                    <button id='editpage-save-btn'>Save</button>
                </div>

            </div>
        </div>
        </div>
    )
}

export default EditProfile_Page;