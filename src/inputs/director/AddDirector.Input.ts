import { ArgsType, Field } from 'type-graphql';

@ArgsType()
class AddDirectorInput {
    @Field(() => String, { description: 'First name of the director' })
    firstname!: string;

    @Field(() => String, { description: 'Last name of the director' })
    lastname!: string;
}

export default AddDirectorInput;
