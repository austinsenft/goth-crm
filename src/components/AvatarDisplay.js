import React from 'react'
import { Box } from 'dracula-ui'
import blankAvatar from '../images/avatar.png'



const AvatarDisplay = ({ ticket }) => {
    return (
        <Box color="blackSecondary"  className="avatar-container">
            <Box className="img-container">
                <img src={ticket.avatar ? ticket.avatar : blankAvatar}
                    alt={'photo of' + ticket.owner}
                />
            </Box>

        </Box>
    )
}

export default AvatarDisplay