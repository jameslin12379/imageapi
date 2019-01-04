import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {image} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ImageRepository extends DefaultCrudRepository<
  image,
  typeof image.prototype.id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(image, dataSource);
  }
}
