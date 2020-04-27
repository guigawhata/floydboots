import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Aside = styled.aside`
  width: 30%;

  ul {
    list-style: none;

    li {
      margin-bottom: 15px;

      button {
        width: 100px;
        background: #198000;
        color: #fff;
        border: 0;
        border-radius: 4px;
        overflow: hidden;
        margin-top: auto;
        padding: 10px;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#198000')};
        }
      }
    }
  }
`;

export const ProductsContainer = styled.div`
  flex: 1;
`;

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 225px;
    }

    > strong {
      font-size: 16px;
      line-height: 25px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #198000;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      padding: 0;
      transition: background 0.2s;

      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.03, '#198000')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        svg {
          margin-right: 5px;
        }
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
