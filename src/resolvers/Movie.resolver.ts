import { Ctx, Query, Resolver } from 'type-graphql';
import Movie from '../models/Movie.model';

@Resolver(Movie)
class MovieResolver {
    @Query(() => [Movie], {
        nullable: true,
        description: 'Get all movies',
    })
    async movies(@Ctx() ctx: { prisma: any }) {
        return ctx?.prisma?.movie?.findMany();
    }
}

export default MovieResolver;
