import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public'
import { createSupabaseServerClient } from '@supabase/auth-helpers-sveltekit'
import { redirect, type Handle, error } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
    event.locals.supabase = createSupabaseServerClient({
        supabaseUrl: PUBLIC_SUPABASE_URL,
        supabaseKey: PUBLIC_SUPABASE_ANON_KEY,
        event,
    })




    /**
     * a little helper that is written for convenience so that instead
     * of calling `const { data: { session } } = await supabase.auth.getSession()`
     * you just call this `await getSession()`
     */
    event.locals.getSession = async () => {
        const {
            data: { session },
        } = await event.locals.supabase.auth.getSession()
        return session
    }

    if (event.url.pathname.startsWith('/projects')) {
        const session = await event.locals.getSession()
        if (!session) {
            // the user is not signed in
            throw redirect(303, '/login')
        }
    }


    // protect POST requests to all routes that start with /protected-posts
    if (event.url.pathname.startsWith('/protected-posts') && event.request.method === 'POST') {
        const session = await event.locals.getSession()
        if (!session) {
            // the user is not signed in
            throw error(303, '/')
        }
    }

    return resolve(event, {
        filterSerializedResponseHeaders(name) {
            return name === 'content-range'
        },
    })
}

