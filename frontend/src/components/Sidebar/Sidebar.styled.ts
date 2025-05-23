import styled from "styled-components";
import { devices, Sizes } from "@/components/common";

export const ExampleComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${devices.tablet} {
  }
  ${devices.desktop} {
  }
`;

export const Box = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;

  ${devices.tablet} {
    flex-shrink: 0;
    position: relative;
    top: 0;
    bottom: 0;
    margin: 0;
    padding-top: 43px;
    max-width: 100%;
    width: 30%;
  }
  ${devices.desktop} {
    width: 384px;
  }
`;

export const InnerBox = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  max-width: ${Sizes.mobile}px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const RecipeName = styled.p`
  font-size: 20px;
  cursor: pointer;
`;
