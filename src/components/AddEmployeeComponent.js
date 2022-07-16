import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const AddEmployeeComponent = () => {

    const [firstName, setfirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate('');
    const {id} = useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        const employee = {firstName, lastName, email}

        if(id){
            EmployeeService.updateEmployee(id, employee).then((response) => {
                navigate("/employees")
            }).catch(error => {
                console.log(error)
            })
        }else{
            EmployeeService.createEmployee(employee).then((response) => {
                navigate('/employees')
            }).catch(error =>{
                console.log(error)
            })
        }
        
    }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response) => {
            setfirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
        }).catch(error => {
            console.log(error);
        })

    }, []);
    
    const title = () => {
        if(id){
            return <h2 className='text-center'>Update Employee</h2>
        }else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    }

  return (
    <div>
        <br />
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    {title()}
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>First Name :</label>
                                <input
                                    type={"text"}
                                    placeholder ="Enter first name"
                                    name='firstName'
                                    className='form-control'
                                    value={firstName}
                                    onChange = {(e) => setfirstName(e.target.value)}
                                />
                                
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Last Name :</label>
                                <input
                                    type={"text"}
                                    placeholder ="Enter last name"
                                    name='lastName'
                                    className='form-control'
                                    value={lastName}
                                    onChange = {(e) => setLastName(e.target.value)}
                                />
                                
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Email Id :</label>
                                <input
                                    type={"email"}
                                    placeholder ="Enter email"
                                    name='email'
                                    className='form-control'
                                    value={email}
                                    onChange = {(e) => setEmail(e.target.value)}
                                />
                                
                            </div>

                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}>Save</button>
                                <Link to={"/employees"} className="btn btn-danger">Cancel</Link>
                            </div>
                            

                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddEmployeeComponent