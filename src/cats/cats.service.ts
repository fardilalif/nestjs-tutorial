import { Injectable } from '@nestjs/common';
import { Cat } from 'src/cats/interfaces/cat.interface';
import { DataSource } from 'typeorm';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  constructor(private dataSource: DataSource) {}

  create(cat: Cat) {
    this.cats.push(cat);
  }

  // example to create a user
  createUser(name: string) {
    this.dataSource.query(`INSERT INTO users (name) VALUES ('${name}')`);
  }

  findAll() {
    return this.dataSource.query('SELECT * from users');
  }
}
