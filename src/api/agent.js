import API_KEY from "../assets/.env";
import axios from "axios";

axios.get("https://api.openai.com/v1/chat/completions", {
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + API_KEY,
    },
    data: JSON.stringify(requestBody)
})