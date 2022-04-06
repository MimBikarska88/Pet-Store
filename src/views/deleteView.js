import * as petService from '../services/petService.js';
export const deleteView = (ctx) => {
    let agreement = confirm('Are you sure you want to delete it?');
    if (agreement) {
        petService.deletePet(ctx.params.petId)
            .then(pet => {
                ctx.page.redirect('/');
            })
            .catch(err => alert(err));
    }
}