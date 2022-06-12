import { Args, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import Actor from '../models/Actor.model';
import AddActorInput from '../inputs/actor/AddActor.Input';
import ActorByIdInput from '../inputs/actor/ActorById.Input';
import UpdateActorInput from '../inputs/actor/UpdateActor.Input';

@Resolver(Actor)
class ActorResolver {
    @Query(() => [Actor], {
        nullable: true,
        description: 'Get all actors',
    })
    async actors(@Ctx() ctx: { prisma: any }) {
        return ctx?.prisma?.actor?.findMany({
            include: {
                movies: true,
            },
        });
    }

    @Query(() => Actor, {
        nullable: true,
        description: 'Get actor by Id',
    })
    async actorById(
        @Args() { id }: ActorByIdInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return ctx?.prisma?.actor?.findUnique({
            where: { id },
            include: {
                movies: true,
            },
        });
    }

    @Mutation(() => Actor, {
        nullable: false,
        description: 'Add new actor',
    })
    async addActor(
        @Args() { firstname, lastname }: AddActorInput,
        @Ctx() ctx: { prisma: any }
    ) {
        const newActor = await ctx?.prisma?.actor?.create({
            data: {
                firstname,
                lastname,
            },
            include: {
                movies: true,
            },
        });

        return newActor;
    }

    @Mutation(() => Actor)
    async updateActor(
        @Args() { id, firstname, lastname }: UpdateActorInput,
        @Ctx() ctx: { prisma: any }
    ) {
        const commentUpdated = ctx?.prisma?.actor?.update({
            where: { id },
            data: {
                firstname,
                lastname,
            },
            include: {
                movies: true,
            },
        });
        return commentUpdated;
    }

    @Mutation(() => Actor, {
        nullable: true,
        description: 'Delete actor by id',
    })
    async deleteActor(
        @Args() { id }: ActorByIdInput,
        @Ctx() ctx: { prisma: any }
    ) {
        const currentDocument = ctx?.prisma?.actor?.delete({
            where: {
                id,
                include: {
                    movies: true,
                },
            },
        });
        return currentDocument;
    }
}

export default ActorResolver;
