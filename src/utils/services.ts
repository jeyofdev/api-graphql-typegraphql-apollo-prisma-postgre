/* eslint-disable arrow-body-style */
type RelationType = (ids?: string[]) => {
    id: string;
}[];

const generateRelation: RelationType = (ids) => {
    return ids ? ids?.map((genreId) => ({ id: genreId })) : [];
};

export default generateRelation;
