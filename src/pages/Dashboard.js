import React from 'react'
import TicketCard from '../components/TicketCard'
import { Anchor, Box, Text} from 'dracula-ui'

const Dashboard = () => {

    const tickets = [
        {
            category: 'Q1 2023', 
            color: 'red',
            title: 'NFT Safety Video',
            owner: 'Austin Senft',
            avatar: 'https://ui.draculatheme.com/static/images/avatar.png', 
            status: 'done', 
            priority: 5, 
            progress: 40, 
            description: 'Make video showing how to work with NFTs safely.', 
            timestamp: '2023-03-11T07:36:17+0000'
        },
        {
            category: 'Q1 2023', 
            color: 'red',
            title: 'Build and sell ai model',
            owner: 'Austin Senft',
            avatar: 'https://ui.draculatheme.com/static/images/avatar.png', 
            status: 'working on it', 
            priority: 2, 
            progress: 70, 
            description: 'Make video about AI', 
            timestamp: '2023-03-13T07:36:17+0000'
        }, 
        {
            category: 'Q2 2023', 
            color: 'blue',
            title: 'Build a bot',
            owner: 'Austin Senft',
            avatar: 'https://ui.draculatheme.com/static/images/avatar.png', 
            status: 'working on it', 
            priority: 3, 
            progress: 10, 
            description: 'Make video about making a bot', 
            timestamp: '2023-03-15T07:36:17+0000'
        }
    ]

    // returning unique categories from Data. Q1, Q2, etc
    const uniqueCategories = [
        ...new Set(tickets?.map(({ category}) => category))
    ]
    console.log(uniqueCategories)

    return (
        <Box color="black" className="dashboard">
            <Anchor href="#" color="purple" hoverColor="yellowPink" mb="sm">
                My Projects
            </Anchor>
            <Box className={"ticket-container"}>
                {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                    <Box key={categoryIndex}>
                        <Text size="lg">{uniqueCategory}</Text>
                        {tickets.filter(ticket => ticket.category === uniqueCategory)
                            .map((filteredTicket, ticketIndex) => (
                                <TicketCard
                                    color={filteredTicket.color}
                                    ticket={filteredTicket}
                                />
                            ))
                        }
                    </Box>
                ))}
            </Box>
        </Box>
    )
}

export default Dashboard