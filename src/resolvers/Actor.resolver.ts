import { Args, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import ActorService from '../services/Actor.service';
import Actor from '../models/Actor.model';
import AddActorInput from '../inputs/actor/AddActor.Input';
import ActorByIdInput from '../inputs/actor/ActorById.Input';
import UpdateActorInput from '../inputs/actor/UpdateActor.Input';

@Service()
@Resolver(Actor)
class ActorResolver {
    constructor(private readonly actorService: ActorService) {}

    @Query(() => [Actor], {
        nullable: true,
        description: 'Get all actors',
    })
    async actors(@Ctx() ctx: { prisma: any }) {
        return this?.actorService?.findAllActors(ctx);
    }

    @Query(() => Actor, {
        nullable: true,
        description: 'Get actor by Id',
    })
    async actorById(
        @Args() { id }: ActorByIdInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.actorService?.findOneById(ctx, id);
    }

    @Mutation(() => Actor, {
        nullable: false,
        description: 'Add new actor',
    })
    async addActor(
        @Args() { firstname, lastname }: AddActorInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.actorService?.save(ctx, firstname, lastname);
    }

    @Mutation(() => Actor)
    async updateActor(
        @Args() { id, firstname, lastname }: UpdateActorInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.actorService?.updateOne(ctx, id, firstname, lastname);
    }

    @Mutation(() => Actor, {
        nullable: true,
        description: 'Delete actor by id',
    })
    async deleteActor(
        @Args() { id }: ActorByIdInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.actorService?.deleteOne(ctx, id);
    }
}

export default ActorResolver;
