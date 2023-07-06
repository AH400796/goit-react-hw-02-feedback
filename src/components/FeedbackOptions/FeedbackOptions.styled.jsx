import styled from 'styled-components';

export const FeedbackBtn = styled.button`
  width: 90px;
  padding: 3px 5px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 8px;
  background-color: transparent;

  border: 1px solid rgb(177, 177, 177);
  cursor: pointer;
`;

export const List = styled.div`
  display: flex;
  gap: 10px;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  border-radius: 8px;
  background-color: rgb(252, 251, 205);

  &:last-child {
    background-color: rgb(253, 215, 215);
  }

  &:first-child {
    background-color: rgb(204, 255, 208);
  }
`;
