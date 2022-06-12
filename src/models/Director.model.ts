import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Model for the directors' })
class Director {
    @Field(() => ID)
    readonly id!: string;

    @Field(() => String, { description: 'Fist name of the director' })
    firstname!: string;

    @Field(() => String, { description: 'Last name of the director' })
    lastname!: string;
}

export default Director;
