import { Args, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import GenreService from '../services/Genre.service';
import Genre from '../models/Genre.model';
import AddGenreInput from '../inputs/Genre/AddGenre.Input';
import GenreByIdInput from '../inputs/Genre/GenreById.Input';
import UpdateGenreInput from '../inputs/Genre/UpdateGenre.Input';

@Service()
@Resolver(Genre)
class GenreResolver {
    constructor(private readonly genreService: GenreService) {}

    @Query(() => [Genre], {
        nullable: true,
        description: 'Get all Genres',
    })
    async Genres(@Ctx() ctx: { prisma: any }) {
        return this?.genreService?.findAllGenres(ctx);
    }

    @Query(() => Genre, {
        nullable: true,
        description: 'Get Genre by Id',
    })
    async GenreById(
        @Args() { id }: GenreByIdInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.genreService?.findOneById(ctx, id);
    }

    @Mutation(() => Genre, {
        nullable: false,
        description: 'Add new Genre',
    })
    async addGenre(
        @Args() { name }: AddGenreInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.genreService?.save(ctx, name);
    }

    @Mutation(() => Genre)
    async updateGenre(
        @Args() { id, name }: UpdateGenreInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.genreService?.updateOne(ctx, id, name);
    }

    @Mutation(() => Genre, {
        nullable: true,
        description: 'Delete Genre by id',
    })
    async deleteGenre(
        @Args() { id }: GenreByIdInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.genreService?.deleteOne(ctx, id);
    }
}

export default GenreResolver;
