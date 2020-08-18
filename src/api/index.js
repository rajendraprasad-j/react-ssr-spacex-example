import { httpClient } from './httpClient';
import { launch } from './launchApi';

export function apiFactory(http) {
  return {
    launch: launch(http)
  };
}

const http = httpClient('https://api.spacexdata.com/v3');
export const api = apiFactory(http);
