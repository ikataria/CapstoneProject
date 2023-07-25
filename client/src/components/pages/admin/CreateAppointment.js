import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AuthData } from "../../../auth/AuthWrapper";


// user detail form
const SlotAppointmentForm = ({ SaveAppointment }) => {

    // console.log(`userInfo>>>>>>>>>>>>>>9`, UserInfo);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = document.forms.userForm;


        const appointmentObj = {
            appointmentDate: form.appointmentDate.value.trim(),
            appointmentTime: form.appointmentTime.value.trim(),
        }

        console.log(`appointmentObj::>`, appointmentObj);

        SaveAppointment(appointmentObj);

    }

    return (
        <div>
            <form name="userForm" onSubmit={handleSubmit}>
            {/* <form name="userForm"> */}
                <h2 className="homePageNewBanner">APPOINTMENT PAGE</h2>
                <br />
                <br />
                <br />

                <div className="form-group row">
                    <label htmlFor="appointmentDate" className="col-sm-4 col-form-label col-form-label-lg">Appointment Date</label>
                    <div className="col-sm-6">
                        <input name="appointmentDate" type="date" placeholder="Choose the date" className="form-control form-control-lg" required></input>
                    </div>
                </div>
                <br />

                <div id="timing" class="radio-toolbar">
                    <input type="radio" name="appointmentTime" id="time1" value="09:00"></input>
                    <label for="time1">09:00</label>
                <br />

                    <input type="radio" name="appointmentTime" id="time2" value="09:30"></input>
                    <label for="time2">09:30</label>
                <br />

                    <input type="radio" name="appointmentTime" id="time3" value="10:00"></input>
                    <label for="time3">10:00</label>
                <br />

                    <input type="radio" name="appointmentTime" id="time4" value="10:30"></input>
                    <label for="time4">10:30</label>
                <br />

                    <input type="radio" name="appointmentTime" id="time5" value="11:00"></input>
                    <label for="time5">11:00</label>
                <br />

                    <input type="radio" name="appointmentTime" id="time6" value="11:30"></input>
                    <label for="time6">11:30</label>
                <br />

                    <input type="radio" name="appointmentTime" id="time7" value="12:00"></input>
                    <label for="time7">12:00</label>
                <br />

                    <input type="radio" name="appointmentTime" id="time8" value="12:30"></input>
                    <label for="time8">12:30</label>
                <br />

                    <input type="radio" name="appointmentTime" id="time9" value="1:00"></input>
                    <label for="time9">1:00</label>
                <br />

                    <input type="radio" name="appointmentTime" id="time10" value="1:30"></input>
                    <label for="time10">1:30</label>
                </div>



                <div className="form-group">
                    <input type="submit" value="Submit" className="btn btn-success btn-lg" />
                </div>
            </form>

            <br />
            <br />
        </div>
    )
}

// Hit API
const CreateAppointment = () => {

    const { user } = AuthData();
    const [userDetails, setUserDetails] = useState({});

    const userName = user.name;
    console.log(`userName>>132`, userName);

    const SaveAppointment = async (userName) => {
        let query = `
            query {
                getUserByUserName(userName:"${userName}"){
                    userName,
                    password,
                    userType,
                    firstName,
                    lastName,
                    age,
                    licenseNumber,
                    make,
                    model,
                    year,
                    plateNumber,
                }
            }
        `;

        fetch('http://localhost:7700/graphql', {
            method: 'Post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query })
        }).then(async (response) => {
            let userList = await response.json();
            console.log('userDetail::::>>163:', JSON.stringify(userList.data));
            setUserDetails(userList.data.getUserByUserName)
        })
    }

    useEffect(function () {
        SaveAppointment()
    }, {});

    return (
        <div>
            <SlotAppointmentForm SaveAppointment={SaveAppointment} />
        </div>
    )
}

export default CreateAppointment;