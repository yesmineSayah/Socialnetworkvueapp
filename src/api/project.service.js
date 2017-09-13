import Vue from 'vue';
import server from '../config/server.json';

const url = server.url + "/api/projects";

export function getAll() {
    return Vue.http.get(url);
}

export function add(project) {
    return Vue.http.post(url, project);
}

export function update(id, project) {
    delete project._id;
    return Vue.http.put(url + "/" + id, project, {
        headers: {
            Authorization: 'bearer ' + localStorage.sn_token
        }
    });
}

export function getById(id) {
    return Vue.http.get(url + "/" + id);
}