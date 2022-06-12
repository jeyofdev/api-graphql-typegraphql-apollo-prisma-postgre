import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class UpdateGenreInput {
    @Field(() => ID, { description: 'Id of the genre' })
    id!: string;

    @Field(() => String, {
        description: 'Label of the genre',
        nullable: true,
    })
    name?: string;
}

export default UpdateGenreInput;
