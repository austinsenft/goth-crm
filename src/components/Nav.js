import React from 'react'
import { Avatar, Box, Button } from 'dracula-ui'
import { useNavigate } from 'react-router-dom'

const Nav = () => {

    const navigate = useNavigate()

    return (
        <Box className="nav" rounded="lg">
            <Box mr="xs" mt="xs">
                <Avatar
                    title="Count Dracula"
                    src="https://ui.draculatheme.com/static/images/avatar.png"
                />
            </Box>
            <Box>
                <Box mt="lg">
                    <Button m="xs" size="md" color="cyan" onClick={() => navigate('/ticket')}> + </Button>
                </Box>
                <Box mt="xs" mb="lg">
                    <Button m="xs" size="md" color="cyan" onClick={() => navigate('/')}> - </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Nav