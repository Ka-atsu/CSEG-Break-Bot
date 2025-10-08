import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function ChatInput({ onSend }) {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSend(input);
        setInput("");
    };

    return (
    <Form onSubmit={handleSubmit}>
        <div className="d-flex">
            <Form.Control
                type="text"
                placeholder="Say something..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSubmit(e)}
            />
            <Button variant="primary" className="ms-2" onClick={handleSubmit}>
                Send
            </Button>
        </div>
    </Form>
    );
}