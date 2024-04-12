import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }
`;
