"use server";

import { createSupbaseServerClientReadOnly } from "@/src/utils/supabase/middleware";


export async function readUserSession() {
	const supabase = await createSupbaseServerClientReadOnly();

	return supabase.auth.getSession();
}
