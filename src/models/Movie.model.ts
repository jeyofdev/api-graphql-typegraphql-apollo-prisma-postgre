import { Field, ID, Int, ObjectType } from 'type-graphql';

@ObjectType({ description: 'Model for the movies' })
class Movie {
    @Field(() => ID)
    readonly id!: string;

    @Field(() => String, { description: 'Title of the movie' })
    title!: string;

    @Field(() => String, { description: 'Synopsys of the movie' })
    synopsys!: string;

    @Field(() => Int, { description: 'Release date of the movie' })
    year!: number;

    @Field(() => Int, { description: 'Duration of the movie' })
    duration!: number;
}

export default Movie;
