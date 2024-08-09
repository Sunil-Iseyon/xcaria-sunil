import Articles from '@/src/components/Article/Articles'
import BlogOverview from '@/src/components/BlogCards/BlogOverview'
import ContactForm from '@/src/components/ContactForm/ContactForm'
import Projects from '@/src/components/Projects/Projects'
import React from 'react'
import { createClient } from "@/src/utils/supabase/server";
import { redirect } from "next/navigation";

const  page = async() => {
  // const supabase = createClient();

  // const { data, error } = await supabase.auth.getUser();
  // if (error || !data?.user) {
  //   return redirect("/login");
  // }

  // const { data: activeSession } = await supabase.auth.getSession();

	// if (!activeSession.session) {
	// 	return redirect("/auth");
	// }
  return (
    <div className='my-24 mt-[200px]' >
      <BlogOverview/>
      <Projects/>
      <Articles/>
      <ContactForm/>
    </div>
  )
}

export default page