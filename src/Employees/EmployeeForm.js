import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
const EmployeeForm = ({ saveData }) => {
    return (
        <form onSubmit={saveData}>
            <div className="input">
                <TextField variant="outlined" label="Name" type="text" name="name" placeholder="Enter name" />
            </div>
            <div className="input">
                <TextField variant="outlined" label="Age" type="number" name="age" placeholder="Enter age" />
            </div>
            <TextField variant="outlined" label="Salary" type="number" name="salary" placeholder="Enter salary" />
            <div className="input">
                <TextField variant="outlined" label="City" type="text" name="city" placeholder="city" />
            </div>

            <Button variant="contained" color="success" endIcon={<SendIcon />} type="submit">Save</Button>
        </form >
    )
}
export default EmployeeForm;