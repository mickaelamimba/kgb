import axios from 'axios'

export const CustomAxios =axios.create(
    {
        baseURL:'/',
        headers: {
            'Content-Type': 'application/json',
            accept:'application/json'
        },
        validateStatus: function (status) {
            return status >= 200 && status < 300; // default
        }

    }
)






