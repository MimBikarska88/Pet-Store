import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationView } from '../views/navigationView.js';
const header = document.querySelector('#header');
const root = document.querySelector('#content');

export const renderNavigation = (ctx, next) => {
    render(navigationView(ctx), header);
    next();
}

const ctxRenderFunc = (templateResult) => {
    render(templateResult, root);
}
export const renderMiddleware = (ctx, next) => {
    ctx.render = ctxRenderFunc;
    next();
}