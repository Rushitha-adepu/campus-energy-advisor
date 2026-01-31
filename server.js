const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// Load Data
const dataPath = path.join(__dirname, 'data', 'energy_data.json');
let energyData = [];

try {
    const rawData = fs.readFileSync(dataPath);
    energyData = JSON.parse(rawData);
    console.log('Energy data loaded successfully.');
} catch (error) {
    console.error('Error loading energy data:', error);
}

// Simulated IBM Granite LLM / AI Analysis Service
// In a real production scenario, this would call the IBM Watson/Granite API.
// For this prototype, we simulate the 'Prompt-based reasoning' using advanced keyword matching and data aggregation
// to demonstrate how the AI would construct a response based on the dataset.

const generateAIResponse = (query, data) => {
    const lowerQuery = query.toLowerCase();
    
    // Simulate "Prompting" the system with context
    // System Prompt: "You are an Energy Advisor. Analyze the following JSON data and answer the user's question."
    
    if (lowerQuery.includes('peak') || lowerQuery.includes('highest')) {
        // AI Logic: Find max usage object
        const maxUsage = data.reduce((prev, current) => (prev.usage_kwh > current.usage_kwh) ? prev : current);
        return `Based on my analysis of the campus energy logs, the **peak electricity usage** was recorded on **${maxUsage.day}, ${maxUsage.date}** at **${maxUsage.peak_hour}** in the **${maxUsage.building}**. The consumption reached **${maxUsage.usage_kwh} kWh**. \n\n**Recommendation**: usage seems to spike during scheduled lab hours. Consider analyzing equipment efficiency or rescheduling some high-load activities to off-peak hours.`;
    }
    
    if (lowerQuery.includes('reduce') || lowerQuery.includes('save') || lowerQuery.includes('lower')) {
        // AI Logic: Identify inefficiencies (e.g., high usage with low occupancy or general tips)
        return `To **reduce energy consumption**, my analysis suggests focusing on the **Main Auditorium** and **Library** during off-hours. \n\n1. **Smart Lighting**: Install motion sensors in the library stacks.\n2. **HVAC Optimization**: The data shows the Auditorium is climatized even on days with "Low" occupancy (e.g., ${data.find(d => d.occupancy_rate === 'Low')?.date || 'recent dates'}). \n\nImplementing these changes could reduce waste by approximately 15%.`;
    }

    if (lowerQuery.includes('compare')) {
         // AI Logic: Compare weekend vs weekday
         const weekdays = data.filter(d => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(d.day));
         const weekends = data.filter(d => ['Saturday', 'Sunday'].includes(d.day));
         
         const avgWeekday = weekdays.reduce((acc, curr) => acc + curr.usage_kwh, 0) / weekdays.length || 0;
         const avgWeekend = weekends.reduce((acc, curr) => acc + curr.usage_kwh, 0) / weekends.length || 0;

         return `Comparing typical periods:\n- **Average Weekday Usage**: ${Math.round(avgWeekday)} kWh\n- **Average Weekend Usage**: ${Math.round(avgWeekend)} kWh\n\nThe weekend consumption is significantly lower, which is expected. However, the baseline load of ${Math.round(avgWeekend)} kWh seems frequent for empty buildings. Check for "phantom loads" or equipment left in standby mode over the weekend.`;
    }
    
    // Default / Fallback response logic (Rule-based)
    return `I received your query: "${query}". \n\nAs the **Campus Energy Consumption Advisor**, I can help you analyze usage patterns. \n\nTry asking me about:\n- Peak usage times\n- How to reduce consumption\n- Comparisons between days or buildings`;
};

// API Endpoint for AI Chat
app.post('/api/chat', (req, res) => {
    const { message } = req.body;
    
    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    // Simulate AI processing delay
    setTimeout(() => {
        const response = generateAIResponse(message, energyData);
        res.json({ response });
    }, 1000); // 1 second artificial delay for "thinking" feel
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
