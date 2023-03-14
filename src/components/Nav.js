import React from 'react'
import { Avatar, Box, Button } from 'dracula-ui'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

    const navigate = useNavigate()

    return (
        <Box color="blackSecondary" className="nav" rounded="sm">
            <Box mr="xs" ml="xs" mt="lg">
                <Avatar
                    title="Count Dracula"
                    src="https://ui.draculatheme.com/static/images/avatar.png"
                />
            </Box>
            <Box>
                <Box mt="lg">
                    <Button m="xs" size="md" color="cyanGreen" onClick={() => navigate('/ticket')}> + </Button>
                </Box>
                <Box mt="xs" mb="lg">
                    <Button m="xs" size="md" color="cyanGreen" onClick={() => navigate('/')}> - </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Nav