import { html } from '../../node_modules/lit-html/lit-html.js';
import * as petService from '../services/petService.js';

const noPets = () => html `
<div>
<p class="no-pets">No pets in dashboard</p>
</div>`;

const petTemplate = (pet) => html `
<div class="animals-board">
            <article class="service-img">
                <img class="animal-image-cover" src=${pet.image}>
            </article>
            <h2 class="name">${pet.name}</h2>
            <h3 class="breed">${pet.breed}</h3>
            <div class="action">
                <a class="btn" href="/pets/${pet._id}/details">Details</a>
            </div>
</div>`;


const dashboardTemplate = (pets) => html `
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
    ${pets.length > 0 ? pets.map(pet => petTemplate(pet)) : noPets()}
    </div>
</section>`;

export const dashboardView = (ctx) => {
    console.log('dashboard view');
    petService.getAll()
        .then(pets => {
            ctx.render(dashboardTemplate(pets));
        })
        .catch(err => alert(err));
}