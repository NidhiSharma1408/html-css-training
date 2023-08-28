import EmployeeDetail from "./EmployeeDetail"
const EmployeeList = ({ employees, deleteEmp }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>City</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    employees.map((val, index) => {
                        return (
                            <EmployeeDetail val={val} index={index} deleteEmp={deleteEmp} />
                        )
                    })
                }
            </tbody>
        </table>
    )
}
export default EmployeeList;