import axios from 'axios';

const baseUrl = 'http://35.154.138.197:8080/api'

export async function fetchNews(pageNo, pageSize) {
    try {
        const url = `${baseUrl}/news?pageNo=${pageNo}&pageSize=${pageSize}`
        const res = await axios.get(url)
        return res.data
    } catch (error) {
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