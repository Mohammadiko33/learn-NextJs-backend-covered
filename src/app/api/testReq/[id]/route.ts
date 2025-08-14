import { content } from "@/data/content";

export interface ParamID {
  params: { id: string };
}

export async function GET(_: Request, { params }: ParamID) {
  const { id } = params;
  const exist = content.find(item => item.id === +id);
  if (exist) {
    return Response.json(exist);
  } else {
    return Response.json({ message: "item not found" }, { status: 404 });
  }
}

export async function PATCH(req: Request, { params }: ParamID) {
  const { id } = params;
  const body = await req.json();
  if (body?.title?.trim()) {
    const index = content.findIndex(item => item.id === +id);
    if (index !== -1) {
      content[index].title = body.title.trim();
      return Response.json(content[index]);
    } else {
      return Response.json({ message: "no item with your id" }, { status: 404 });
    }
  } else {
    return Response.json({ message: "title is not allowed" }, { status: 400 });
  }
}

export async function DELETE(_: Request, { params }: ParamID) {
  const { id } = params;
  const index = content.findIndex(item => item.id === +id);
  if (index !== -1) {
    content.splice(index, 1);
    return Response.json(content);
  } else {
    return Response.json({ message: "item not found" }, { status: 404 });
  }
}
