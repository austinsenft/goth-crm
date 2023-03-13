import React from 'react'
import {  Box } from 'dracula-ui'

const DeleteBlock = () => {

    const deleteTicket = () => {
        console.log('deleted')
    }

    return (
        <Box className="delete-block">
            <Box className="delete-icon" onClick={deleteTicket}>
                Ⓧ
            </Box>

        </Box>
    )
}

export default DeleteBlock