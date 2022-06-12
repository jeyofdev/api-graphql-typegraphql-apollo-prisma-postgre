import { Args, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import Genre from '../models/Genre.model';
import AddGenreInput from '../inputs/Genre/AddGenre.Input';
import GenreByIdInput from '../inputs/Genre/GenreById.Input';
import UpdateGenreInput from '../inputs/Genre/UpdateGenre.Input';

@Resolver(Genre)
class GenreResolver {
    @Query(() => [Genre], {
        nullable: true,
        description: 'Get all Genres',
    })
    async Genres(@Ctx() ctx: { prisma: any }) {
        return ctx?.prisma?.genre?.findMany();
    }

    @Query(() => Genre, {
        nullable: true,
        description: 'Get Genre by Id',
    })
    async GenreById(
        @Args() { id }: GenreByIdInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return ctx?.prisma?.genre?.findUnique({
            where: { id },
        });
    }

    @Mutation(() => Genre, {
        nullable: false,
        description: 'Add new Genre',
    })
    async addGenre(
        @Args() { name }: AddGenreInput,
        @Ctx() ctx: { prisma: any }
    ) {
        const newGenre = await ctx?.prisma?.genre?.create({
            data: { name },
        });

        return newGenre;
    }

    @Mutation(() => Genre)
    async updateGenre(
        @Args() { id, name }: UpdateGenreInput,
        @Ctx() ctx: { prisma: any }
    ) {
        const commentUpdated = ctx?.prisma?.genre?.update({
            where: { id },
            data: { name },
        });
        return commentUpdated;
    }

    @Mutation(() => Genre, {
        nullable: true,
        description: 'Delete Genre by id',
    })
    async deleteGenre(
        @Args() { id }: GenreByIdInput,
        @Ctx() ctx: { prisma: any }
    ) {
        const currentDocument = ctx?.prisma?.genre?.delete({
            where: { id },
        });
        return currentDocument;
    }
}

export default GenreResolver;
