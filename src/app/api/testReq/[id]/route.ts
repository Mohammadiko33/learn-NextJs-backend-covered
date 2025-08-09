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
    const exist = content.some(item => item.id === +id)
    if (exist){
      const index = content.findIndex((item) => item.id === +id);
      content[index].title = body.title;
      return Response.json(content[index]);
    } else {
      return Response.json({ message: "no item with your id" }, { status: 404 });
    }
  } else {
    return Response.json({ message: "title is now alowed" }, { status: 400 });
  }
}

export async function DELETE(req: Request, { params }: paramID) {
  const { id } = await params;
  const exist = content.some((item) => item.id === +id);
  if (exist) {
    // const newContents = content.filter((item) => item.id !== +id);
    // return Response.json(newContents);
    const index = content.findIndex(item => item.id === +id)
    content.splice(index , 1)
    return Response.json(content)
  } else {
    return Response.json({ message: "item not founded" }, { status: 404 });
  }
}
