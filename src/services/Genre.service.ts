import { Service } from 'typedi';

@Service()
class GenreService {
    async findAllGenres(ctx: any) {
        return ctx?.prisma?.genre?.findMany({
            include: {
                movies: true,
            },
        });
    }

    async findOneById(ctx: any, id: string) {
        return ctx?.prisma?.genre?.findUnique({
            where: { id },
            include: {
                movies: true,
            },
        });
    }

    async save(ctx: any, name: string) {
        const newGenre = await ctx?.prisma?.genre?.create({
            data: {
                name,
            },
            include: {
                movies: true,
            },
        });

        return newGenre;
    }

    async updateOne(ctx: any, id: string, name?: string) {
        const genreUpdated = ctx?.prisma?.genre?.update({
            where: { id },
            data: { name },
            include: {
                movies: true,
            },
        });
        return genreUpdated;
    }

    async deleteOne(ctx: any, id: string) {
        const currentGenre = ctx?.prisma?.genre?.delete({
            where: { id },
            include: {
                movies: true,
            },
        });
        return currentGenre;
    }
}

export default GenreService;
