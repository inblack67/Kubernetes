import { MyContext } from "../utils/types";
import { ErrorResponse } from "../utils/ErrorResponse";
import { MiddlewareFn } from "type-graphql";

export const isAuthenticated: MiddlewareFn<MyContext> = ({ context }, next) => {
    const currentUser = context.session.user;
    if (!currentUser) {
        throw new ErrorResponse('Not Authenticated', 401);
    }
    return next();
};

export const isAdmin: MiddlewareFn<MyContext> = async ({ context }, next) => {
    const currentUser = context.session.user;

    if (currentUser!.role !== 'admin') {
        throw new ErrorResponse('Not Authorized', 401);
    }

    return next();
};
