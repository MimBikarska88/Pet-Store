import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as petService from '../services/petService.js';


const creatorDonateTemplate = (pet) => html `
<a href="/pets/${pet._id}/donate" class="donate">Donate</a>`;

const ownerTemplate = (pet) => html `
<a href="/pets/${pet._id}/edit" class="edit">Edit</a>
<a href="/pets/${pet._id}/delete" class="remove">Delete</a>`;

const registeredUserTemplate = (pet, user) => html `
            <div class="actionBtn">
                <!-- Only for registered user and creator of the pets-->
               
                <!--(Bonus Part) Only for no creator and user-->
               ${pet._ownerId === user._id ? ownerTemplate(pet) : creatorDonateTemplate(pet)}
            </div>`;

const detailsTemplate = (pet, user) => html `
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src=${pet.image}>
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: 0$</h4>
            </div>
            <!-- if there is no registered user, do not display div-->
            ${user!==undefined ? registeredUserTemplate(pet,user) : nothing}
        </div>
    </div>
</section>
`;
export const detailsView = (ctx) => {
    petService.getPet(ctx.params.petId)
        .then(pet => {
            ctx.render(detailsTemplate(pet, ctx.user))
        })
        .catch(err => alert(err));

}