import { content , IContent } from "../route";

export async function GET(res: Request , { params } : { params: Promise<{id: string}> }) {
    const {id} = await params
    if (id){
        const exist = content.find(item => item.id === +id)
        if (Object.keys(exist ?? {}).length){
            return Response.json(exist)
        }
    }
    
}