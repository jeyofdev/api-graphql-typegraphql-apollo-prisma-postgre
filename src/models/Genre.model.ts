import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Model for the genres' })
class Genre {
    @Field(() => ID)
    readonly id!: string;

    @Field(() => String, { description: 'Label of the genre' })
    name!: string;
}

export default Genre;
