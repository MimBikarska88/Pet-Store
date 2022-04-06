import { html } from '../../node_modules/lit-html/lit-html.js';
import * as petService from '../services/petService.js';

const editTemplate = (editHandler, pet) => html `
<section id="editPage">
    <form class="editForm" @submit=${editHandler}>
        <img src="./images/editpage-dog.jpg">
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" .value=${pet.name}>
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" .value=${pet.breed}>
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" .value=${pet.age}>
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" .value=${pet.weight}>
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" .value=${pet.image}>
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
</section>`;


export const editView = (ctx) => {
    const editHandler = (event) => {
        event.preventDefault();
        let form = new FormData(event.target);
        let name = form.get('name');
        let breed = form.get('breed');
        let age = form.get('age');
        let weight = form.get('weight');
        let image = form.get('image');

        if (name == '' || breed == '' || age == '' || weight == '' || image == '') {
            alert('All fields must be filled');
            return;
        }

        petService.editPet(ctx.params.petId, { name, breed, age, weight, image })
            .then(pet => {
                ctx.page.redirect(`/pets/${ctx.params.petId}/details`);
            })
            .catch(err => alert(err));
    }
    petService.getPet(ctx.params.petId)
        .then(p => {
            ctx.render(editTemplate(editHandler, p));
        })
        .catch(err => alert(err));
}