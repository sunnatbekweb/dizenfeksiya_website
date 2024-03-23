import axios from "axios"

const baseUrl = "https://api.telegram.org/bot6545590703:AAH_T84AjGMPXtYdOQk2NUGpTf_-YnNpFBc/"

export const sendData = async (message: string): Promise<void> => {
    const url = `${baseUrl}sendMessage?chat_id=-1002004692144&text=${message}`

    axios.post(url)
}