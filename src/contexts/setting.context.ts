import { createContext } from 'react';

export type SettingType = {
  user: {
    email: string;
  }
};

export type SettingActionType = React.Dispatch<React.SetStateAction<SettingType>>;

export type SettingContextType = {
  currentSetting: SettingType,
  setCurrentSetting: SettingActionType
};

export const SettingContext = createContext<SettingContextType | null>(null);
