import React from 'react'
import { Link } from 'react-router-dom'
import AvatarDisplay from "./AvatarDisplay"
import StatusDisplay from "./StatusDisplay"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import DeleteBlock from "./DeleteBlock"

import { Card, Text, Box, Anchor } from 'dracula-ui'


const TicketCard = ({ color, ticket }) => {
    return (

        <Box className="ticket-card">
            <Card display="flex" width="full" variant="subtle" color="pinkPurple" p="sm" m="sm" rounded="lg">

                <Box color="purple" rounded="sm">
                    <Text> Derp </Text>
                </Box>

                <Link to={`/ticket/${ticket.documentId}`} id="link">
                    <Anchor>{ticket.title} </Anchor>
                    <AvatarDisplay ticket={ticket}/>
                    <StatusDisplay status={ticket.status} />
                    <PriorityDisplay />
                    <ProgressDisplay />
                </Link>
                <DeleteBlock />
            </Card>
        </Box>
    )
}

export default TicketCard
