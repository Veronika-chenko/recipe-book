import styled from "styled-components";
import { devices } from "@/components/common";
import Link from "next/link";

export const ExampleComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${devices.tablet} {
  }
  ${devices.desktop} {
  }
`;

export const Flexbox = styled.div`
  display: flex;
`;

export const RecipeImageWrap = styled.div`
  width: 500px;
  height: 500px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const Instruction = styled(Text)`
  text-align: center;
`;

export const Button = styled.button`
  font-size: 20px;
  width: max-content;
`;

export const IngredientList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export const Name = styled(Text)`
  text-align: center;
`;
