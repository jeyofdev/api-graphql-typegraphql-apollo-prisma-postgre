/* eslint-disable import/no-cycle */
import { Field, ID, ObjectType } from 'type-graphql';
import Movie from './Movie.model';

@ObjectType({ description: 'Model for the genres' })
class Genre {
    @Field(() => ID)
    readonly id!: string;

    @Field(() => String, { description: 'Label of the genre' })
    name!: string;

    @Field(() => [Movie], { description: 'Movies of the genre' })
    movies?: Movie[];
}

export default Genre;
