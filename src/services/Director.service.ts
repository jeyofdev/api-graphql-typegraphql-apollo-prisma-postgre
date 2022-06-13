import { Service } from 'typedi';

@Service()
class DirectorService {
    async findAllDirectors(ctx: any) {
        return ctx?.prisma?.director?.findMany();
    }

    async findOneById(ctx: any, id: string) {
        return ctx?.prisma?.director?.findUnique({
            where: { id },
        });
    }

    async save(ctx: any, firstname: string, lastname: string) {
        const newDirector = await ctx?.prisma?.director?.create({
            data: {
                firstname,
                lastname,
            },
        });

        return newDirector;
    }

    async updateOne(
        ctx: any,
        id: string,
        firstname?: string,
        lastname?: string
    ) {
        const directorUpdated = ctx?.prisma?.director?.update({
            where: { id },
            data: {
                firstname,
                lastname,
            },
        });
        return directorUpdated;
    }

    async deleteOne(ctx: any, id: string) {
        const currentDirector = ctx?.prisma?.director?.delete({
            where: { id },
        });
        return currentDirector;
    }
}

export default DirectorService;
