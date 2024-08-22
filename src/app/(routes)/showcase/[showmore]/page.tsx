import { datas } from "../datas";
import ViewMorePage from "./show";
import { createClient } from "@/src/utils/supabase/server";
import { redirect } from "next/navigation";

interface PageProps {
  params: { showmore: string };
}

export default async function Page({ params }: PageProps) {
  const id = params.showmore;
  // let usertype;
  // if(id == '0' || id == '1' || id =='2' ){
  //    usertype = 'client';
  // }
  // console.log("id= ",id);  
  const rawData = await fetch('http://localhost:8080/news');
  
  if (!rawData.ok) {
    throw new Error('Failed to fetch the data!!!');
  }

  const data = await rawData.json();
  
  const supabase = createClient()
    const { data: activeSession } = await supabase.auth.getSession();

	if (!activeSession.session) {
		return redirect("/");
	}

	const { data: user } = await supabase.from("user").select("*").single();


  if (user?.role === "user") {
    return(
       <h1 className='h-screen flex justify-center items-center'>Sorry You Don't have access to this page</h1>
      
    )
	}

  return (
    <ViewMorePage id={id} news={data} />
    // <pre className="text-white mt-60 ml-80">{JSON.stringify(user,null,2)}</pre>
  );
}