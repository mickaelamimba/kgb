import axios from 'axios'

export const CustomAxios =axios.create(
    {
        baseURL:'/',
        headers: { 'Content-Type': 'application/ld+json'}

    }
)

const addInterceptors = (axios) => {
    axios.interceptors.response.use((response) => {

        return response

    }, error => {

        if (error.response && error.response.status === 404) {

            return Promise.reject(`La page n'existe pas`)
        }
        return Promise.reject(error)
    })
}
const DisplayMessage = ({ message, backgroundColor }) => {
    return (
        <div style={{ backgroundColor, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <p style={{ color: 'white' }}>{message}</p>
        </div>
    )
}
const DisplayError = ({ message }) => {
    return (
        <DisplayMessage message={message} backgroundColor='#d9534f' />
    )
}
const DisplayValidRequest = ({ message }) => {
    return (
        <DisplayMessage message={message} backgroundColor='#5cb85c' />
    )
}

export {addInterceptors,DisplayError ,DisplayValidRequest }