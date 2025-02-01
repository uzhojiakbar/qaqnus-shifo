import styled from "styled-components";

export const ButtonContainer = styled.button`
  background-color: var(--main-color);
  font-size: 18px;
  padding: 12px 25px;
  cursor: pointer;
  min-width:${({ mobile }) => mobile ? `${mobile}%` : ' 220px'};
  border: none;
  outline: none;
  color: white;
  border: 1px solid transparent;
  transition: all 0.2s;

  border-radius: 5px;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    /* background-color: white; */
    color: #2C2C2C;
    border: 1px solid var(--main-color);
  }

  &:active {
    transform: scale(1.05);
  }
`;
