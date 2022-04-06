import { html } from '../../node_modules/lit-html/lit-html.js';
import * as userService from '../services/userService.js';
const loginTemplate = (loginHandler) => html `
<section id="loginPage" @submit=${loginHandler}>
    <form class="loginForm">
        <img src="./images/logo.png" alt="logo" />
        <h2>Login</h2>

        <div>
            <label for="email">Email:</label>
            <input id="email" name="email" type="text" placeholder="steven@abv.bg" value="">
        </div>

        <div>
            <label for="password">Password:</label>
            <input id="password" name="password" type="password" placeholder="********" value="">
        </div>

        <button class="btn" type="submit">Login</button>

        <p class="field">
            <span>If you don't have profile click <a href="#">here</a></span>
        </p>
    </form>
</section>`;

export const loginView = (ctx) => {
    const loginHandler = (event) => {
        event.preventDefault();
        let form = new FormData(event.target);
        let email = form.get('email');
        let password = form.get('password');
        if (email == '' || password == '') {
            alert('All fields must be filled!');
            return;
        }
        userService.login(email, password)
            .then(user => {
                if (user.code >= 300) {
                    throw new Error(user.message);
                }
                userService.saveUser(user);
                ctx.page.redirect('/');
            })
            .catch(err => alert(err));
    }
    ctx.render(loginTemplate(loginHandler));
}