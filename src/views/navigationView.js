import { html } from '../../node_modules/lit-html/lit-html.js';

const guestNavTemplate = () => html `
<li><a href="/login">Login</a></li>
<li><a href="/register">Register</a></li>`;

const userNavTemplate = () => html `
<li><a href="/create">Create Postcard</a></li>
<li><a href="/logout">Logout</a></li>`;


const navigationTemplate = (isAuthenticated) => html `
<nav>
<section class="logo">
    <img src="./images/logo.png" alt="logo">
</section>
<ul>
    <li><a href="/">Home</a></li>
    <li><a href="/dashboard">Dashboard</a></li>
    ${isAuthenticated!==undefined ? userNavTemplate() : guestNavTemplate()}
</ul>
</nav>`;

export const navigationView = (ctx) => {
    return navigationTemplate(ctx.user);
}