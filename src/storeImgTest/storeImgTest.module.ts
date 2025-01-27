import { Module } from 'node_modules7/@nestjs/common';
import { StoreImgTestService } from './storeImgTest.service';
import { StoreImgTestResolver } from './storeImgTest.resolver';

@Module({
  providers: [StoreImgTestService, StoreImgTestResolver]
})
export class BrandsModule {}
