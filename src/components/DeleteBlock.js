
import {  Box } from 'dracula-ui'
import axios from 'axios'

const DeleteBlock = ({ documentId }) => {

    const deleteTicket = async () => {
        const response = await axios.delete(`http://localhost:8000/tickets/${documentId}`)
            const success = response.status == 200 
            if (success) window.location.reload()
    }

    return (
        <Box color="blackSecondary" className="delete-block">
            <Box className="delete-icon" onClick={deleteTicket}>
                Ⓧ
            </Box>

        </Box>
    )
}

export default DeleteBlock