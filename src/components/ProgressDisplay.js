
import {  Box, Card} from 'dracula-ui'

const ProgressDisplay = ({ progress }) => {
    return (

        <Box color="blackSecondary"  className="progress-display">
            <Card
                
                color="pinkPurple" m="sm"
                className="progress-indicator"
                style={{ width: progress + '%'}}
                
            >
            </Card>
        </Box>
    )
}

export default ProgressDisplay