'use client'
import { useEffect, useState } from "react";
import useCookies from "../../hook/useCookies";

const SelectLanguage = () => {
  const languageOptions = [
    { value: 'vi', label: 'Tiếng Việt' },
    { value: 'en', label: 'English' }
  ]
  const [locale, setLocale] = useCookies("locale");
  const [language, setLanguage] = useState(languageOptions[0].label);

  useEffect(() => {
    if (locale) {
      const currentLanguage = languageOptions.find(({ value }) => value === locale);
      setLanguage(currentLanguage.label)
    } else { setLanguage(languageOptions[0].label) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale])

  const onChangeLocale = (locale, language) => {
    setLocale(locale);
    setLanguage(language)
    window.location.reload();
  };

  return (
    <>
      <div suppressHydrationWarning className="relative flex items-center z-50">
        <div className="group">
          <button type="button"
            className="inline-flex justify-center items-center gap-[10px] w-full px-4 py-2 text-sm font-semibold focus:outline-none hover:text-primary transition-all">
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_321_146)">
                <path d="M7 0.5C5.61553 0.5 4.26215 0.910543 3.11101 1.67971C1.95987 2.44888 1.06266 3.54213 0.532846 4.82121C0.00303295 6.1003 -0.13559 7.50776 0.134506 8.86563C0.404603 10.2235 1.07129 11.4708 2.05025 12.4497C3.02922 13.4287 4.2765 14.0954 5.63437 14.3655C6.99224 14.6356 8.3997 14.497 9.67878 13.9672C10.9579 13.4373 12.0511 12.5401 12.8203 11.389C13.5895 10.2378 14 8.88447 14 7.5C14 5.64348 13.2625 3.86301 11.9497 2.55025C10.637 1.2375 8.85651 0.5 7 0.5ZM12.8022 6.91666H10.6556C10.3839 5.04301 9.59158 3.28327 8.36889 1.83778C9.54159 2.12345 10.5972 2.76492 11.3909 3.67423C12.1846 4.58353 12.6776 5.71612 12.8022 6.91666ZM4.51889 8.08333H9.48111C9.12186 9.92574 8.26362 11.6341 7 13.0222C5.73638 11.6341 4.87814 9.92574 4.51889 8.08333ZM4.51889 6.91666C4.87814 5.07426 5.73638 3.36586 7 1.97778C8.26362 3.36586 9.12186 5.07426 9.48111 6.91666H4.51889ZM5.63111 1.83778C4.40842 3.28327 3.61614 5.04301 3.34445 6.91666H1.19778C1.32239 5.71612 1.81536 4.58353 2.60908 3.67423C3.40281 2.76492 4.45841 2.12345 5.63111 1.83778ZM1.19778 8.06H3.34445C3.61614 9.93366 4.40842 11.6934 5.63111 13.1389C4.46185 12.8546 3.40872 12.2166 2.61534 11.3119C1.82196 10.4071 1.32694 9.27971 1.19778 8.08333V8.06ZM8.36889 13.1389C9.59158 11.6934 10.3839 9.93366 10.6556 8.06H12.8022C12.6822 9.2647 12.1913 10.4025 11.3972 11.3164C10.6031 12.2302 9.54504 12.8752 8.36889 13.1622V13.1389Z" fill="currentColor" />
              </g>
              <defs>
                <clipPath id="clip0_321_146">
                  <rect width="14" height="14" fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>

            {language}
            {/* Dropdown arrow */}
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.58647 5.0007C3.68501 5.00023 3.78265 5.01945 3.87366 5.05723C3.96468 5.09501 4.04723 5.15058 4.11647 5.2207L7.11647 8.2207L10.1165 5.2207C10.2617 5.15055 10.4258 5.12911 10.5842 5.15956C10.7426 5.19002 10.887 5.27074 10.9959 5.38976C11.1048 5.50877 11.1724 5.65973 11.1888 5.82022C11.2051 5.98072 11.1692 6.1422 11.0865 6.2807L7.58647 9.7807C7.44584 9.92115 7.25522 10 7.05647 10C6.85772 10 6.6671 9.92115 6.52647 9.7807L3.02647 6.2807C2.88602 6.14007 2.80713 5.94945 2.80713 5.7507C2.80713 5.55195 2.88602 5.36132 3.02647 5.2207C3.0992 5.14685 3.18663 5.08911 3.2831 5.05121C3.37957 5.01331 3.48293 4.9961 3.58647 5.0007Z" fill="currentColor" />
            </svg>

          </button>

          {/* Dropdown menu */}
          <div
            className="absolute left-0 z-50 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg hidden group-hover:block">
            <div className="py-1">
              {languageOptions.map(({ value, label }, idx) => (
                <a key={idx} role="button" onClick={() => onChangeLocale(value, label)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{label}</a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SelectLanguage
