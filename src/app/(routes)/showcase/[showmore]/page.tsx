import { datas } from "../datas";
import ViewMorePage from "./show";
import { createClient } from "@/src/utils/supabase/client";
import { redirect } from "next/navigation";

interface PageProps {
  params: { showmore: string }; 
}

export default async function Page({ params }: PageProps) {
  const id = params.showmore;
  const rawData = await fetch('https://xcaria-public.onrender.com/news');
  
  if (!rawData.ok) {
    throw new Error('Failed to fetch the data!!!');
  }

  const data = await rawData.json();

  const supabase = createClient()
    const { data: activeSession } = await supabase.auth.getSession();

	if (!activeSession.session) {
		return redirect("/auth");
	}

	const { data: user } = await supabase.from("user").select("*").single();

  if (user?.role !== "admin") {
    return(
       <h1 className='h-screen flex justify-center items-center'>Sorry You Don't have access to this page</h1>
      
    )
	}
  

  return (
    <ViewMorePage id={id} news={data} />
  );
}