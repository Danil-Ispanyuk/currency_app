import styled from "styled-components";
import { ReactComponent as IconCheck } from "../../../../assets/check.svg";
import { ReactComponent as IconClose } from "../../../../assets/close.svg";
export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 20;
  max-width: 200px;
  width: 100%;
  text-align: center;
  transform: translate(-50%, -50%);
`;

export const Icons = styled.div`
  position: absolute;
  z-index: 10;
  top: -10px;
  right: -10px;
  display: flex;
  align-items: center;
`;

export const Save = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;
  position: relative;
`;

export const CheckIcon = styled(IconCheck)`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Discard = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.discard};
  position: relative;
  cursor: pointer;
  margin-left: 5px;
`;

export const CloseIcon = styled(IconClose)`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
