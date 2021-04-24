export const baseEndPoint:string = "https://django-api-portfolio.herokuapp.com/api"
export const endpoint = (endpoint: string): string => baseEndPoint + endpoint

export const endpointGetWork = endpoint("/work")
