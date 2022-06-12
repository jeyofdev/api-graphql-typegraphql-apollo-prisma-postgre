import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class AddGenreInput {
    @Field(() => String, { description: 'Label of the genre' })
    name!: string;
}

export default AddGenreInput;
