import { addProduct } from "@/prisma-db";

export default async function POST(req: Request) {
    const body = await req.json();
    const {title , price , desc} = body;
    const product = await addProduct(title , Number(price) , desc)
    return new Response(JSON.stringify(product) , {
        headers: {"Content-Type": "application/json"}
    })
}
