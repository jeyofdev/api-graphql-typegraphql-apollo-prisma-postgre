import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class MovieByIdInput {
    @Field(() => ID, { description: 'Id of the movie' })
    id!: string;
}

export default MovieByIdInput;
