import * as userService from '../services/userService.js';
const baseUrl = `http://localhost:3030/data/donation`;

export const donateToPet = (petId) =>
    fetch(`${baseUrl}`, {
        method: 'post',
        headers: {
            'X-Authorization': userService.getUser().accessToken,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ petId })
    })
    .then(res => res.json());
export const getPetDonations = (petId) =>
    fetch(`${baseUrl}?where=petId%3D%22${petId}%22&distinct=_ownerId&count`)
    .then(res => res.json());