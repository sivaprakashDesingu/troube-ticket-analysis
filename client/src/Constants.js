const channelOption = [
    { label: "Web", value: "Web" },
    { label: "Mobile-App", value: "mobile-app" },
    { label: "Live-Chat", value: "live-chat" },
    { label: "ChatBot", value: "chatbot" },
    { label: "Email", value: "email" }
]

const priorityOption = [
    { label: "High", value: "high" },
    { label: "Medium", value: "medium" },
    { label: "Low", value: "low" },

]

const calltypeOption = [
    { value: "inbound", label: "Inbound" },
    { value: "outbound", label: "Outbound" },
    { value: "disconnect", label: "Disconnect" },
    { value: "transfer", label: "Transfer" },
    { value: "call back", label: "Call back" },
    { value: "queue transfer", label: "Queue transfer" }
]
const agentOption = [
    { value: "701", label: "701" },
    { value: "702", label: "702" },
    { value: "703", label: "703" },
    { value: "704", label: "704" },
    { value: "705", label: "705" },
    { value: "706", label: "706" },
    { value: "707", label: "707" },
    { value: "708", label: "708" },
    { value: "709", label: "709" },
    { value: "710", label: "710" },
    { value: "711", label: "711" },
    { value: "712", label: "712" }
]

const serviceCategoryOption = [
    { value: "network", label: "Network" },
    { value: "billing", label: "Billing" },
    { value: "login problem", label: "Login Problem" },
    { value: "wifi-issue", label: "Wifi Issue" },
    { value: "reconnection", label: "Reconnection" },
    { value: "others", label: "Others" }
]
export {
    channelOption,
    priorityOption,
    calltypeOption,
    agentOption,
    serviceCategoryOption
}

