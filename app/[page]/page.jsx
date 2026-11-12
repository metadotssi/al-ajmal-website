import Site from '../site';
export function generateStaticParams(){return ['services','workshop','gallery','contact','book'].map(page=>({page}))}
export default async function Page({params}){const {page}=await params;return <Site page={page}/>}
