import {Entity, model, property} from '@loopback/repository';

@model()
export class image extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  imageurl: string;

  @property({
    type: 'date',
    required: true,
  })
  datecreated: string;

  @property({
    type: 'date',
    required: true,
  })
  dateedited: string;

  @property({
    type: 'number',
    required: true,
  })
  userid: number;

  @property({
    type: 'number',
    required: true,
  })
  topicid: number;

  constructor(data?: Partial<image>) {
    super(data);
  }
}
