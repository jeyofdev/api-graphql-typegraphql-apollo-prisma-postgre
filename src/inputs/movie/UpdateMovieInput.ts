import { ArgsType, Field, ID, Int } from 'type-graphql';

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
}

export default UpdateMovieInput;
