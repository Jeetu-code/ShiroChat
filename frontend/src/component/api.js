import axios from "axios";

const API_KEY = "AIzaSyDhTadM1Ylwd-5BhIAdjLxBJsO5LYZLSFU"

export const sendMessageToAI  = async(msg)=>{
    try{

        const res = await axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${API_KEY}`,{
            contents:[{parts:[{text:msg}]}],
        }
    );
    const reply =  res.data.candidates?.[0]?.content.parts[0].text;

    return reply || "no response from ai"
}
catch(error){
console.error("API Error:", error.response?.data || error.message);return "Error: Ai is not responding"
}
}
