import axios from "axios"

const http = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

// O mesmo que é feito no services do back-end com SQL manipula e retorna
export const api = {
    getAllPost: async () => {
        let req = await http.get('posts')
        return req.data
    },

    addNewPost: async (title: string, body: string, userId: number) => {
        let req = await http.post('/posts', {
            title: title,
            body: body,
            userId: userId
        })
        return req.data
    }
}
