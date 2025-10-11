export default function ChatWindow({ messages }) {
    return (
        <div
            className="border rounded p-3 mb-3"
            style={{
            height: "25rem",
            overflowY: "auto",
            backgroundColor: "#ffffff",
            }}
        >
            {messages.map((msg, i) => (
            <div key={i} className={`mb-2 ${msg.sender === "user" ? "text-end" : "text-start"}`}>
                <span
                className={`d-inline-block px-3 py-2 rounded ${
                    msg.sender === "user" ? "bg-primary text-white" : "bg-light border"
                }`}
                >
                {msg.text}
                </span>
            </div>
            ))}
        </div>
    );
}