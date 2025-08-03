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


export const GET = async (req: Request, context: {
    params: {
        id: string
    }
}) => {
    const {id} = await context.params;
    const user = userData.find(user => user.id === id)
    return Response.json(user)
}

export const DELETE = async (req: Request, context: {
    params: {
        id: string
    }
}) => {
    const {id} = await context.params;
    const exist = userData.find(user => user.id === id)
    if (Boolean(exist)){
        const user : IUserData[] = userData.filter(user => user.id !== id)
        userData = user
        return Response.json(userData)
    } else {
        return Response.json(userData , {
            status: 404,
            statusText: "user with your id is not defind"
        })
    }
}