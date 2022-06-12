/* eslint-disable import/no-cycle */
import { Field, ID, ObjectType } from 'type-graphql';
import Movie from './Movie.model';

@ObjectType({ description: 'Model for the actors' })
class Actor {
    @Field(() => ID)
    readonly id!: string;

    @Field(() => String, { description: 'Fist name of the actor' })
    firstname!: string;

    @Field(() => String, { description: 'Last name of the actor' })
    lastname!: string;

    @Field(() => [Movie], { description: 'Movies of the actor' })
    movies?: Movie[];
}

export default Actor;
