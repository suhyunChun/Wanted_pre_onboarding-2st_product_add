import React, { Fragment } from 'react';
import SetPickDeliveryDate from './SetPickDeliveryDate';
import SetPickup from './SetPickup';
import SetPreDeliveryDate from './SetPreDeliveryDate';

const checkCurrentCategory = category => {
  switch (category) {
    case '사용자 배송일 출발일 지정':
      return <SetPickDeliveryDate />;
    case '방문 수령':
      return <SetPickup />;
    case '선 주문 예약 배송':
      return <SetPreDeliveryDate />;
    default:
      return null;
  }
};

const SetDefaultDelivery = ({ category }) => {
  return <Fragment>{checkCurrentCategory(category)}</Fragment>;
};

export default SetDefaultDelivery;
