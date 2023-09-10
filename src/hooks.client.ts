import type { HandleClientError } from "@sveltejs/kit";

export const handleError: HandleClientError = async ({ error, event }) => {
    const errorId = crypto.randomUUID();

    return {
        message: 'Whoops!',
        errorId,
    };
};