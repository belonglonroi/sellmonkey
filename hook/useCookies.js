// app/hooks/useCookies.js
import { useEffect, useState } from 'react';

const useCookies = (key) => {
  const [value, setValue] = useState(() => {
    if (typeof window !== 'undefined') {
      return document.cookie
        .split('; ')
        .find(row => row.startsWith(`${key}=`))
        ?.split('=')[1] || null;
    }
    return null;
  });

  const setCookie = (newValue, days) => {
    const expires = days ? `; max-age=${days * 24 * 60 * 60}` : '';
    document.cookie = `${key}=${newValue}${expires}; path=/`;
    setValue(newValue);
  };

  return [value, setCookie];
};

export default useCookies;
