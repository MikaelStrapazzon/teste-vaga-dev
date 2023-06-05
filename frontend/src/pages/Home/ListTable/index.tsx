import React, {useEffect, useState} from "react";
import {Container, Table, TitleTable} from "./styles";
import {api} from "../../../services/api";

interface enterprise {
  cnpj: string
  name: string
}

export default function ListTable() {
  const [enterprises, setEnterprises] = useState<enterprise[]>([]);

  useEffect(() => {
    api.get("/enterprise")
      .then( response => setEnterprises(response.data) )
  }, []);

  return (
    <Container>
      <TitleTable>Empresas Cadastradas</TitleTable>

      <Table>
        <thead>
          <tr>
            <th>CNPJ</th>
            <th>Nome da Empresa</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {enterprises.map(enterprise => (
            <tr>
              <td>{enterprise.cnpj}</td>
              <td>{enterprise.name}</td>
              <td>
                <a href='#'>Editar</a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}