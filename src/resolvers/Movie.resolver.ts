import { Args, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import Movie from '../models/Movie.model';
import AddMovieInput from '../inputs/movie/AddMovieInput';
import MovieByIdInput from '../inputs/movie/MovieByIdInput';
import UpdateMovieInput from '../inputs/movie/UpdateMovieInput';

@Resolver(Movie)
class MovieResolver {
    @Query(() => [Movie], {
        nullable: true,
        description: 'Get all movies',
    })
    async movies(@Ctx() ctx: { prisma: any }) {
        return ctx?.prisma?.movie?.findMany();
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
        });
    }

    @Mutation(() => Movie, {
        nullable: false,
        description: 'Add new movie',
    })
    async addMovie(
        @Args() { title, synopsys, year, duration }: AddMovieInput,
        @Ctx() ctx: { prisma: any }
    ) {
        const newMovie = await ctx?.prisma?.movie?.create({
            data: {
                title,
                synopsys,
                year,
                duration,
            },
        });

        return newMovie;
    }

    @Mutation(() => Movie)
    async updateMovie(
        @Args() { id, title, synopsys, year, duration }: UpdateMovieInput,
        @Ctx() ctx: { prisma: any }
    ) {
        const commentUpdated = ctx?.prisma?.movie?.update({
            where: { id },
            data: {
                title,
                synopsys,
                year,
                duration,
            },
        });
        return commentUpdated;
    }

    @Mutation(() => Movie, {
        nullable: true,
        description: 'Delete movie by id',
    })
    async deleteMovie(
        @Args() { id }: MovieByIdInput,
        @Ctx() ctx: { prisma: any }
    ) {
        const currentDocument = ctx?.prisma?.movie?.delete({
            where: { id },
        });
        return currentDocument;
    }
}

export default MovieResolver;
