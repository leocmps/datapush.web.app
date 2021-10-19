import axios, { AxiosResponse } from 'axios'

export class Service {
  static async getCompanies (): Promise<AxiosResponse<any>> {
    return await axios.get('https://localhost:5001/v1/companies')
  }

  static async getCompaniesByCode (code: string): Promise<AxiosResponse<any>> {
    return await axios.get(`https://localhost:5001/v1/companies/${code}`)
  }

  static async getCompaniesFiltered (name: string): Promise<AxiosResponse<any>> {
    return await axios.get(`https://localhost:5001/v1/companies/${name}/filter`)
  }
}
