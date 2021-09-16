import axios from "axios";


// export const API = {
//     profileAPI: {
//         getProfileAPI(id: string) {
//             return axiosInstance.get(`profile/${id}`).then(response => response.data)
//         },
export const RequestAPI = {
    postRequest(checked: boolean) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', {success: checked}).then(response => response.data

        )
    }
}