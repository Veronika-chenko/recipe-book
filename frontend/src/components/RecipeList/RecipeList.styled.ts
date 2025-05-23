import styled from "styled-components";
import { devices } from "@/components/common";

export const FiltersBox = styled.div`
  margin-bottom: 40px;
  font-size: 20px;
  p:not(:first-child) {
    margin-top: 10px;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-auto-columns: 100%;
  grid-gap: 40px;
  ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  ${devices.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Item = styled.li`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 0px 20px rgba(53, 53, 53, 0.45);

  transition: transform 250ms linear;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const ImageWrap = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentBox = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
