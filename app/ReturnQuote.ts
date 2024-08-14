import quotes from "../quotes.js";

export const ReturnQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
}