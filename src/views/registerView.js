import { html } from '../../node_modules/lit-html/lit-html.js';
import * as userService from '../services/userService.js';

const registerTemplate = (registerHandler) => html `
<section id="registerPage">
    <form class="registerForm" @submit=${registerHandler}>
        <img src="./images/logo.png" alt="logo" />
        <h2>Register</h2>
        <div class="on-dark">
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div class="on-dark">
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <div class="on-dark">
            <label for="repeatPassword">Repeat Password:</label>
            <input id="repeatPassword" name="repeatPassword" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Register</button>

        <p class="field">
            <span>If you have profile click <a href="/login">here</a></span>
        </p>
    </form>
</section>
`;
export const registerView = (ctx) => {
    const registerHandler = (event) => {
        event.preventDefault();

        let form = new FormData(event.target);
        let email = form.get('email');
        let password = form.get('password');
        let repeatPassword = form.get('repeatPassword');

        if (email == '' || password == '' || repeatPassword == '') {
            alert('All fields must be filled!');
            return;
        }
        if (password != repeatPassword) {
            alert('Passwords don NOT match');
            return;
        }

        userService.register(email, password)
            .then(user => {
                if (user.code >= 400) {
                    throw new Error(user.message);
                }
                userService.saveUser(user);
                ctx.page.redirect('/');
            })
            .catch(err => alert(err));
    }
    ctx.render(registerTemplate(registerHandler));
}