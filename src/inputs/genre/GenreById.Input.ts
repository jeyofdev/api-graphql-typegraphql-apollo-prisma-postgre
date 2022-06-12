import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class GenreByIdInput {
    @Field(() => ID, { description: 'Id of the genre' })
    id!: string;
}

export default GenreByIdInput;
