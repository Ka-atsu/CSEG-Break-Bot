import { useState } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";

export default function BreakBot() {
    const [messages, setMessages] = useState([]);

    const getResponse = (text) => {
        const lower = text.toLowerCase();

        if (lower.includes("tired") || lower.includes("sleepy")) {
            return "You sound tired. Maybe take a short nap or just close your eyes for a few minutes.";
        } else if (lower.includes("bored") || lower.includes("lazy")) {
            return "Bored already? Try playing some music or move around a bit to reset your mood.";
        } else if (lower.includes("stressed") || lower.includes("anxious")) {
            return "Take it slow. Breathe in, breathe out. Maybe stretch or just step away from your desk for a bit.";
        } else if (lower.includes("hungry") || lower.includes("snack")) {
            return "Grab a quick bite or drink some water. Your brain needs fuel too.";
        } else if (lower.includes("eye") || lower.includes("screen")) {
            return "Your eyes need a short break. Look at something far away for a few seconds.";
        } else if (lower.includes("study") || lower.includes("work")) {
            return "You’ve been at it for a while. Take 5 minutes to stretch or walk around.";
        } else {
            return "Maybe it’s time for a small break — stretch, drink water, or just chill for a bit.";
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