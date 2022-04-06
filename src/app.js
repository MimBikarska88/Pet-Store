import page from '../node_modules/page/page.mjs';
import { authMiddleware } from './middleware/authMiddleware.js';
import { renderMiddleware, renderNavigation } from './middleware/renderMiddleware.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { registerView } from './views/registerView.js';
import { dashboardView } from './views/dashboardView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editPage.js';
import { deleteView } from './views/deleteView.js';
import { donateView } from './views/donateView.js';


page(authMiddleware);
page(renderNavigation);
page(renderMiddleware);

page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutView);
page('/dashboard', dashboardView);
page('/create', createView);
page('/pets/:petId/details', detailsView);
page('/pets/:petId/edit', editView);
page('/pets/:petId/delete', deleteView);
page('/pets/:petId/donate', donateView);

page.start();