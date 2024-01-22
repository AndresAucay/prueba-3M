
export interface HttpCliente {
    get(url: string, config?: any): Promise<any>;

}
