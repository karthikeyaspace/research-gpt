import { MessageType } from "./types"

const storeChat = (messages: MessageType[]) => {
    localStorage.setItem('chat', JSON.stringify(messages))
}

const clearChat = () => {
    localStorage.removeItem('chat')
}

const getChat = () => {
    return JSON.parse(localStorage.getItem('chat') || '[]')
}

export {
    storeChat,
    clearChat,
    getChat
}