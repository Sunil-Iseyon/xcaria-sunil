import { datas } from "../datas";
import Image from "next/image";
import ViewMorePage from "./show";

interface pageProps {
  params: { showmore: any };
}

export default function page({ params }: pageProps) {
  const id = params.showmore;
  return (
    <ViewMorePage id={id}/>
  );
}
