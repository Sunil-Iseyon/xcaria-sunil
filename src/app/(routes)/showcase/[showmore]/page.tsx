import { datas } from "../datas";
import ViewMorePage from "./show";

interface PageProps {
  params: { showmore: string };
}

export default async function Page({ params }: PageProps) {
  const id = params.showmore;
  const rawData = await fetch('http://localhost:8080/news');
  
  if (!rawData.ok) {
    throw new Error('Failed to fetch the data!!!');
  }

  const data = await rawData.json();
  

  return (
    <ViewMorePage id={id} news={data} />
  );
}