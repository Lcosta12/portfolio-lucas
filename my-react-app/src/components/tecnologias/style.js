import styled from "styled-components";

export const TechSection = styled.section`
  padding: 20px;
  text-align: center;
`;

export const TechItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const TechItemCard = styled.div`
  width: 120px;
  height: 140px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }

  img {
    width: 50px;
    height: 50px;
  }

  p {
    margin: 0;
    font-size: 14px;
    font-weight: bold;
    color: #333;
  }
`;
