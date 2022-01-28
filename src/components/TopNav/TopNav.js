import React from 'react';
import styled from 'styled-components';

const TopNav = () => {
  const MainTopNavBox = styled.div`
    position: relative;
    height: 55px;
  `;
  const MainTopNav = styled.div`
    position: fixed;
    top: 0;
    left: 0px;
    min-width: 201px;
    max-width: 201px;
    font-size: 24px;
    font-weight: 600;
    padding: 15px 20px;
    color: #000066;
    background-color: white;
    border-right: 1px solid #cecece;
    border-bottom: 1px solid #cecece;
    border-left: 1px solid #cecece;
    cursor: pointer;
    z-index: 99;
  `;
  const SubTopNav = styled.div`
    position: fixed;
    top: 0;
    left: 0px;
    padding: 27px 549.5px;
    background-color: white;
    border-right: 1px solid #cecece;
    border-bottom: 1px solid #cecece;
    z-index: 98;
  `;

  return (
    <MainTopNavBox>
      <MainTopNav>Sir.LOIN</MainTopNav>
      <SubTopNav></SubTopNav>
    </MainTopNavBox>
  );
};

export default TopNav;
