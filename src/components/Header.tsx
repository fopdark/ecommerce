/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable @next/next/no-img-element */

'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

import LocaleSwitcher from './LocaleSwicher';

export const Header = () => {
  const t = useTranslations();
  const redirectRegister = '/';
  const handleToggle = () => {
    const nav = document.querySelector('.navbar-collapse');
    const overlay = document.querySelector('.overlay-screen');
    nav?.classList.toggle('show');
    overlay?.classList.toggle('opened');
  };

  const handleScrollTo = (id: string) => () => {
    const element = document.getElementById(id);
    const nav = document.querySelector('nav');

    if (element && nav) {
      const positionY = element.offsetTop - nav.offsetHeight;
      window.scrollTo({ top: positionY, behavior: 'smooth' });
      // element.scrollIntoView({
      //   behavior: 'smooth',
      //   block: 'start',
      //   inline: 'nearest',
      // });
      if (window.innerWidth < 1024) {
        handleToggle();
      }
    }
  };

  const handleResize = () => {
    const nav = document.querySelector('.navbar-collapse');
    const overlay = document.querySelector('.overlay-screen');
    const dropdown = document.querySelector('.dropdown');

    if (window.innerWidth < 1024) {
      nav?.classList.add('collapse-mobile');
      dropdown?.classList.add('dropup');
    } else {
      nav?.classList.remove('collapse-mobile');
      nav?.classList.remove('show');
      overlay?.classList.remove('opened');
      dropdown?.classList.remove('dropup');
    }
  };

  useEffect(() => {
    // listen event handlers width browser resize than small 1024
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header id="home">
      {/* Start Navigation */}
      <nav className="navbar mobile-sidenav navbar-sticky navbar-default validnavs navbar-fixed no-full">
        <div className="container d-flex justify-content-between align-items-center">
          {/* Start Header Navigation */}
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#navbar-menu"
              aria-label="Toggle navigation"
              onClick={handleToggle}
            >
              <i className="fa fa-bars" />
            </button>
            <a className="navbar-brand" href="/">
              <img
                src="assets/img/logo-light.png"
                className="logo logo-display"
                alt="Logo"
              />
              <img
                src="assets/img/logo.png"
                className="logo logo-scrolled"
                alt="Logo"
              />
            </a>
          </div>
          {/* End Header Navigation */}
          {/* Collect the nav links, forms, and other content for toggling */}
          <div
            className="collapse navbar-collapse collapse-mobile"
            id="navbar-menu"
            style={{
              display: 'flex !important',
              justifyContent: 'space-between',
              alignItems: 'start',
              flexDirection: 'column',
            }}
          >
            <div className="w-100">
              <img src="assets/img/logo.png" alt="Logo" />
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
                aria-label="Toggle navigation"
                onClick={handleToggle}
              >
                <i className="fa fa-times" />
              </button>
              <ul
                className="nav navbar-nav navbar-center"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li>
                  <a onClick={handleScrollTo('home')} className="smooth-menu">
                    {t('navigation.home')}
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleScrollTo('features')}
                    className="smooth-menu"
                  >
                    {t('navigation.features')}
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleScrollTo('process')}
                    className="smooth-menu"
                  >
                    {t('navigation.process')}
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleScrollTo('testimonials')}
                    className="smooth-menu"
                  >
                    {t('navigation.introduction')}
                  </a>
                </li>
                <li>
                  <a
                    onClick={handleScrollTo('contact')}
                    className="smooth-menu"
                  >
                    {t('navigation.contact')}
                  </a>
                </li>
                {/* <li>
                  <a onClick={handleScrollTo('blog')} className="smooth-menu">
                    Blog
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="d-lg-none mt-auto">
              <LocaleSwitcher />
            </div>
          </div>
          {/* /.navbar-collapse */}
          <div className="attr-right">
            {/* Start Atribute Navigation */}
            <div className="attr-nav">
              <ul className="d-flex align-items-center">
                <li
                  className="dropdown d-none align-items-center top-0 d-lg-flex"
                  style={{ cursor: 'pointer' }}
                >
                  <LocaleSwitcher />
                </li>
                <li className="button">
                  <Link target="_blank" href={redirectRegister}>
                    {t('navigation.login')}
                  </Link>
                </li>
              </ul>
            </div>
            {/* End Atribute Navigation */}
            {/* Overlay screen for menu */}
            <div className="overlay-screen" />
            {/* End Overlay screen for menu */}
          </div>
          {/* Main Nav */}
        </div>
      </nav>
      {/* End Navigation */}
    </header>
  );
};
