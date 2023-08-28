import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
const EmployeeDetail = ({ val, index, deleteEmp }) => {
    return (
        <tr>
            <td>{val.employeeId}</td>
            <td>{val.name}</td>
            <td>{val.age}</td>
            <td>{val.salary}</td>
            <td>{val.city}</td>
            <td>
                <IconButton color="error" aria-label="delete" onClick={() => { deleteEmp(index) }}>
                    <DeleteIcon />
                </IconButton>
            </td>
        </tr>
    )
}

export default EmployeeDetail;