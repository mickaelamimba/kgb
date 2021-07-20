import axios from 'axios'

export const CustomAxios =axios.create(
    {
        baseURL:'/',
        headers: { 'Content-Type': 'application/ld+json'}

    }
)






export { }