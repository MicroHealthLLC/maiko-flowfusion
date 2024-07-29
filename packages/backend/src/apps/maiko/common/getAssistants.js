import axios from 'axios';

export default async function getAssistants() {
    try {
        const response = await axios.get(`${process.env.MAIKO_URL}/api/getAssistantList`);
        
        if (response.status !== 200) {
            throw new Error('Network response was not ok');
        }
        
        const data = response.data;
        const bots = data.map((bot) => ({
            value: bot.id,
            label: bot.name,
        }));
        
        return bots;
    } catch (error) {
        console.error('Error making API request:', error);
        return null;
    }
}