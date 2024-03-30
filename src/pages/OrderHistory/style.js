import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  main{
    min-height: calc(100dvh - 200px);

    h2{
      font-family: "Poppins";
      font-weight: 500;
      font-size: 3.2rem;
      margin: 2rem 2rem 4rem;
    }

    /* button:nth-child(2){
      font-family: "Poppins";
      font-weight: 500;
      font-size: 2rem;
      margin: 6rem 2rem;
      background: none;
      display: flex;
      align-items: center;
      gap: 1rem
    } */
  }
`;

export const MobileContent =  styled.div`
  margin: 2rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  
  @media(min-width: 768px){
    display: none;
  }

  .request-content{
    border: 2px solid darkgray;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
    max-width: 30rem;
    cursor: pointer;
    transition: all ease-in-out 200ms;

    &:hover{
      background-color: darkslategrey;
    }
  }

  p, span{
    font-size: 1.4rem;
  }

  .data-info{
    display: flex;
    justify-content: space-between;
  }

  .plate-info{
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    text-transform: capitalize;
  }

  .color-status{
    display: flex;
    align-items: center;
    gap: .8rem;
    text-transform: capitalize;
  }

  button{
    font-family: "Poppins";
    font-weight: 500;
    background: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    text-transform: capitalize;
  }
`;

export const DesktopContent = styled.div`
  max-width: 120rem;
  margin: 4rem;
  display: none;

  @media(min-width: 768px){
    display: block;
  }

  @media(min-width: 1300px){
    margin: auto;
  }


  .table-container {
    border: 2px solid ${({theme}) => theme.COLORS.DARK_1000};
    border-bottom: none;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    overflow: hidden; 
    margin-bottom: 6rem;
  }

  table{
    width: calc(100% + 4px);
    border-collapse: collapse;
    margin-top: -2px;
    margin-left: -2px;

    .all-plates{
      p{
        display: inline-block;
        margin-right: 1rem;
      }

      p:last-child{
        margin-right: 0;
      }
    }

    td {
      padding: 1.6rem 2.4rem;
      color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

    th{
      padding: 2.4rem;
      color: ${({theme}) => theme.COLORS.LIGHT_300};
    }
    
    th , td{
      border: 2px solid ${({theme}) => theme.COLORS.DARK_1000};
      text-align: start;
    }

    th:nth-child(4){
      width: 17rem;
    }

    th:nth-child(1){
      width: 18rem;
    }

    th:nth-child(2){
      width: 10rem;
    }

    p{
      color: ${({theme}) => theme.COLORS.LIGHT_400};
    }

    tr td:nth-child(1){
      text-transform: capitalize;
    }
  }

  .each-payment{
    cursor: pointer;
    transition: all ease-in-out 200ms;

    &:hover{
      background-color: ${({theme}) => theme.COLORS.DARK_1000};
    }
  }

  .status-payment{    
    /* display: inline-block; */

    span{
      display: inline-block;
    }

    button span{
      margin-right: .8rem;
      background-color: red;
    }
  }
`;