import { redirect } from "next/navigation";
import { readUserSession } from "../../lib/actions";
import { RedirectType } from "next/navigation";
import { useUserStore } from "../../lib/store/user";

export default async function BlogLayout({
	children,
}: { children: React.ReactNode }) {



    const {data:userSession} =await readUserSession();
    if(!userSession.session){
      return redirect('/login');
  
    }
  
    useUserStore.setState({user:userSession.session.user})
	return (
		<div className="container mx-auto">
            <div className="leading-relaxed text-slate-200 antialiased selection:bg-teal-300 selection:text-teal-900">
                <div className="z-[-10] bg-slate-950 fixed inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#034a4391,transparent)] ">

                </div>
                {children}
            </div>
        </div> 
	);
}