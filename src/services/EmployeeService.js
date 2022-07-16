
import axios from "axios";

const EMPLOYEE_REST_API_URL = "http://localhost:8080/api/employees"

class EmployeeService{

    getAllEmployees(){
        return axios.get(EMPLOYEE_REST_API_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_REST_API_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_REST_API_URL + '/' + employeeId)
    }

    updateEmployee(employeeId, employee){
        return axios.put(EMPLOYEE_REST_API_URL + '/' + employeeId, employee)
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_REST_API_URL + '/' + employeeId)
    }
}

export default new EmployeeService();