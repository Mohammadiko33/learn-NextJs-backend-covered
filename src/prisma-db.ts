import {PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

const seedProducts = async () => {
    const count = await prisma.product.count()
    if (count === 0){
        await prisma.product.createMany({
            data: [
                { title: "Product 1", price: 500 , desc: "description 1" },
                { title: "Product 2", price: 700 , desc: "description 1" },
                { title: "Product 3", price: 1000 , desc: "description 1" },
            ],
        })
    }
}

seedProducts()

export async function getProducts() {
    await new Promise((resolve) => setTimeout(resolve , 1500))
    return prisma.product.findMany()
}
export async function getProduct(id: number) {
    await new Promise((resolve) => setTimeout(resolve , 1500))
return prisma.product.findUnique({
    where: {id},
});
}
export async function addProduct(title: string , price: number , desc: string) {
    await new Promise((resolve) => setTimeout(resolve , 1500))
    return prisma.product.create({
        data: { title , price , desc  },
    })
}

export async function updateProduct( id: string , title: string , price: number , desc: string) {
    await new Promise(resolve => setTimeout(resolve , 1500))
    return prisma.product.update({
        where: { id },
        data: { title , price , desc }
    })
} 

export async function deleteProduct(id: number) {
    await new Promise((resolve) => setTimeout(resolve , 1500))
    return prisma.product.delete({
        where: { id },
    })
}