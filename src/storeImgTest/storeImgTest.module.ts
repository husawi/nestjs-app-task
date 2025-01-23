import { Module } from '@nestjs/common';
import { StoreImgTestService } from './storeImgTest.service';
import { StoreImgTestResolver } from './storeImgTest.resolver';

@Module({
  providers: [StoreImgTestService, StoreImgTestResolver]
})
export class BrandsModule {}
