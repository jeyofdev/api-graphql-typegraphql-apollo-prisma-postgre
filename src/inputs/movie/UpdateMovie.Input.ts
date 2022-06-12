import { ArgsType, Field, Float, ID, Int } from 'type-graphql';

@ArgsType()
class UpdateMovieInput {
    @Field(() => ID, { description: 'Id of the movie' })
    id!: string;

    @Field(() => String, { description: 'Title of the movie', nullable: true })
    title?: string;

    @Field(() => String, {
        description: 'Synopsys of the movie',
        nullable: true,
    })
    synopsys?: string;

    @Field(() => Int, {
        description: 'Release date of the movie',
        nullable: true,
    })
    year?: number;

    @Field(() => Int, { description: 'Duration of the movie', nullable: true })
    duration?: number;

    @Field(() => Float, { description: 'Rating of the movie', nullable: true })
    rating?: number;

    @Field(() => [ID], { nullable: true })
    actorIds?: string[];

    @Field(() => [ID], { nullable: true })
    genreIds?: string[];
}

export default UpdateMovieInput;
