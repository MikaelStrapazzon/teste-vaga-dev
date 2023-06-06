import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid black;
  
  margin-bottom: 50px;
  
  position: relative;
  
  .head {
    width: 100%;
    
    background-color: rgba(150, 150, 150, 0.4);
    
    border-bottom: 1px solid black;
    
    display: flex;
    align-items: center;
    
    padding: 8px;

    h2 {
      font-size: 14px;
      font-weight: normal;

      margin: 0;
    }
  }
  
  .body {
    padding: 15px 25px;
    
    .row {
      display: flex;
      
      margin-bottom: 15px;
      &:last-of-type {
        margin-bottom: 0;
      }
      
      & > div {
        margin-right: 10px;
        &:last-of-type {
          margin: 0;
        }
      }
      
      input {
        height: 2rem;
        width: 100%;
        
        padding: 0 0.5rem;
        
        border-radius: 0.25rem;
        border: 1px solid black;
        
        font-size: 1rem;
      }
      
      &:last-of-type {
        display: flex;
        justify-content: end;
        
        input[type="submit"], input[type="button"] {
          height: 2.2rem;
          width: auto;

          background: rgba(150, 150, 150, 0.4);

          padding: 0 2.5rem;

          border-radius: 0.25rem;
          border: 0;

          color: #FFF;
          font-size: 1rem;
          font-weight: 600;
          
          &[type="submit"] {
            margin-left: 15px;
            
            background-color: dodgerblue;
          }
        }
      }
    }
  }
`;