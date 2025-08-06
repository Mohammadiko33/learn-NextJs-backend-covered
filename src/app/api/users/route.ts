import { IUserData, userData } from "./[id]/route";

export const GET = async () => {
  return Response.json(userData);
};

export const POST = async (req: Request) => {
  const user = await req.json();
  const existInData = userData.find((item) => item.gmail === user.gmail);
  if (!existInData) {
    const newUser: IUserData = {
      id: (userData.length + 1).toString(),
      username: user.username,
      gmail: user.gmail,
      password: user.password,
    };
    userData.push(newUser);
    return new Response(JSON.stringify(newUser), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 201,
    });
  } else {
    return new Response(
      JSON.stringify({
        massage: "user already registered , please login",
        status: 409,
      })
    );
  }
};
