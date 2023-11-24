
export interface ICostCenter {
    id: string;
    descricao: string;
    centroDeCusto: string;
    codigoExterno: string;
}
export interface IUpdatedData {
    descricao: string;
    centroDeCusto: string;
    codigoExterno: string;
}

export interface IContext {
    data: ICostCenter[];
    addRow: (descricao: string, centroDeCusto: string, codigoExterno: string) => Promise<void>;
    deleteRow: (id: string) => void;  
    updateData: (id: string, updatedData: ICostCenter) => void;
}

export interface ICostCenterProvider {
    children: React.ReactNode;
}