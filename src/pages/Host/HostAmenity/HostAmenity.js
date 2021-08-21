import React, { useEffect, useCallback } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import HostAmenityCom from './HostAmenityCom';
import { FACILITY_API } from '../../../config';

function HostAmenity({
  productList,
  setProductList,
  setCheckedBoxInputs,
  checkedBoxInputs,
}) {
  const getData = useCallback(async () => {
    try {
      const response = await axios.get(FACILITY_API);
      setProductList(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <FormBoxAmenity>
      <FormTextAmenity>
        <FormTextLeft>
          <FormBoxTitle>편의시설</FormBoxTitle>
          <FormBoxTitleOption>*</FormBoxTitleOption>
        </FormTextLeft>
        <FormBoxOption>구비된 편의시설을 선택해주세요.</FormBoxOption>
      </FormTextAmenity>

      <FormIconWrap>
        {productList &&
          productList.map((iconImg, index) => {
            return (
              <HostAmenityCom
                alt={iconImg.alt}
                image={iconImg.image}
                key={iconImg.id}
                id={iconImg.id}
                name={iconImg.name}
                index={iconImg[index]}
                setProductList={setProductList}
                setCheckedBoxInputs={setCheckedBoxInputs}
                checkedBoxInputs={checkedBoxInputs}
              />
            );
          })}
      </FormIconWrap>
    </FormBoxAmenity>
  );
}

export default HostAmenity;

const FormTextLeft = styled.div`
  display: flex;
  align-items: center;
`;

const FormBoxTitle = styled.div`
  height: 30px;
  font-size: 20px;
  font-weight: 700;
`;

const FormBoxTitleOption = styled.span`
  color: #ff3a48;
  font-size: 24px;
  padding-left: 5px;
  font-weight: 700;
`;

const FormBoxOption = styled.span`
  font-size: 16px;
  color: #777;
`;

const FormBoxAmenity = styled.div`
  margin-top: 40px;
  margin-bottom: 20px;
`;
const FormTextAmenity = styled.div`
  border-bottom: 1px solid #777;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FormIconWrap = styled.div`
  display: flex;
  justify-content: space-around;
`;
