import { Args, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Service } from 'typedi';
import Director from '../models/Director.model';
import DirectorService from '../services/Director.service';
import AddDirectorInput from '../inputs/director/AddDirector.Input';
import DirectorByIdInput from '../inputs/director/DirectorById.Input';
import UpdateDirectorInput from '../inputs/director/UpdateDirector.Input';

@Service()
@Resolver(Director)
class DirectorResolver {
    constructor(private readonly directorService: DirectorService) {}

    @Query(() => [Director], {
        nullable: true,
        description: 'Get all directors',
    })
    async directors(@Ctx() ctx: { prisma: any }) {
        return this?.directorService?.findAllDirectors(ctx);
    }

    @Query(() => Director, {
        nullable: true,
        description: 'Get director by Id',
    })
    async directorById(
        @Args() { id }: DirectorByIdInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.directorService?.findOneById(ctx, id);
    }

    @Mutation(() => Director, {
        nullable: false,
        description: 'Add new director',
    })
    async addDirector(
        @Args() { firstname, lastname }: AddDirectorInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.directorService?.save(ctx, firstname, lastname);
    }

    @Mutation(() => Director)
    async updateDirector(
        @Args() { id, firstname, lastname }: UpdateDirectorInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.directorService?.updateOne(ctx, id, firstname, lastname);
    }

    @Mutation(() => Director, {
        nullable: true,
        description: 'Delete director by id',
    })
    async deleteDirector(
        @Args() { id }: DirectorByIdInput,
        @Ctx() ctx: { prisma: any }
    ) {
        return this?.directorService?.deleteOne(ctx, id);
    }
}

export default DirectorResolver;
