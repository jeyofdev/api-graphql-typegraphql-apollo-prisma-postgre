import { Args, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import Director from '../models/Director.model';
import AddDirectorInput from '../inputs/director/AddDirector.Input';
import DirectorByIdInput from '../inputs/director/DirectorById.Input';
import UpdateDirectorInput from '../inputs/director/UpdateDirector.Input';

@Resolver(Director)
class DirectorResolver {
    @Query(() => [Director], {
        nullable: true,
        description: 'Get all directors',
    })
    async directors(@Ctx() ctx: { prisma: any }) {
        return ctx?.prisma?.director?.findMany();
    }

    @Query(() => Director, {
        nullable: true,
        description: 'Get director by Id',
    })
    async directorById(
        @Args() { id }: DirectorByIdInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return ctx?.prisma?.director?.findUnique({
            where: { id },
        });
    }

    @Mutation(() => Director, {
        nullable: false,
        description: 'Add new director',
    })
    async addDirector(
        @Args() { firstname, lastname }: AddDirectorInput,
        @Ctx() ctx: { prisma: any }
    ) {
        const newDirector = await ctx?.prisma?.director?.create({
            data: {
                firstname,
                lastname,
            },
        });

        return newDirector;
    }

    @Mutation(() => Director)
    async updateDirector(
        @Args() { id, firstname, lastname }: UpdateDirectorInput,
        @Ctx() ctx: { prisma: any }
    ) {
        const commentUpdated = ctx?.prisma?.director?.update({
            where: { id },
            data: {
                firstname,
                lastname,
            },
        });
        return commentUpdated;
    }

    @Mutation(() => Director, {
        nullable: true,
        description: 'Delete director by id',
    })
    async deleteDirector(
        @Args() { id }: DirectorByIdInput,
        @Ctx() ctx: { prisma: any }
    ) {
        const currentDocument = ctx?.prisma?.director?.delete({
            where: { id },
        });
        return currentDocument;
    }
}

export default DirectorResolver;
