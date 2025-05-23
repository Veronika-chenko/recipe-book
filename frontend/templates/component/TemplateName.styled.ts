import styled from "styled-components";
import { devices } from "@/components/common";

export const ExampleComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${devices.tablet} {
  }
  ${devices.desktop} {
  }
`;
