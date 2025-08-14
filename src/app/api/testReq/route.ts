import { NextRequest } from "next/server";
import { content, IContent } from "@/data/content";

const BASE_Header = { "Content-Type": "application/json" };

export async function GET(req: NextRequest) {
  const searchParam = req.nextUrl.searchParams;
  const title = searchParam.get("title");
  const filteredComment = content.filter(item =>
    item.title.includes(title ?? "")
  );

  if (filteredComment.length) {
    return new Response(JSON.stringify(filteredComment), {
      headers: BASE_Header,
      status: 200,
    });
  } else {
    return Response.json({ message: "item not found" }, { status: 404 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    if (typeof data?.title === "string" && data.title.trim().length > 0) {
      const newContent: IContent = {
        id: content.length + 1,
        title: data.title.trim(),
      };
      content.push(newContent);
      return new Response(JSON.stringify(content), {
        headers: BASE_Header,
        status: 201,
      });
    } else {
      return Response.json({ message: "title is empty" }, { status: 400 });
    }
  } catch {
    return Response.json({ message: "invalid JSON" }, { status: 400 });
  }
}