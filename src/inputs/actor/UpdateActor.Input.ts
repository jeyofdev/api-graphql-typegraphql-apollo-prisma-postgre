import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class UpdateActorInput {
    @Field(() => ID, { description: 'Id of the actor' })
    id!: string;

    @Field(() => String, {
        description: 'First name of the actor',
        nullable: true,
    })
    firstname?: string;

    @Field(() => String, {
        description: 'Last name of the actor',
        nullable: true,
    })
    lastname?: string;
}

export default UpdateActorInput;
