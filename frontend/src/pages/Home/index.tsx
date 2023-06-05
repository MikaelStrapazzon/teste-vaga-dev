import React from "react";
import {Container, DivMain} from "./styles";
import FormCreate from "./FormCreate";
import ListTable from "./ListTable";

export default function Home() {
  return (
    <Container>
      <DivMain>
        <FormCreate />
        <ListTable />
      </DivMain>
    </Container>
  );
}