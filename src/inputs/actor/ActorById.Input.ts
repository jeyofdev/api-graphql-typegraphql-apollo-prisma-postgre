import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class ActorByIdInput {
    @Field(() => ID, { description: 'Id of the actor' })
    id!: string;
}

export default ActorByIdInput;
