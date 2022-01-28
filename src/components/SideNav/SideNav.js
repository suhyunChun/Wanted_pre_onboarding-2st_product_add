import React from 'react';
import styled from 'styled-components';

const SideNav = () => {
  const SideNavBox = styled.div`
    position: relative;
    height: 100%;
  `;
  const SideNavFixed = styled.div`
    position: fixed;
    top: 55px;
    left: 0px;
    height: 100%;
    background-color: white;
    border-left: 1px solid #cecece;
    z-index: 999;
  `;
  const SideLeftNav = styled.div`
    position: relative;
    min-width: 198px;
    max-width: 198px;
    font-size: 15px;
    padding: 10px 20px;
    border-bottom: 1px solid #cecece;
    cursor: pointer;
  `;
  const SideNavArrow = styled.span`
    position: fixed;
    left: 150px;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
  `;
  const SideNavDetail = styled.div`
    min-width: 198px;
    max-width: 198px;
    font-size: 15px;
    padding: 10px 24px;
    background-color: #efeff0;
    cursor: pointer;
  `;
  const SideNavDetailSelect = styled.div`
    min-width: 198px;
    max-width: 198px;
    font-size: 15px;
    font-weight: 600;
    padding: 10px 24px;
    color: #000066;
    background-color: #ebe4ff;
    cursor: pointer;
  `;
  return (
    <div>
      <SideNavBox>
        <SideNavFixed>
          <SideLeftNav>
            <span>기본설정</span>
            <SideNavArrow>∨</SideNavArrow>
          </SideLeftNav>
          <SideLeftNav>
            <span>회원</span>
            <SideNavArrow>∨</SideNavArrow>
          </SideLeftNav>
          <SideLeftNav>
            <span>진열</span>
            <SideNavArrow>∨</SideNavArrow>
          </SideLeftNav>
          <SideLeftNav>
            <span>상품</span>
            <SideNavArrow>∨</SideNavArrow>
          </SideLeftNav>
          <SideNavDetail>상품 리스트</SideNavDetail>
          <SideNavDetail>상품 재고 관리</SideNavDetail>
          <SideNavDetailSelect>상품 등록</SideNavDetailSelect>
          <SideLeftNav>
            <span>주문</span>
            <SideNavArrow>∨</SideNavArrow>
          </SideLeftNav>
          <SideLeftNav>
            <span>배송</span>
            <SideNavArrow>∨</SideNavArrow>
          </SideLeftNav>
          <SideLeftNav>
            <span>프로모션</span>
            <SideNavArrow>∨</SideNavArrow>
          </SideLeftNav>
          <SideLeftNav>
            <span>혜택</span>
            <SideNavArrow>∨</SideNavArrow>
          </SideLeftNav>
          <SideLeftNav>
            <span>고객 센터 관리</span>
            <SideNavArrow>∨</SideNavArrow>
          </SideLeftNav>
          <SideLeftNav>
            <span>알림</span>
            <SideNavArrow>∨</SideNavArrow>
          </SideLeftNav>
        </SideNavFixed>
      </SideNavBox>
    </div>
  );
};

export default SideNav;
