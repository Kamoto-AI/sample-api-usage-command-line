const axios = require('axios');

const postUrl = 'https://api.kamoto.ai/v1/chat-completions';


//loading Chanakya's AI Character
const headers = {
  'Content-Type': 'application/json',
  'x-api-key': '576799f8-05eb-47ac-a9e9-ea0f987d6c2d',
  'x-personality-id': '7342e580-b59d-44a9-93c8-e60a5e013eab',
};

const body = {
  messages: [
    {
      role: 'user',
      content: 'Hi',
    },
    {
      role: 'character',
      content: 'Hello!',
    },
    {
      role: 'user',
      content: 'Who are you?',
    },
  ],
};

// Define an async function to use await
async function fetchResponse() {
  try {
    const response = await axios.post(postUrl, body, { headers });
    console.log(response.data.choices[0].message.content);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the async function to fetch the response
fetchResponse();
