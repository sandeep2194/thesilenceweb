import axios from 'axios';

const baseUrl = 'http://35.154.138.197:8080/api'

export async function fetchNews(pageNo, pageSize) {
    try {
        const url = `${baseUrl}/news?pageNo=${pageNo}&pageSize=${pageSize}`
        const res = await axios.get(url)
        return res.data
    } catch (error) {
        console.warn('laal' + error)
    }
}

export async function getOtp(phoneNumber) {
    const url = `${baseUrl}/getOTP?phoneNumber=${phoneNumber}`
    const headers = {
        'Accept': '*/*'
    }
    const res = await axios.get(url, headers)
    return res.data
}

export async function verifyOtp(phoneNumber, OTP) {
    const url = `${baseUrl}/authenticate`
    const body = {
        "userName": phoneNumber,
        "password": OTP,
    }
    const res = await axios.post(url, body)

    return res.data
}

export async function interaction(postId, interactionStr, body) {
    const token = localStorage.getItem('token')
    console.log(token)
    const url = `${baseUrl}/posts/${postId}/${interactionStr}`
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token.toString(),
        'Accept': '*/*'
    }
    const res = await axios.post(url, body, headers)
    return res.data
}