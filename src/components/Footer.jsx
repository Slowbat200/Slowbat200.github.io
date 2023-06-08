import React from 'react';
import styles from '../style';

const Footer = () => {
  return (
    <footer>
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="px-10 xs:px-0">
          <h4 className="text-white text-lg font-semibold mb-4">Informace o mě</h4>
          <p className="text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
            eros elementum tristique.
          </p>
          <p className="text-gray-400">123 Street, City</p>
        </div>
        <div className="xs:ml-[5em] xs:pl-0 pl-10">
          <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
          <ul className= "space-y-1 grid grid-cols-2">
            <li>
              <a
                href="#"
                className={`${styles.footerLinksStyles} ${styles.xsTransition} leading-8`} 
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${styles.footerLinksStyles} ${styles.xsTransition} leading-8`} 
              >
                Teorie
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${styles.footerLinksStyles} ${styles.xsTransition} leading-8`} 
              >
                Html
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${styles.footerLinksStyles} ${styles.xsTransition} leading-8`} 
              >
                Css
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${styles.footerLinksStyles} ${styles.xsTransition} leading-8`} 
              >
                JavaScript
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`${styles.footerLinksStyles} ${styles.xsTransition} leading-8`} 
              >
                Tailwind
              </a>
            </li>
          </ul>
        </div>
        <div className="pl-10 xs:pl-0 mt-2 xs:mt-0">
          <h4 className="text-white text-lg font-semibold mb-4">Kontakty a sociální sítě</h4>
          <p className="text-gray-400 mb-4">
            Instagram: <span className="text-gray-200"><a href="#" className={`${styles.footerLinksStyles} ${styles.xsTransition}`}>CodeWithSlowbat</a></span>
          </p>
          <p className="text-gray-400">
            Email: <span className="text-gray-200">slowbat@seznam.cz</span>
          </p>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-center text-gray-400">
          &copy; 2023 Company Name. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
