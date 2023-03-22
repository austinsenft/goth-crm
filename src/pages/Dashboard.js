
import { useState, useEffect, useContext } from 'react'
import TicketCard from '../components/TicketCard'
import { Anchor, Box, Text, Divider } from 'dracula-ui'
import axios from 'axios'
import CategoriesContext from '../context'

const Dashboard = () => {

    const [tickets, setTickets] = useState(null)
    const { categories, setCategories } = useContext(CategoriesContext)

    useEffect( () => {

        const getResponse = async () => {
            const response = await axios.get('http://localhost:8000/tickets')
            const dataObject = response.data.data

            const arrayOfKeys = Object.keys(dataObject)
            const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key])
            const formattedArray = [] 
            arrayOfKeys.forEach((key, index) => {
                const formattedData = { ...arrayOfData[index]}
                formattedData['documentId'] = key 
                formattedArray.push(formattedData)
            })
            setTickets(formattedArray)
        } 
        getResponse().catch(console.error)
    }, [])

    useEffect(() => {
        setCategories([...new Set(tickets?.map(({ category}) => category))])
    }, [tickets])

    const colors = [
        'rgb(255,179,186)',
        'rgb(255,223,186)',
        'rgb(255,255,186',
        'rgb(186,255,281)',
        'rgb(186,255,255)'
    ]

    // returning unique categories from Data. Q1, Q2, etc
    const uniqueCategories = [
        ...new Set(tickets?.map(({ category }) => category)),
    ]
    

    return (
        <Box color="black" className="dashboard">
            <Anchor href="#" color="pinkPurple" hoverColor="cyanGreen" > My Projects </Anchor>
            <Box mb="sm" mt="sm"> <Divider color="purple" /> </Box>
                
            <Box className="ticket-container" >
                {tickets && 
                    uniqueCategories?.map((uniqueCategory, categoryIndex) => (
                    <Box m="sm" key={categoryIndex}>
                        <Text size="lg">{uniqueCategory}</Text>
                        {tickets
                            .filter(ticket => ticket.category === uniqueCategory)
                            .map((filteredTicket, ticketIndex) => (
                                <TicketCard
                                    key={ticketIndex}
                                    // id={ticketIndex} 
                                    color={colors[categoryIndex] || colors[0]}
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