import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class AddActorInput {
    @Field(() => String, { description: 'First name of the actor' })
    firstname!: string;

    @Field(() => String, { description: 'Last name of the actor' })
    lastname!: string;
}

export default AddActorInput;
