import { prisma } from "@/src/lib/prisma"
import { notFound, redirect } from "next/navigation"

async function getProductById(id:number) {
const product = await prisma.product.findUnique({
    where:{
        id
    }
})
if (!product) {
    notFound()
}
    return product
}
export default async function EditProductPage({ params }: { params: { id: string } }) {
  const product =  await getProductById(+params.id)
  console.log(product);
  
    return (<div>page</div>)
}
