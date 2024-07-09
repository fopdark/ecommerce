import { useLocale, useTranslations } from 'next-intl';
import React from 'react';

type addressType = {
  name: string;
  value: string;
};

function Address() {
  const t = useTranslations();
  const locale = useLocale();
  const addressFirst: addressType[] = [
    {
      name: t('footer_address.CEO.name'),
      value: t('footer_address.CEO.value'),
    },
    {
      name: t('footer_address.online_sales_registration.name'),
      value: t('footer_address.online_sales_registration.value'),
    },
    {
      name: t('footer_address.registration_number.name'),
      value: t('footer_address.registration_number.value'),
    },
  ];
  const addressSecond: addressType[] = [
    {
      name: t('footer_address.address.name'),
      value: t('footer_address.address.value'),
    },
    {
      name: t('footer_address.customer_service.name'),
      value: t('footer_address.customer_service.value'),
    },
  ];
  return (
    <div className="footer-address">
      <div className="container">
        {locale === 'ko' ? (
          <div className="d-flex flex-column d-xl-flex flex-xl-row justify-content-center justify-content-xl-start align-items-center ">
            <>
              {addressFirst.map(({ name, value }) => (
                <div className="d-flex mb-2 me-xl-4 mb-xl-0" key={name}>
                  <p className="mb-0 me-1">{name}</p>
                  <p className="mb-0">{value}</p>
                </div>
              ))}
              {addressSecond.map(({ name, value }) => (
                <div className="d-flex mb-2 me-xl-4 mb-xl-0" key={name}>
                  <p className="mb-0 me-1">{name}</p>
                  <p className="mb-0">{value}</p>
                </div>
              ))}
            </>
          </div>
        ) : (
          <div>
            <div className="d-flex flex-column d-xl-flex flex-xl-row justify-content-center justify-content-xl-start align-items-center ">
              {addressFirst.map(({ name, value }) => (
                <div className="d-flex mb-2 me-xl-4 mb-xl-0" key={name}>
                  <p className="mb-0 me-1">{name}</p>
                  <p className="mb-0">{value}</p>
                </div>
              ))}
            </div>
            <div className="d-flex flex-column d-xl-flex flex-xl-row justify-content-center justify-content-xl-start align-items-center ">
              {addressSecond.map(({ name, value }) => (
                <div className="d-flex mb-2 me-xl-4 mb-xl-0" key={name}>
                  <p className="mb-0 me-1">{name}</p>
                  <p className="mb-0">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Address;
