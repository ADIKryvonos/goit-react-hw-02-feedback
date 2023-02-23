import styled from '@emotion/styled';

export const WrapBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 80px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;

  :not(:last-child) {
    margin-right: 15px;
  }

  svg {
    display: flex;
    justify-content: center;

    margin-right: auto;
    margin-left: auto;

    color: ${props => {
      switch (props.color) {
        case 'good':
          return 'green';

        case 'neutral':
          return 'blue';

        case 'bad':
          return 'red';

        default:
          return 'black';
      }
    }};
  }
`;
