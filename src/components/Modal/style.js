import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  z-index: 2;
  inset: 0;
  
`;

export const Confirm = styled.div`
  background-color: ${({theme}) => theme.COLORS.DARK_600};
  position: absolute;
  width: 280px;
  height: 160px;
  border-radius: 4px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media(min-width: 768px){
    width: 420px;
    height: 240px;
  }

  .button-container{
    display: flex;
    gap: 2rem;
  }
`;