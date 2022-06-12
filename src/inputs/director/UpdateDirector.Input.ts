import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class UpdateDirectorInput {
    @Field(() => ID, { description: 'Id of the director' })
    id!: string;

    @Field(() => String, {
        description: 'First name of the director',
        nullable: true,
    })
    firstname?: string;

    @Field(() => String, {
        description: 'Last name of the director',
        nullable: true,
    })
    lastname?: string;
}

export default UpdateDirectorInput;
