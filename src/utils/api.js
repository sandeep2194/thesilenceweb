const baseUrl = 'http://revivosocialjavabackend-env.eba-cpehram2.ap-south-1.elasticbeanstalk.com'

export async function fetchNews(pageNo, pageSize) {
    try {
        const url = `${baseUrl}/news?pageNo=${pageNo}&pageSize=${pageSize}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const json = response.json()
        return json
    } catch (error) {
        console.warn(error)
    }
}

export async function getOtp(phoneNumber) {
    const url = `${baseUrl}/getOTP?phoneNumber=${phoneNumber}`
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const json = response.json()
    return json
}

export async function verifyOtp(phoneNumber, OTP) {
    const url = `${baseUrl}/authenticate`
    const body = {
        "userName": phoneNumber,
        "password": OTP,
    }
    const response = await fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body)
    });
    const json = response.json()
    return json
}

export async function updateReaction(fieldName, value, id) {
    const url = 'http://13.233.129.14/parse/classes/NewsPost/' + id;
    const body = {};
    body[fieldName] = value;
    const response = await fetch(url, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'X-Parse-Application-Id': 'myappID',
        },
        body: JSON.stringify(body)
    });
    return response.json();
}