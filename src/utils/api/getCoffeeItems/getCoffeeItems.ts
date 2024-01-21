import { AxiosRequestConfig } from 'axios'

import { apiRequest } from '../api'

export const getCoffeeItems = async () => {
  const config: AxiosRequestConfig = {
    url: 'simple-coffee-listing-data.json',
    method: 'GET'
  }

  const request = await apiRequest(config)
  return request
}
