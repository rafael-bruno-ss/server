import { Client, ConfigOptions } from 'elasticsearch';

const esClientParams: ConfigOptions = {
  host: '127.0.0.1:9200'
};

export const esClient: Client = new Client(esClientParams);
