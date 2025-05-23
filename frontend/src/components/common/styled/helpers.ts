"use client";
import styled from "styled-components";
import { devices, Sizes } from "./mediaRules";

export const Section = styled.section`
  padding: 40px 0;
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  ${devices.tablet} {
    max-width: ${Sizes.tablet}px;
    padding: 0 60px;
  }
  ${devices.desktop} {
    max-width: ${Sizes.desktop}px;
  }
`;
