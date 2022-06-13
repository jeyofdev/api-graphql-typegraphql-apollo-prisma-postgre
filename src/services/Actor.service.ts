import { Service } from 'typedi';

@Service()
class ActorService {
    async findAllActors(ctx: any) {
        return ctx?.prisma?.actor?.findMany({
            include: {
                movies: true,
            },
        });
    }

    async findOneById(ctx: any, id: string) {
        return ctx?.prisma?.actor?.findUnique({
            where: { id },
            include: {
                movies: true,
            },
        });
    }

    async save(ctx: any, firstname: string, lastname: string) {
        const newActor = await ctx?.prisma?.actor?.create({
            data: {
                firstname,
                lastname,
            },
            include: {
                movies: true,
            },
        });

        return newActor;
    }

    async updateOne(
        ctx: any,
        id: string,
        firstname?: string,
        lastname?: string
    ) {
        const actorUpdated = ctx?.prisma?.actor?.update({
            where: { id },
            data: {
                firstname,
                lastname,
            },
            include: {
                movies: true,
            },
        });
        return actorUpdated;
    }

    async deleteOne(ctx: any, id: string) {
        const currentActor = ctx?.prisma?.actor?.delete({
            where: {
                id,
            },
            include: {
                movies: true,
            },
        });
        return currentActor;
    }
}

export default ActorService;
