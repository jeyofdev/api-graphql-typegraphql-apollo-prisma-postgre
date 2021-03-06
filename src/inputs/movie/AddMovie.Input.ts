import { ArgsType, Field, Float, ID, Int } from 'type-graphql';

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

    @Field(() => Float, { description: 'Rating of the movie' })
    rating!: number;

    @Field(() => [ID])
    actorIds!: string[];

    @Field(() => [ID])
    genreIds!: string[];

    @Field(() => ID)
    directorId!: string;
}

export default AddMovieInput;
