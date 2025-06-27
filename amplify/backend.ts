import { defineBackend } from '@aws-amplify/backend';
import { sayHello } from './functions/say-hello/resource';
import { data } from './data/resource';

export const backend = defineBackend({
  sayHello,
  data,
}); 