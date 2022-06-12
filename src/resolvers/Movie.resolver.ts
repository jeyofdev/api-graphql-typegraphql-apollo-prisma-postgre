import { Args, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import Movie from '../models/Movie.model';
import AddMovieInput from '../inputs/movie/AddMovie.Input';
import MovieByIdInput from '../inputs/movie/MovieById.Input';
import UpdateMovieInput from '../inputs/movie/UpdateMovie.Input';

@Resolver(Movie)
class MovieResolver {
    @Query(() => [Movie], {
        nullable: true,
        description: 'Get all movies',
    })
    async movies(@Ctx() ctx: { prisma: any }) {
        return ctx?.prisma?.movie?.findMany({
            include: {
                actors: true,
                genres: true,
            },
        });
    }

    @Query(() => Movie, {
        nullable: true,
        description: 'Get movie by Id',
    })
    async movieById(
        @Args() { id }: MovieByIdInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return ctx?.prisma?.movie?.findUnique({
            where: { id },
            include: {
                actors: true,
                genres: true,
            },
        });
    }

    @Mutation(() => Movie, {
        nullable: false,
        description: 'Add new movie',
    })
    async addMovie(
        @Args()
        {
            title,
            synopsys,
            year,
            duration,
            rating,
            genreIds,
            actorIds,
        }: AddMovieInput,
        @Ctx() ctx: { prisma: any }
    ) {
        const genresList: { id: string }[] = genreIds
            ? genreIds?.map((id) => ({ id }))
            : [];

        const actorsList: { id: string }[] = actorIds
            ? actorIds.map((id) => ({ id }))
            : [];

        const newMovie = await ctx?.prisma?.movie?.create({
            data: {
                title,
                synopsys,
                year,
                duration,
                rating,
                genres: {
                    connect: genresList,
                },
                actors: {
                    connect: actorsList,
                },
            },
            include: {
                actors: true,
                genres: true,
            },
        });

        return newMovie;
    }

    @Mutation(() => Movie)
    async updateMovie(
        @Args()
        {
            id,
            title,
            synopsys,
            year,
            duration,
            rating,
            genreIds,
            actorIds,
        }: UpdateMovieInput,
        @Ctx() ctx: { prisma: any }
    ) {
        const genresList: { id: string }[] = genreIds
            ? genreIds?.map((genreId) => ({ id: genreId }))
            : [];

        const actorsList: { id: string }[] = actorIds
            ? actorIds.map((actorId) => ({ id: actorId }))
            : [];

        const movieUpdated = ctx?.prisma?.movie?.update({
            where: { id },
            data: {
                title,
                synopsys,
                year,
                duration,
                rating,
                genres: {
                    connect: genresList,
                },
                actors: {
                    connect: actorsList,
                },
            },
            include: {
                actors: true,
                genres: true,
            },
        });
        return movieUpdated;
    }

    @Mutation(() => Movie, {
        nullable: true,
        description: 'Delete movie by id',
    })
    async deleteMovie(
        @Args() { id }: MovieByIdInput,
        @Ctx() ctx: { prisma: any }
    ) {
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

export default MovieResolver;
