import { Models } from './models';

export interface BaseModel {
  prototype?;
  associate?(models: Models): void;
  esSynchronize?();
}
