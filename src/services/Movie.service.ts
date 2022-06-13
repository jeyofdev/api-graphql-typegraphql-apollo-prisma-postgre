import { Service } from 'typedi';
import generateRelation from '../utils/services';

@Service()
class MovieService {
    async findAllMovies(ctx: any) {
        return ctx?.prisma?.movie?.findMany({
            include: {
                actors: true,
                genres: true,
            },
        });
    }

    async findOneById(ctx: any, id: string) {
        return ctx?.prisma?.movie?.findUnique({
            where: { id },
            include: {
                actors: true,
                genres: true,
            },
        });
    }

    async save(
        ctx: any,
        title: string,
        synopsys: string,
        year: number,
        duration: number,
        rating: number,
        genreIds: string[],
        actorIds: string[]
    ) {
        const newMovie = await ctx?.prisma?.movie?.create({
            data: {
                title,
                synopsys,
                year,
                duration,
                rating,
                genres: {
                    connect: generateRelation(genreIds),
                },
                actors: {
                    connect: generateRelation(actorIds),
                },
            },
            include: {
                actors: true,
                genres: true,
            },
        });

        return newMovie;
    }

    async updateOne(
        ctx: any,
        id: string,
        title?: string,
        synopsys?: string,
        year?: number,
        duration?: number,
        rating?: number,
        genreIds?: string[],
        actorIds?: string[]
    ) {
        const movieUpdated = ctx?.prisma?.movie?.update({
            where: { id },
            data: {
                title,
                synopsys,
                year,
                duration,
                rating,
                genres: {
                    connect: generateRelation(genreIds),
                },
                actors: {
                    connect: generateRelation(actorIds),
                },
            },
            include: {
                actors: true,
                genres: true,
            },
        });
        return movieUpdated;
    }

    async deleteOne(ctx: any, id: string) {
        const currentMovie = ctx?.prisma?.movie?.delete({
            where: { id },
            include: {
                actors: true,
                genres: true,
            },
        });
        return currentMovie;
    }
}

export default MovieService;
