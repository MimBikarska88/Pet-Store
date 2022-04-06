import * as userService from '../services/userService.js';

export const authMiddleware = (ctx, next) => {
    let user = userService.getUser();
    ctx.user = user;
    next();
}