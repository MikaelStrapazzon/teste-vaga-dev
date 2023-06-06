import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const TitleTable = styled.h2`
  font-size: 14px;
  font-weight: normal;
  
  margin: 0;
`;

export const Table = styled.table`
  width: 100%;
  
  border-spacing: 0;
  border: 1px solid rgba(150, 150, 150, 0.4);

  text-align: center;
  
  thead th {
    line-height: 2.5rem;
    
    background-color: lightgray;
    border: 1px solid rgba(150, 150, 150, 0.4);

    &:first-of-type {
      padding: 0 2.5rem;
    }

    &:last-of-type {
      width: 100px;
    }
  }
  
  tbody td {
    line-height: 2.5rem;
    
    border: 1px solid rgba(150, 150, 150, 0.4);
  }
`