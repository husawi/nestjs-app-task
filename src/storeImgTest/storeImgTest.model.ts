import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Brands {
  @Field((type) => String)
  id: number;

  @Field()
  file?: string;
}