import { Args, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import Movie from '../models/Movie.model';
import AddMovieInput from '../inputs/movie/AddMovie.Input';
import MovieByIdInput from '../inputs/movie/MovieById.Input';
import UpdateMovieInput from '../inputs/movie/UpdateMovie.Input';
import MovieService from '../services/Movie.service';

@Service()
@Resolver(Movie)
class MovieResolver {
    constructor(private readonly movieService: MovieService) {}

    @Query(() => [Movie], {
        nullable: true,
        description: 'Get all movies',
    })
    async movies(@Ctx() ctx: { prisma: any }) {
        return this?.movieService?.findAllMovies(ctx);
    }

    @Query(() => Movie, {
        nullable: true,
        description: 'Get movie by Id',
    })
    async movieById(
        @Args() { id }: MovieByIdInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.movieService?.findOneById(ctx, id);
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
        return this?.movieService?.save(
            ctx,
            title,
            synopsys,
            year,
            duration,
            rating,
            genreIds,
            actorIds
        );
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
        return this?.movieService?.updateOne(
            ctx,
            id,
            title,
            synopsys,
            year,
            duration,
            rating,
            genreIds,
            actorIds
        );
    }

    @Mutation(() => Movie, {
        nullable: true,
        description: 'Delete movie by id',
    })
    async deleteMovie(
        @Args() { id }: MovieByIdInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.movieService?.deleteOne(ctx, id);
    }
}

export default MovieResolver;
