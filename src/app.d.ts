// See https://kit.svelte.dev/docs/types#app

import { SupabaseClient, Session } from '@supabase/supabase-js'
import type { Database } from "./types/supabase";

// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			supabase: SupabaseClient<Database>
			getSession(): Promise<Session | null>
		}
		interface PageData {
			session: Session | null
		}
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export { };
