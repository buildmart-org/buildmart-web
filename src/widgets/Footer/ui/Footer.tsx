import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

import FacebookIcon from '@/shared/assets/icons/Facebook.svg?react';
import TwitterIcon from '@/shared/assets/icons/Twitter.svg?react';
import InstagramIcon from '@/shared/assets/icons/Instagram.svg?react';
import LinkedinIcon from '@/shared/assets/icons/Linkedin.svg?react';
import MailIcon from '@/shared/assets/icons/Mail.svg?react';
import { Button, Input } from '@/shared/ui';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Верхний блок: 4 колонки */}
        <div className={styles.top}>
          <div className={styles.column}>
            <span className={styles.logoText}>BuildMart</span>
            <p className={styles.description}>
              Your trusted source for premium building materials and
              construction supplies since 1995.
            </p>
            <div className={styles.socials}>
              <a href="#">
                <FacebookIcon />
              </a>
              <a href="#">
                <TwitterIcon />
              </a>
              <a href="#">
                <InstagramIcon />
              </a>
              <a href="#">
                <LinkedinIcon />
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <h4>Quick Links</h4>
            <Link to="/about">About Us</Link>
            <Link to="/products">Products</Link>
            <Link to="/delivery">Delivery Info</Link>
            <Link to="/returns">Returns Policy</Link>
          </div>

          <div className={styles.column}>
            <h4>Customer Service</h4>
            <Link to="/contact">Contact Us</Link>
            <Link to="/faq">FAQs</Link>
            <Link to="/shipping">Shipping & Tracking</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>

          <div className={styles.column}>
            <h4>Newsletter</h4>
            <p>Subscribe for updates and exclusive deals.</p>
            <div className={styles.newsletter}>
              <Input placeholder="Your email" theme="dark" />
              <Button theme="primary" Icon={<MailIcon />} />
            </div>
          </div>
        </div>

        {/* Нижний блок: 3 колонки с подчеркиванием */}
        <div className={styles.bottom}>
          <div className={styles.contacts}>
            <div className={styles.contactColumn}>
              <p className={styles.contactTitle}>Phone</p>
              <p className={styles.contactValue}>1-800-BUILD-MART</p>
            </div>
            <div className={styles.contactColumn}>
              <p className={styles.contactTitle}>Email</p>
              <p className={styles.contactValue}>support@buildmart.com</p>
            </div>
            <div className={styles.contactColumn}>
              <p className={styles.contactTitle}>Address</p>
              <p className={styles.contactValue}>
                123 Construction Ave, Builder City, BC 12345
              </p>
            </div>
          </div>

          <p className={styles.copyright}>
            © 2026 BuildMart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
