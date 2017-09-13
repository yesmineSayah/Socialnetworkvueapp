import Vue from 'vue';
import server from '../config/server.json';

const url = server.url + "/auth";

export function register(user) {
    return new Promise((resolve, reject) => {
        Vue.http.post(url + '/register', user).then((res) => {
            login(user).then(data => {
                resolve(data);
            }).catch(err => {
                reject(err);
            });
        }).catch(err => {
            reject(err.body.error);
        })
    });
}

export function login(user) {
    return new Promise((resolve, reject) => {
        Vue.http.post(url + '/login', user).then((res) => {
            localStorage.setItem('sn_token', res.body.data.token);
            resolve(res.body.data.user);
        }).catch(err => {
            reject(err.body.error);
        });
    });
}

export function getInfo(token) {
    return new Promise((resolve, reject) => {
        Vue.http.get(url + '/info', {
            headers: {
                Authorization: 'bearer ' + token
            }
        }).then((res) => {
            resolve(res.body.data);
        }).catch(err => {
            reject(err.body);
        });
    });
}