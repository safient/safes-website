import styled from 'styled-components';

export const FeaturesContainer = styled.div`
  margin: 10rem 0;
  h2 {
    text-align: center;
    font-size: 36px;
  }
  .sub-heading {
    text-align: center;
    margin-bottom: 6rem;
    font-size: 2rem;
    font-weight: 500;
  }
  @media (max-width: 576px) {
    margin-top: 12rem;
    h2 {
      line-height: 1.4;
    }
  }
`;

export const FeatureCard = styled.div`
  background: #25282c;
  padding: 4rem;
  flex: 0 0 38.4rem;
  transition: box-shadow 0.3s;
  /* border: 0.1px solid;
  border-image-slice: 1; */

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 11px #5d5dff;
    border-image-source: linear-gradient(43deg, #e85602 0, #f5b46c 29%, #d9caf4 68%);
  }
  @media (max-width: 576px) {
    flex: 0 0 34.4rem;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.4rem;
  margin-top: 4rem;

  h4 {
    margin-top: 2rem;
    color: #d9e3ea;
  }

  p {
    margin-top: 1rem;
    line-height: 1.9;
  }
  .linkText {
    color: #5d5dff;
  }
  @media (max-width: 576px) {
    justify-content: center;
  }
`;

export const IconContainer = styled.div`
  background: linear-gradient(90deg, transparent, transparent),
    linear-gradient(209.87deg, #14acb6 31.2%, #7141d7 71.49%);
  display: inline-flex;

  border-radius: 50%;

  img {
    padding: 2rem;
  }
`;
