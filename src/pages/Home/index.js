import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { MdAddShoppingCart } from 'react-icons/md';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as cartActions from '../../store/modules/cart/actions';

import { Container, Aside, ProductsContainer, ProductList } from './styles';

class Home extends Component {
  state = {
    products: [],
    currentProducts: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map((product) => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
    this.setState({ currentProducts: data });
  }

  handleAddProduct = (id) => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  handleCategory = (category) => {
    const { products } = this.state;

    if (category === 'all') {
      this.setState({ currentProducts: products });

      return;
    }

    const data = products.filter((product) => {
      return product.category === category;
    });

    this.setState({ currentProducts: data });
  };

  render() {
    const { currentProducts } = this.state;
    const { amount } = this.props;

    return (
      <>
        <Container>
          <Aside>
            <ul>
              <li>
                <button
                  type="button"
                  onClick={() => this.handleCategory('all')}
                >
                  Todos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => this.handleCategory('Food')}
                >
                  Alimentícios
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => this.handleCategory('clean')}
                >
                  Limpeza
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => this.handleCategory('drinks')}
                >
                  Bebidas
                </button>
              </li>
            </ul>
          </Aside>
          <ProductsContainer>
            <ProductList>
              {currentProducts.map((product) => (
                <li key={product.id}>
                  <img src={product.image} alt={product.title} />
                  <strong>{product.title}</strong>
                  <span>{product.priceFormatted}</span>
                  <button
                    type="button"
                    onClick={() => this.handleAddProduct(product.id)}
                  >
                    <div>
                      <MdAddShoppingCart size={16} color="#fff" />{' '}
                      {amount[product.id] || 0}
                    </div>
                    <span>Adicionar ao carrinho</span>
                  </button>
                </li>
              ))}
            </ProductList>
          </ProductsContainer>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(cartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
