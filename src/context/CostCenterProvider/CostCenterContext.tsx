import { createContext, useState } from "react";
import { IContext, ICostCenterProvider } from "./types";
import { v4 as uuidv4 } from 'uuid';

export const CostCenterContext = createContext<IContext>({
    data: [],
    addRow: async () => {},
    deleteRow: () => '',
  });
  

export const CostCenterProvider = ({ children }: ICostCenterProvider) => {
  const [data, setData] = useState([
    {
      id: uuidv4(),
      descricao: "make",
      centroDeCusto: "0001",
      codigoExterno: "1234",
    },
    {
        id: uuidv4(),
        descricao: "makev",
        centroDeCusto: "0002",
        codigoExterno: "3377",
      },
      {
        id: uuidv4(),
        descricao: "make",
        centroDeCusto: "0003",
        codigoExterno: "2255",
      },
      {
        id: uuidv4(),
        descricao: "make",
        centroDeCusto: "0004",
        codigoExterno: "4422",
      },
      {
        id: uuidv4(),
        descricao: "make",
        centroDeCusto: "0005",
        codigoExterno: "3322",
      },
      {
        id: uuidv4(),
        descricao: "make",
        centroDeCusto: "0006",
        codigoExterno: "2211",
      },
  ]);

  async function addRow(
    descricao: string,
    centroDeCusto: string,
    codigoExterno: string
  ) {
    setData([...data, {id: uuidv4(), descricao, centroDeCusto, codigoExterno}]);
  }
  function deleteRow(id: string) {
    setData(data.filter(row => !id.includes(row.id)))
  }
  return (
    <CostCenterContext.Provider value={{data, deleteRow, addRow }}>
      {children}
    </CostCenterContext.Provider>
  );
};
