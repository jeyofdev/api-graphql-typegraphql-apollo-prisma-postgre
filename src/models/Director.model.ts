import { Field, ID, ObjectType } from 'type-graphql';
import Movie from './Movie.model';

@ObjectType({ description: 'Model for the directors' })
class Director {
    @Field(() => ID)
    readonly id!: string;

    @Field(() => String, { description: 'Fist name of the director' })
    firstname!: string;

    @Field(() => String, { description: 'Last name of the director' })
    lastname!: string;

    @Field(() => [Movie], { nullable: true })
    movies?: Movie[];
}

export default Director;
