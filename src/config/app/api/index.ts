import axios, { CreateAxiosDefaults } from 'axios'

const options: CreateAxiosDefaults = {
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL
}

export const axiosInstanse = axios.create(options)
axiosInstanse.interceptors.response.use((response) => response.data)