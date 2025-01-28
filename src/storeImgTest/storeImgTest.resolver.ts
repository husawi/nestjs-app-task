import {
  Args,
  Mutation,
  Query,
  Resolver,
} from '@nestjs/graphql';
import { StoreImgTestService } from './storeImgTest.service';
import { GraphQLUpload, FileUpload } from 'graphql-upload';

@Resolver(() => Boolean)
export class StoreImgTestResolver {
  constructor(
    private storeImgTestService: StoreImgTestService,
  ) { }


  @Query(() => String)
  getaddImg(): void { }

  @Mutation(() => Boolean)
  addImg(@Args('id') id: string, @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload): Promise<Boolean> {
    return this.storeImgTestService.addImg(id, file)
  }
}
