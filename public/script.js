const chatHistory = document.getElementById('chatHistory');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Helper: Auto-scroll to bottom of chat
const scrollToBottom = () => {
    chatHistory.scrollTop = chatHistory.scrollHeight;
};

// Helper: Create message element
const createMessageElement = (content, type) => {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', type);

    // Avatar
    const avatar = document.createElement('div');
    avatar.classList.add('avatar');
    avatar.textContent = type === 'user-message' ? '👤' : '🤖';

    // Content Bubble
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content');

    // Simple formatter for bold text/markdown style from AI
    if (type === 'ai-message') {
        // Convert **bold** to <strong>
        let formattedContent = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        // Convert newlines to <br>
        formattedContent = formattedContent.replace(/\n/g, '<br>');
        contentDiv.innerHTML = formattedContent;
    } else {
        contentDiv.textContent = content;
    }

    msgDiv.appendChild(avatar);
    msgDiv.appendChild(contentDiv);

    return msgDiv;
};

// Function: Send Message
async function sendMessage() {
    const text = userInput.value.trim();
    if (!text) return;

    // 1. Add User Message
    chatHistory.appendChild(createMessageElement(text, 'user-message'));
    userInput.value = '';
    scrollToBottom();

    // 2. Show Loading/Thinking Indicator
    const loadingId = 'loading-' + Date.now();
    const loadingMsg = createMessageElement('Analyzing data...', 'ai-message');
    loadingMsg.id = loadingId;
    chatHistory.appendChild(loadingMsg);
    scrollToBottom();

    try {
        // 3. Call API
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: text })
        });

        const data = await response.json();

        // 4. Remove Loading & Add AI Response
        const loadingEl = document.getElementById(loadingId);
        if (loadingEl) loadingEl.remove();

        chatHistory.appendChild(createMessageElement(data.response, 'ai-message'));
        scrollToBottom();

    } catch (error) {
        console.error('Error:', error);
        const loadingEl = document.getElementById(loadingId);
        if (loadingEl) loadingEl.remove();

        chatHistory.appendChild(createMessageElement('⚠️ Error: Could not connect to the Energy Advisor system. Please make sure the server is running.', 'ai-message'));
        scrollToBottom();
    }
}

// Support hitting 'Enter' to send
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Quick Prompts Handler
function sendQuickPrompt(promptText) {
    userInput.value = promptText;
    sendMessage();
}
