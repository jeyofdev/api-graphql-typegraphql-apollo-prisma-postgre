import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Model for the actors' })
class Actor {
    @Field(() => ID)
    readonly id!: string;

    @Field(() => String, { description: 'Fist name of the actor' })
    firstname!: string;

    @Field(() => String, { description: 'Last name of the actor' })
    lastname!: string;
}

export default Actor;
