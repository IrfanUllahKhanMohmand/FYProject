import React from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../components/controls/Controls";
import { useForm, Form } from '../components/UseForm/useForm';
import * as employeeService from '../Services/employeeService';


const genderItems = [
    { id: 'male', title: 'Male' },
    { id: 'female', title: 'Female' },
    { id: 'other', title: 'Other' },
]

const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    city: '',
    gender: 'male',
    departmentId: '',
    hireDate: new Date(),
    isPermanent: false,
}

export default function EmployeeForm() {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) &&fieldValues.email ? "" : "Email is not valid."
        if ('contact' in fieldValues)
            temp.contact =  fieldValues.contact.length > 9   ? "" : "Minimum 10 numbers required."

        setErrors({
            ...temp
        })

        if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const {
        values,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()){
            employeeService.insertEmployee(values)
            resetForm()
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />
                    <Controls.PasswordInput
                        label="Password"
                        name="password"
                        value={values.password}
                        onChange={handleInputChange}
                        error={errors.password}
                    />
                    <Controls.Input
                        label="Contact"
                        name="contact"
                        value={values.contact}
                        onChange={handleInputChange}
                        error={errors.contact}
                    />
                    <Controls.Input
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                        error={errors.city}
                    />
                    <Controls.Input
                        label="CNIC"
                        name="cnic"
                        value={values.cnic}
                        onChange={handleInputChange}
                        error={errors.cnic}
                    />
                    

                </Grid>
                <Grid item xs={6}>
                    {/* <Controls.RadioGroup
                        name="gender"
                        label="Gender"
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    /> */}
                    <Controls.Select
                        name="floorNumber"
                        label="Floor No"
                        value={values.floorNumber}
                        onChange={handleInputChange}
                        options={employeeService.getFloorCollection()}
                        error={errors.floorNumber}
                    />
                    <Controls.Select
                        name="flatNumber"
                        label="Flat No"
                        value={values.flatNumber}
                        onChange={handleInputChange}
                        options={employeeService.getFlatCollection()}
                        error={errors.flatNumber}
                    />
                    <Controls.Input
                        label="Advance Rent"
                        name="advanceRent"
                        value={values.advanceRent}
                        onChange={handleInputChange}
                        error={errors.advanceRent}
                    />
                    <Controls.Input
                        label="Rent Per Month"
                        name="rentPerMonth"
                        value={values.rentPerMonth}
                        onChange={handleInputChange}
                        error={errors.rentPerMonth}
                    />
                     <Controls.Input
                        label="Issue Date"
                        name="issueDate"
                        value={values.issueDate}
                        onChange={handleInputChange}
                        error={errors.issueDate}
                    />
                     <Controls.Input
                        label="Status"
                        name="status"
                        value={values.status}
                        onChange={handleInputChange}
                        error={errors.status}
                    />
                    {/* <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    /> */}
                    {/* <Controls.Checkbox
                        name="isPermanent"
                        label="Permanent Employee"
                        value={values.isPermanent}
                        onChange={handleInputChange}
                    /> */}

                    <div>
                        <Controls.Button
                            type="submit"
                            text="Submit" />
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                </Grid>
            </Grid>
        </Form>
        




       
    )
}
