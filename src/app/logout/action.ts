'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '../../utils/supabase/server'

export async function logOut() {
    const supabase = createClient()
  
    // type-casting here for convenience
    // in practice, you should validate your inputs
  
    const { error } = await supabase.auth.signOut()
  
    if (error) {
      redirect('/login')
    }
  
    revalidatePath('/', 'layout')
    redirect('/')
  }