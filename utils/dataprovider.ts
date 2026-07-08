import fs from 'fs';
import { parse } from 'csv-parse/sync';
import { LoginTestData } from './types';

export class DataProvider {

  static getTestDataFromJson(filePath: string): LoginTestData[] {
    const data: LoginTestData[] = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return data;
  }

  static getTestDataFromCsv(filePath: string): LoginTestData[] {
    const data: LoginTestData[] = parse(fs.readFileSync(filePath), {
      columns: true,
      skip_empty_lines: true,
    });
    return data;
  }

}