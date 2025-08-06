export interface IUserData {
  id: string;
  username: string;
  gmail: string;
  password: string;
}

export let userData: IUserData[] = [
  {
    id: "1",
    username: "MohammadiKO",
    gmail: "developer.iko.mike@gmail.com",
    password: "mohammad33",
  },
  {
    id: "2",
    username: "amirQuf",
    gmail: "amirQuf@gmail.com",
    password: "amir2007",
  },
  {
    id: "3",
    username: "reza",
    gmail: "rezza@gmail.com",
    password: "48624862",
  },
];

export const GET = async (
  req: Request,
  context: {
    params: {
      id: string;
    };
  }
) => {
  const { id } = await context.params;
  const user = userData.find((user) => user.id === id);
  return Response.json(user);
};

export const DELETE = async (
  req: Request,
  context: {
    params: {
      id: string;
    };
  }
) => {
  const { id } = await context.params;
  const exist = userData.find((user) => user.id === id);
  if (Boolean(exist)) {
    const user: IUserData[] = userData.filter((user) => user.id !== id);
    userData = user;
    return Response.json(userData);
  } else {
    return Response.json(userData, {
      status: 404,
      statusText: "user with your id is not defind",
    });
  }
};

export const PATCH = async (
  req: Request,
  context: { params: { id: string } }
) => {
  const { id } = context.params;
  const updateFields = await req.json();

  const userIndex = userData.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
    });
  }

  // فقط فیلدهایی که فرستاده شده آپدیت میشن
  userData[userIndex] = { ...userData[userIndex], ...updateFields };

  return new Response(JSON.stringify(userData[userIndex]), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

export const PUT = async (
  req: Request,
  context: { params: { id: string } }
) => {
  const { id } = context.params;
  const newUser = await req.json();

  const userIndex = userData.findIndex((user) => user.id === id);
  if (userIndex === -1) {
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
    });
  }

  // همه‌ی فیلدها باید جایگزین بشن
  userData[userIndex] = {
    id,
    username: newUser.username,
    gmail: newUser.gmail,
    password: newUser.password,
  };

  return new Response(JSON.stringify(userData[userIndex]), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
