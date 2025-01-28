import { Injectable } from '@nestjs/common';
import { FileUpload } from 'graphql-upload';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class StoreImgTestService {


    async addImg(id: string, file: FileUpload): Promise<Boolean> {
        

    const { createReadStream, filename, mimetype, encoding } = await file;


    const filePath = path.join(__dirname,'../../src/', 'uploads', `${filename}.${mimetype}`);

    const stream =  createReadStream();

    await new Promise((resolve, reject) => {
      const writeStream = fs.createWriteStream(filePath);
      stream.pipe(writeStream);
      stream.on("end", resolve);
      stream.on("error", reject);
    });

        return true;
  }




}
