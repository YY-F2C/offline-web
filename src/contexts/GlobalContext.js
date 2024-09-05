import React, { createContext, useState, useContext } from 'react';

import { DEFAULT_SETTINGS, LOCALIZED_SETTING_KEYS } from 'utils/const';
import { filterLocalizedSettings, getLocalGlobalSettings, setLocalGlobalSettings } from 'utils/helper';

const GlobalContext = createContext({
  globalSettings: { ...DEFAULT_SETTINGS },
  initGlobalSettings: () => {},
  changeGlobalSetting: () => {},
});

// Custom Hook for functional components to use GlobalContext
export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

// HOC for class components or components that prefer HOC usage
export const withGlobalContextConsumer = (Component) => (props) => (
  <GlobalContext.Consumer>
    {({ globalSettings, initGlobalSettings, changeGlobalSetting }) => (
      <Component
        globalSettings={globalSettings}
        initGlobalSettings={initGlobalSettings}
        changeGlobalSetting={changeGlobalSetting}
        {...props}
      />
    )}
  </GlobalContext.Consumer>
);

// GlobalContext Provider
export const withGlobalContextProvider = (Component) => {
  return (props) => {
    const [globalSettings, setGlobalSettings] = useState(DEFAULT_SETTINGS);

    // Initialize settings
    const handleInitGlobalSettings = (settings) => {
      const localSettings = getLocalGlobalSettings();
      const filteredLocalSettings = filterLocalizedSettings(localSettings || {});

      // Merge default, user-provided, and local settings
      const combinedSettings = {
        ...DEFAULT_SETTINGS,
        ...settings,
        ...filteredLocalSettings,
      };

      // Save settings to local storage if none exist
      if (!localSettings) {
        setLocalGlobalSettings(combinedSettings);
      }
      setGlobalSettings(combinedSettings);
    };

    // Update a setting
    const handleChangeGlobalSetting = (key, value) => {
      let newGlobalSettings;
      let shouldLocalize = false;
      if (value === undefined) {
        const settings = { ...key };
        newGlobalSettings = { ...globalSettings, ...settings };
        shouldLocalize = !!Object.keys(settings)
          // eslint-disable-next-line
          .filter((key) => LOCALIZED_SETTING_KEYS.includes(key)).length;
      } else {
        newGlobalSettings = { ...globalSettings, [key]: value };
        shouldLocalize = LOCALIZED_SETTING_KEYS.includes(key);
      }

      if (shouldLocalize) {
        setLocalGlobalSettings(newGlobalSettings);
      }
      setGlobalSettings(newGlobalSettings);
    };

    return (
      <GlobalContext.Provider
        value={{
          globalSettings,
          initGlobalSettings: handleInitGlobalSettings,
          changeGlobalSetting: handleChangeGlobalSetting,
        }}
      >
        <Component
          globalSettings={globalSettings}
          initGlobalSettings={handleInitGlobalSettings}
          changeGlobalSetting={handleChangeGlobalSetting}
          {...props}
        />
      </GlobalContext.Provider>
    );
  };
};

export default GlobalContext;