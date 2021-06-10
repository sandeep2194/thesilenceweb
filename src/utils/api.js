import axios from 'axios';

const baseUrl = 'http://35.154.138.197:8080/api'
// const mockApi = 'https://6a630fbc-dff3-41ea-9491-5b59538be693.mock.pstmn.io'

export async function fetchNews(pageNo, pageSize) {
    try {
        const url = `${baseUrl}/news?pageNo=${pageNo}&pageSize=${pageSize}`
        const res = await axios.get(url)
        return res.data
    } catch (error) {
        console.error(error)
    }
}
export async function fetchNewsByAuthor(id, pageNo, pageSize) {
    try {
        const token = localStorage.getItem('token')
        const url = `${baseUrl}/news/author/${id}?pageNo=${pageNo}&pageSize=${pageSize}`
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'Authorization': 'Bearer ' + token.toString(),
            }
        })
        return res.data
    } catch (error) {
        console.error(error)
    }
}
export async function getOtp(phoneNumber) {
    const url = `${baseUrl}/getOTP?phoneNumber=${phoneNumber}`

    const res = await axios.get(url)
    return res.data
}

export async function verifyOtp(phoneNumber, OTP) {
    const url = `${baseUrl}/authenticate`
    const body = {
        "userName": phoneNumber,
        "password": OTP,
    }
    const res = await axios({
        method: 'POST',
        url: url,
        data: { ...body },
    })

    return res.data
}

export async function interaction(postId, interactionStr, body) {
    const token = localStorage.getItem('token')
    const url = `${baseUrl}/posts/${postId}/${interactionStr}`
    const res = await axios({
        method: 'POST',
        url: url,
        data: { ...body },
        headers: {
            'Authorization': 'Bearer ' + token.toString(),
        }
    })
    return res.data
}

export async function fetchUser(id) {
    const token = localStorage.getItem('token')
    const url = `${baseUrl}/userInfo?userIdOp=${id}`

    const res = await axios({
        method: 'get',
        url: url,
        headers: {
            'Authorization': 'Bearer ' + token.toString(),
        }
    })
    return res.data
}