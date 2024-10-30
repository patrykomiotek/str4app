import { Helmet } from 'react-helmet-async';
import { Route } from '../routes';
import { OrderSummary } from '@features/products/OrderSummary';
import { Header } from '@ui';

export const OrderSummaryPage = () => {
  return (
    <div>
      <Helmet>
        <title>{Route.ORDER_SUMMARY.title}</title>
      </Helmet>
      <Header>{Route.ORDER_SUMMARY.title}</Header>
      <OrderSummary />
    </div>
  );
};
