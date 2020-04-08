/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/bota-militar-100-couro-acero-tiger-cano-medio/04/L27-0113-004/L27-0113-004_zoom2.jpg?ims=326x"
                alt="Bota"
              />
            </td>
            <td>
              <strong>Bota Legal</strong>
              <span>R$ 269,90</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#198000" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#198000" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$ 539,80</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#198000" />
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 1927,26s</strong>
        </Total>
      </footer>
    </Container>
  );
}
