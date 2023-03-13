import React from 'react'
import { Link } from 'react-router-dom'
import AvatarDisplay from "./AvatarDisplay"
import StatusDisplay from "./StatusDisplay"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import DeleteBlock from "./DeleteBlock"

import { Box, Anchor } from 'dracula-ui'


const TicketCard = ({ color, ticket }) => {
    return (

        <Box className="ticket-card">

            <Box className="ticket-color"style={{ backgroundColor: color }}></Box>

            <Link to={`/ticket/${ticket.documentId}`} id="link">
                <Box color="pinkPurple"  >
                    <Anchor color="black" hoverColor="cyan" >
                        {ticket.title}
                    </Anchor>
                </Box>
                <AvatarDisplay ticket={ticket} />
                <StatusDisplay status={ticket.status} />
                <PriorityDisplay priority={ticket.priority} />
                <ProgressDisplay progress={ticket.progress} />
            </Link>
            <DeleteBlock />


        </Box>
    )
}

export default TicketCard
