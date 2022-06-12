import { ArgsType, Field, Int } from 'type-graphql';

@ArgsType()
class AddMovieInput {
    @Field(() => String, { description: 'Title of the movie' })
    title!: string;

    @Field(() => String, { description: 'Synopsys of the movie' })
    synopsys!: string;

    @Field(() => Int, { description: 'Release date of the movie' })
    year!: number;

    @Field(() => Int, { description: 'Duration of the movie' })
    duration!: number;
}

export default AddMovieInput;
