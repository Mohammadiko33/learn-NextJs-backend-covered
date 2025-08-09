import { content } from "../route";

export interface paramID {
  params: Promise<{ id: string }>;
}

export async function GET(res: Request, { params }: paramID) {
  const { id } = await params;
  if (id) {
    const exist = content.find((item) => item.id === +id);
    if (Object.keys(exist ?? {}).length) {
      return Response.json(exist);
    } else {
      return Response.json(
        { message: "sorry! but your item is not in our db" },
        { status: 404 }
      );
    }
  } else {
    return Response.json(
      { message: "tyy again problem from your id's" },
      { status: 400 }
    );
  }
}

export async function PATCH(req: Request, { params }: paramID) {
  const { id } = await params;
  const body = await req.json();
  if (Object.keys(body).length && body.title && body.title.trim()) {
    const index = content.findIndex((item) => item.id === +id);
    content[index].title = body.title;
    return Response.json(content[index]);
  } else {
    return Response.json({ message: "title is now alowed" }, { status: 400 });
  }
}
