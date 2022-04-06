import * as userService from '../services/userService.js';

const baseUrl = 'http://localhost:3030/data/pets';

export const getAll = () =>
    fetch(`${baseUrl}?sortBy=_createdOn%20desc&distinct=name`)
    .then(res => res.json());

export const createPet = (pet) =>
    fetch(`${baseUrl}`, {
        method: 'post',
        headers: {
            'X-Authorization': userService.getUser().accessToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pet)
    })
    .then(res => res.json());

export const getPet = (petId) =>
    fetch(`${baseUrl}/${petId}`)
    .then(res => res.json());

export const editPet = (petId, petInfo) =>
    fetch(`${baseUrl}/${petId}`, {
        method: 'put',
        headers: {
            'X-Authorization': userService.getUser().accessToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(petInfo)
    })
    .then(res => res.json());

export const deletePet = (petId) =>
    fetch(`${baseUrl}/${petId}`, {
        method: 'delete',
        headers: {
            'X-Authorization': userService.getUser().accessToken,
        }
    })
    .then(res => res.json());