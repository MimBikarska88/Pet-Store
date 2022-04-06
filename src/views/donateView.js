import * as donationService from '../services/donationService.js';
export const donateView = (ctx) => {
    donationService.donateToPet(ctx.params.petId)
        .then(donation => console.log(donation))
        .catch(err => alert(err));
}