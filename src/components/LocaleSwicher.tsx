/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useLocale } from 'next-intl';
import { useTransition } from 'react';

import { usePathname } from '@/libs/i18nNavigation';

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const [, startTransition] = useTransition();
  const locale = useLocale();
  const handleChange = (key: string) => () => {
    if (locale !== key) {
      startTransition(() => {
        window.location.pathname = `/${key}${pathname}`;
      });
    }
  };

  return (
    <div className="dropdown">
      <div
        className="dropdown-toggle"
        style={{ fontSize: '14px', lineHeight: '16px', color: '#232323' }}
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i
          className="far fa-globe"
          style={{ color: '#5858f8', fontSize: 24 }}
        />
      </div>
      <div
        id="dropdown-menu"
        aria-labelledby="dropdownMenuLink"
        className="dropdown-menu dropdown-menu-start dropdown-menu-lg-end p-2"
        style={{ userSelect: 'none' }}
      >
        <div
          className="dropdown-item mt-2"
          style={{
            cursor: 'pointer',
            borderRadius: 8,
            backgroundColor: locale === 'ko' ? '#5858f8' : '',
            color: locale === 'ko' ? '#FFF' : '',
          }}
          onClick={handleChange('ko')}
        >
          <img
            src="/assets/img/logo/kr.svg"
            alt="korean language"
            style={{
              width: 22,
              height: 22,
              objectFit: 'cover',
              borderRadius: 24,
              border: '1px solid gray !important',
              margin: 0,
            }}
          />{' '}
          Korean
        </div>
        <div
          className="dropdown-item"
          onClick={handleChange('en_US')}
          style={{
            backgroundColor: locale === 'en_US' ? '#5858f8' : '',
            color: locale === 'en_US' ? '#FFF' : '',
            borderRadius: 8,
          }}
        >
          <img
            src="/assets/img/logo/en.svg"
            alt="english language"
            style={{
              width: 22,
              height: 22,
              objectFit: 'cover',
              borderRadius: 24,
              border: '1px solid gray !important',
              margin: 0,
            }}
          />{' '}
          English
        </div>
      </div>
    </div>
  );
}
