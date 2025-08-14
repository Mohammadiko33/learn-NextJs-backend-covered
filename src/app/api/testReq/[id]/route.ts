// src/app/api/testReq/[id]/route.ts
import { content } from "@/data/content";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;
  const exist = content.find(item => item.id === +id);
  if (exist) {
    return Response.json(exist);
  } else {
    return Response.json({ message: "item not found" }, { status: 404 });
  }
}

export async function PATCH(req: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;
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

export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;
  const index = content.findIndex(item => item.id === +id);
  if (index !== -1) {
    content.splice(index, 1);
    return Response.json(content);
  } else {
    return Response.json({ message: "item not found" }, { status: 404 });
  }
}
