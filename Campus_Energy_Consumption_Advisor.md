# Campus Energy Consumption Advisor

## 1. Problem Statement

How might we use AI to analyze and optimize campus electricity usage so that educational institutions become more sustainable and cost-efficient?

## 2. AI-Based Solution

The **Campus Energy Consumption Advisor** is an AI-powered tool designed to help universities reduce energy waste and promote sustainability. It works by:

*   **Analyzing Data**: It processes historical or simulated electricity usage data from campus buildings.
*   **Identifying Patterns**: It detects peak consumption hours and identifies inefficient usage patterns (e.g., lights left on in empty classrooms).
*   **Providing Recommendations**: It generates actionable, simple energy-saving tips tailored to the specific context.
*   **Supporting Sustainability**: It encourages responsible energy habits among students and staff through awareness.

This solution is designed to be a practical, student-friendly web prototype that focuses on data insights rather than complex hardware installations.

## 3. Prototype Workflow

The system follows a simple, linear workflow:

1.  **Energy Consumption Data Input**: usage data (CSV/JSON format representing simplified campus energy metrics) is loaded into the system.
2.  **AI Analysis**: The system uses prompt-based reasoning (via IBM Granite LLM) to interpret the data values.
3.  **Pattern Detection**: The AI identifies spikes (peak hours) and anomalies (potential inefficiencies).
4.  **Recommendation Generation**: Based on the detected patterns, the AI formulates specific sustainability advice.
5.  **User Interaction**: Users ask questions or request reports via a clean chatbot interface.
6.  **Output Insights**: The system displays easy-to-read insights and sustainability tips.

## 4. Sample AI Interactions

**Query 1: Peak Electricity Usage**
*   **User**: "When was the highest electricity consumption recorded this week?"
*   **AI**: "Based on the data, the peak electricity usage occurred on Wednesday between 2:00 PM and 4:00 PM. This coincides with scheduled lab sessions. Consider optimizing HVAC settings during these hours to reduce load."

**Query 2: Reducing Energy Consumption**
*   **User**: "How can we reduce energy waste in the library?"
*   **AI**: "Analysis shows high usage in the library late at night when occupancy is low. I recommend implementing motion-sensor lighting or dimming lights in unoccupied zones after 10:00 PM to save energy."

**Query 3: Comparing Time Periods**
*   **User**: "Compare energy usage between last weekend and this weekend."
*   **AI**: "This weekend's consumption was 15% lower than last weekend's. This reduction correlates with the 'Earth Hour' campaign on campus. Continuing such awareness programs could lead to long-term savings."

## 5. Tech Stack Used

*   **Frontend**: HTML, CSS, JavaScript (Vanilla or simple UI framework)
*   **Backend**: Node.js (Lightweight server for API handling)
*   **AI Layer**: IBM Granite Large Language Model
*   **AI Methods**: Prompt Engineering, Rule-based reasoning
*   **Data Handling**: JSON / CSV (Simulated energy datasets)
*   **Deployment**: Local environment / IBM Cloud (Optional)

## 6. AI Tools & Techniques

*   **IBM Granite LLM**: Utilized as the reasoning engine to interpret raw numerical data and generate human-readable narratives and advice.
*   **Prompt-Based Reasoning**: Instead of training complex Machine Learning regression models, we use structured prompts to ask the LLM to "analyze this dataset and find anomalies," making the prototype easier to build and explain.
*   **No IoT/Real-time Data**: To keep the prototype feasible for a student project, we use simulated historical data rather than expensive live sensors.
*   **Improved Decision Making**: The AI translates abstract numbers into clear instructions, empowering campus administrators to make data-driven decisions for sustainability.

## 7. Responsible AI Considerations

*   **Transparency**: The AI explains *why* a recommendation is made, citing specific data points (e.g., "Because usage spiked at 3 PM...").
*   **Fairness and Non-biased Outputs**: The system focuses purely on utility data, ensuring that recommendations are objective and purely technical, avoiding bias against any specific department or group.
*   **Privacy**: The system processes aggregate building data only; no personal student or staff data is collected or analyzed.
*   **Ethical and Advisory-Only Usage**: The AI acts as an advisor, not a controller. It suggests changes but leaves the final decision to human facilities managers, ensuring safety and human oversight.

## 8. Expected Impact

*   **Environmental**: Significant reduction in carbon footprint by eliminating unnecessary waste (e.g., cooling empty rooms).
*   **Economic**: Lower electricity bills for the institution, allowing funds to be redirected to educational resources.
*   **Social**: Increases awareness of sustainability practices among the student body, potentially inspiring further student-led green initiatives.

## 9. Prototype Summary

The **Campus Energy Consumption Advisor** demonstrates how Generative AI can be applied to solving real-world environmental challenges. Users interact with a simple chat interface to gain insights into complex energy data. By leveraging IBM Granite for intelligent analysis, the system enables even non-technical staff to understand energy patterns and adopt sustainable practices, proving that AI can be a powerful driver for a greener campus.
