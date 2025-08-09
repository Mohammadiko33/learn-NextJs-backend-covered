import { headers } from "next/headers";
import { NextRequest } from "next/server";
export async function GET(req: NextRequest) {
    const headerList = await headers()
        return new Response(`<h1 style="font-family: sans-serif;text-transform: capitalize;">this is simple title with h1 HTML tag</h1>` , {
            headers: {
                "Content-Type": "text/html"
            }
        })
}
