import request from '../utils/require'

// get
export function getUser(data: any) {
    return request({
        url: 'user/list',
        method: 'get',
        params: data
    })
}

// post
export function postUser(data: any) {
    return request({
        url: 'user/list',
        method: 'get',
        data
    })
}