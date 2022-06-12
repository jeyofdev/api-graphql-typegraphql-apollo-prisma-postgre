import { ArgsType, Field, ID } from 'type-graphql';

@ArgsType()
class DirectorByIdInput {
    @Field(() => ID, { description: 'Id of the director' })
    id!: string;
}

export default DirectorByIdInput;
