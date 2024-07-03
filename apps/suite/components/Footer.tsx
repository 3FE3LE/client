import Link from 'next/link';

import { useTranslation } from '@/app/i18n';

export const Footer = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng, 'footer');
  return (
    <footer className="footer__container">
      <div>
        <Link href="href">
          <h5>About us</h5>
        </Link>
        <ul>
          <Link href="href">
            <li>Our Company</li>
          </Link>
          <Link href="href">
            <li>Stories and news </li>
          </Link>
          <Link href="href">
            <li>Investor relations</li>
          </Link>
        </ul>
      </div>
      <div>
        <Link href="href">
          <h5>Social impact</h5>
        </Link>
        <ul>
          <Link href="href">
            <li>People</li>
          </Link>
          <Link href="href">
            <li>Planet </li>
          </Link>
        </ul>
      </div>
      <div>
        <Link href="href">
          <h5>For Business Partners</h5>
        </Link>
        <ul>
          <Link href="href">
            <li>Coming soon</li>
          </Link>
        </ul>
      </div>
    </footer>
  );
};
