import axios from 'axios';

const baseUrl = 'http://13.232.209.83:8080/api'
// const mockApi = 'https://6a630fbc-dff3-41ea-9491-5b59538be693.mock.pstmn.io'

export async function fetchNews(pageNo, pageSize) {
    try {
        const url = `${baseUrl}/news?pageNo=${pageNo}&pageSize=${pageSize}`
        const headers = {
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
        }
        const res = await axios.get(url, headers)
        return res.data
    } catch (error) {
        console.error(error)
    }
}
export async function fetchNewsByAuthor(id, pageNo, pageSize) {
    const token = localStorage.getItem('token')
    const url = `${baseUrl}/news/author/${id}?pageNo=${pageNo}&pageSize=${pageSize}`
    const res = await axios({
        method: 'GET',
        url: url,
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    })
    return res
}

export async function fetchBookmarks() {
    const token = localStorage.getItem('token')
    const url = `${baseUrl}/bookmarks`
    const res = await axios({
        method: 'GET',
        url: url,
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    })
    return res
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
            'Authorization': 'Bearer ' + token,
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
            'Authorization': 'Bearer ' + token,
        }
    })
    return res.data
}
export async function postUser(userObj) {
    const token = localStorage.getItem('token')
    const url = `${baseUrl}/userInfo`

    const res = await axios({
        method: 'post',
        url: url,
        headers: {
            'Authorization': 'Bearer ' + token,
        },
        data: { ...userObj }
    })
    return res.data
}

export async function uploadFile(file) {
    let formData = new FormData();
    formData.append("files", file);
    const token = localStorage.getItem('token')
    const url = `${baseUrl}/upload`
    const res = await axios({
        method: 'post',
        url: url,
        headers: {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'multipart/form-data'
        },
        data: formData
    })

    return res.data
}

export const userNameValidation = async (username) => {
    // Res from backend will be flag at res.data.success, true for 
    // username good, false otherwise
    const token = localStorage.getItem('token')
    const url = `${baseUrl}/checkUsernameAvailability?username=${username}`
    const res = await axios({
        method: 'get',
        url: url,
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })

    return res.data
}

export const followUser = async (userId) => {
    const token = localStorage.getItem('token')
    const url = `${baseUrl}/follow?followingUserId=${userId}`
    const res = await axios({
        method: 'post',
        url: url,
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    })
    return res.data
}

export const getFollowers = async (userId) => {
    const token = localStorage.getItem('token')
    const url = `${baseUrl}/followers?followingUserId=${userId}`
    const res = await axios({
        method: 'get',
        url: url,
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    })
    return res.data
}

export const getFollowings = async (userId) => {
    const token = localStorage.getItem('token')
    const url = `${baseUrl}/followings?userId=${userId}`
    const res = await axios({
        method: 'get',
        url: url,
        headers: {
            'Authorization': 'Bearer ' + token
        }
    })
    return res.data
}