import { styled } from '@mui/material';

export const WrapperHeroText = styled('div')(
  () =>
    `
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100%;
      justify-content: center;
      color: #fff;
`
);

export const WrapperImageHero = styled('div')(
  () => `
    position: relative;
    width: 100vw;
    height: 60vh;
    background-color: #313131;
`
);
