/* eslint-disable import/no-cycle */
import { Field, Float, ID, Int, ObjectType } from 'type-graphql';
import Actor from './Actor.model';
import Genre from './Genre.model';

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

    @Field(() => Float, { description: 'Rating of the movie' })
    rating!: number;

    @Field(() => [Actor], { description: 'Actors of the movie' })
    actors!: Actor[];

    @Field(() => [Genre], { description: 'Genres of the movie' })
    genres!: Genre[];
}

export default Movie;
