import styled from 'styled-components';
const SwitchThemeBtn = styled.div`
  position: fixed;
  right: -10px;
  bottom: 130px;
  transform: rotate(90deg);
`;
const Switch = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: #d7ffe0;
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;
  &:before {
    position: absolute;
    content: '';
    left: 2px;
    top: 2px;
    width: 21px;
    height: 21px;
    background-color: #42446e;
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
`;

const ToggleSwitch = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin: 0 0.75rem;

  & input[type='checkbox'] {
    display: none;
  }
  & input[type='checkbox']:checked + ${Switch}::before {
    transform: translateX(25px);
    background-color: #792d83;
  }
  & input[type='checkbox']:checked + ${Switch} {
    background-color: #2bc6ff;
  }
`;

export const S = {
  Switch,
  ToggleSwitch,
  SwitchThemeBtn,
};
