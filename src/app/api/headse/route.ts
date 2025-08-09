import { cookies, headers } from "next/headers";
import { NextRequest } from "next/server";
export async function GET(req: NextRequest) {
const reqHeaders = new Headers(req.headers)
console.log(reqHeaders.get("Authorization"))

const headersList = await headers()
console.log(headersList.get("Authorization"))

const theme = req.cookies.get("theme")
console.log(theme)

const cookieStore = await cookies()
cookieStore.set("resPerPage" , "20")
console.log(cookieStore.get("resPerPage"))

return new Response("<h1>profile api data</h1>" , {
    headers: {
        "Content-Type": "text/html",
        "Set-Cookie": "theme=dark"
    }
})
}
