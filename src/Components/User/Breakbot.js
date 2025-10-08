import { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";

export default function BreakBot() {
    const [messages, setMessages] = useState([]);

    const getResponse = (input) => {
        const msg = input.toLowerCase();

        if (msg.includes("tired") || msg.includes("sleepy") || msg.includes("exhausted")) {
            return "You sound tired. Try taking a quick nap or rest your eyes for a few minutes.";
        } 
        else if (msg.includes("bored") || msg.includes("lazy") || msg.includes("unmotivated")) {
            return "Feeling bored? Play some music or move around for a bit to get your energy back.";
        } 
        else if (msg.includes("stressed") || msg.includes("anxious") || msg.includes("pressure")) {
            return "Take it easy. Breathe slowly, stretch a little, and give yourself a short pause.";
        } 
        else if (msg.includes("hungry") || msg.includes("snack") || msg.includes("food")) {
            return "Don’t work on an empty stomach. Grab something light to eat or drink some water.";
        } 
        else if (msg.includes("eye") || msg.includes("screen") || msg.includes("blur")) {
            return "If your eyes feel strained, look away from the screen for a few seconds to relax them.";
        } 
        else if (msg.includes("study") || msg.includes("work") || msg.includes("focus")) {
            return "You’ve been focused for a while — take 5 minutes to stretch or grab a drink.";
        } 
        else {
            return "Seems like a good time for a break. Stretch, hydrate, or just relax for a minute.";
        }
    };

    const handleSend = (input) => {
        if (!input.trim()) return;

        const userMsg = { sender: "user", text: input };
        const botMsg = { sender: "bot", text: getResponse(input) };

        setMessages((prev) => [...prev, userMsg, botMsg]);
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: "25rem", backgroundColor: "#f8f9fa" }}>
                <Card.Body>
                    <Card.Title className="text-center mb-3">Break Bot</Card.Title>
                    <ChatWindow messages={messages} />
                    <ChatInput onSend={handleSend} />
                </Card.Body>
            </Card>
        </Container>
    );
}