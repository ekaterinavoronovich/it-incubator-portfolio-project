import { useState } from 'react';
import { S } from './SwitchThemeButton_Styles';
import { Icon } from '../icon/Icon';

type ToggleThemePropsType = {
  toggleTheme: () => void;
};
export const SwitchThemeButton = ({ toggleTheme }: ToggleThemePropsType) => {
  const [isToggled, setIsToggled] = useState(false);

  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <S.SwitchThemeBtn>
      <Icon iconId="sun-icon" width="24" height="24" viewBox="0 0 24 24" fill="" />
      <S.ToggleSwitch>
        <input type="checkbox" checked={isToggled} onChange={onToggle} />

        <S.Switch />
      </S.ToggleSwitch>
      <Icon iconId="Moon-icon" width="24" height="24" viewBox="0 0 24 24" fill="" />
    </S.SwitchThemeBtn>
  );
};
