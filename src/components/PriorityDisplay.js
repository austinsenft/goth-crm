import React from 'react'
import {  Box } from 'dracula-ui'

const PriorityDisplay = ({ priority }) => {
    return (
        <Box className="priority-display">
            <Box className="star-container"> 
            {/* come back to this. need color of stars to change based on priority */}
                <h3 style={{color: priority >=1 ? 'rgb(253, 253, 150)' : '' }}>⭑</h3>

                <h3 style={{color: priority >=2 ? 'rgb(253, 253, 150)' : '' }}>⭑</h3>

                <h3 style={{color: priority >=3 ? 'rgb(253, 253, 150)' : '' }}>⭑</h3>

                <h3 style={{color: priority >=4 ? 'rgb(253, 253, 150)' : '' }}>⭑</h3>

                <h3 style={{color: priority >=5 ? 'rgb(253, 253, 150)' : '' }}>⭑</h3>
            </Box>

        </Box>
    )
}

export default PriorityDisplay