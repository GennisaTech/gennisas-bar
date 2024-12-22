/* eslint-disable @typescript-eslint/no-explicit-any */
import { request } from '@/utils/request'

export const registerUser = (data: any) => {
  return request('POST', '/user/register', data)
}
