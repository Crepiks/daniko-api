import { Injectable } from '@nestjs/common';
import path from 'path';
import fs from 'fs-extra';

@Injectable()
export class UploadsService {
  deleteFile(fileName: string): Promise<void> {
    const filePath = path.resolve('./uploads', fileName);
    return fs.remove(filePath);
  }
}
