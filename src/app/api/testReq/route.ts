// app/api/testReq/route.ts
export interface IContent {
  id: number;
  title: string;
}

const BASE_Header = { "Content-Type": "application/json" }

export const content: IContent[] = [
  { id: 1, title: "title one" },
  { id: 2, title: "title two" },
  { id: 3, title: "title three" },
];

export async function GET() {
  return new Response(JSON.stringify(content), {
    headers: BASE_Header,
    status: 200,
  });
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
      return new Response(JSON.stringify({ message: "title is empty" }), {
        headers: BASE_Header,
        status: 400,
      });
    }
  } catch (err) {
    return new Response(JSON.stringify({ message: "invalid JSON" }), {
      headers: BASE_Header,
      status: 400,
    });
  }
}