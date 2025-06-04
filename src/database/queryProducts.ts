import prisma from './PrismaClient';

export default async function queryProducts(){
    try {
        const queryOutput = await prisma.product.findMany();
        return queryOutput;
    } catch (err) {
        console.error(err);
    } finally {
        prisma.$disconnect();
    }
}