# Campus Energy Consumption Advisor ⚡

An AI-powered sustainability project developed as part of the  
**1M1B – IBM SkillsBuild AI for Sustainability Virtual Internship**.

---

## 📌 Project Overview

Educational institutions consume significant amounts of electricity every day across classrooms, laboratories, libraries, hostels, and administrative buildings.  
However, energy usage is often unmanaged due to lack of visibility, awareness of peak hours, and absence of intelligent advisory systems.

The **Campus Energy Consumption Advisor** is a Generative AI–based decision-support prototype that analyzes campus electricity usage data and provides actionable recommendations to reduce energy waste and promote sustainable practices.

---

## ❓ Problem Statement

**How might we use AI to analyze and optimize campus electricity usage so that educational institutions become more sustainable and cost-efficient?**

---

## 🤖 AI-Based Solution

The Campus Energy Consumption Advisor works by:

- **Analyzing Data**  
  Processes historical or simulated electricity usage data from campus buildings.

- **Identifying Patterns**  
  Detects peak consumption hours and inefficient usage patterns (e.g., high usage during low occupancy).

- **Providing Recommendations**  
  Generates clear, actionable energy-saving suggestions tailored to the situation.

- **Promoting Sustainability**  
  Encourages responsible energy habits among students, staff, and administrators.

The system is designed as a **student-feasible web prototype** that focuses on insights and awareness rather than complex hardware or real-time sensors.

---

## 🔄 Prototype Workflow

1. Energy consumption data (CSV / JSON) is loaded into the system  
2. AI performs prompt-based reasoning using the IBM Granite LLM  
3. Usage patterns and anomalies are identified  
4. Sustainability-focused recommendations are generated  
5. Users interact through a chatbot-style interface  
6. Insights and tips are displayed in a simple, understandable format  

---

## 💬 Sample AI Interactions

**User:**  
> When was the highest electricity consumption recorded this week?

**AI:**  
> Based on the data, peak electricity usage occurred on Wednesday between 2:00 PM and 4:00 PM, likely due to scheduled lab sessions. Optimizing HVAC usage during these hours could help reduce energy load.

---

**User:**  
> How can we reduce energy waste in the library?

**AI:**  
> Analysis shows high energy usage late at night when occupancy is low. Dimming lights or reducing HVAC usage after 10:00 PM could significantly save energy.

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Node.js (lightweight server)  
- **AI Layer:** IBM Granite Large Language Model  
- **AI Methods:** Prompt Engineering, Rule-based reasoning  
- **Data Handling:** Simulated CSV / JSON datasets  
- **Deployment:** Local environment / IBM Cloud (optional)

---

## 🧠 AI Tools & Techniques

- **IBM Granite LLM** is used as the reasoning engine to interpret energy usage data and generate human-readable insights.
- **Prompt-based reasoning** replaces complex machine learning models, making the system easier to build, explain, and evaluate.
- **No real-time IoT sensors** are used; the prototype relies on simulated historical data to remain feasible and cost-effective.
- The AI acts as a **decision-support advisor**, not an automated controller.

---

## ⚖️ Responsible AI Considerations

- **Transparency:**  
  The system explains why each recommendation is made, referencing observed usage patterns.

- **Fairness:**  
  Recommendations are based purely on aggregate energy data and do not target specific individuals or groups.

- **Privacy:**  
  No personal or sensitive student or staff data is collected or processed.

- **Ethical Use:**  
  The AI provides guidance only; final decisions remain with human administrators.

---

## 🌍 Expected Impact

- **Environmental Impact:**  
  Reduced energy wastage and lower carbon footprint.

- **Economic Impact:**  
  Decreased electricity costs for institutions.

- **Social Impact:**  
  Increased awareness of sustainable energy practices among the campus community.

---

## 📊 SDG Alignment

- **Primary SDG:** SDG 7 – Affordable and Clean Energy  
- **Secondary SDGs:**  
  - SDG 11 – Sustainable Cities and Communities  
  - SDG 12 – Responsible Consumption and Production  

---

## 🧪 Project Status

This project is a **functional prototype** created for learning and demonstration purposes as part of the IBM SkillsBuild AI for Sustainability program.

---

## 👤 Author

**Rushitha Adepu**  
Student | AI & Sustainability Enthusiast  

---

## 📄 License

This project is intended for educational and non-commercial use.
