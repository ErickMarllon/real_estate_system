import Link from 'next/link';
import { FC } from 'react';

const FooterNavigation: FC = () => {
  return (
    <div className="grid grid-cols-2 gap-8 px-4 col-span-2  py-6  sm:grid-cols-3">
      <div>
        <h2 className="mb-6 text-sm font-semibold text-neutral-200 uppercase ">
          Sobre nós
        </h2>
        <ul className="text-neutral-400  font-medium text-sm">
          <li className="mb-4">
            <Link href="/not-found" className="hover:underline">
              Sobre
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/not-found" className="hover:underline">
              Trabalhe conosco
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-neutral-200 uppercase ">
          Centro de ajuda
        </h2>
        <ul className="text-neutral-400  font-medium text-sm">
          <li className="mb-4">
            <Link href="/contato" className="hover:underline">
              Suporte
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/contato" className="hover:underline">
              Contate-nos
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="mb-6 text-sm font-semibold text-neutral-200 uppercase ">
          Legal
        </h2>
        <ul className="text-neutral-400  font-medium text-sm">
          <li className="mb-4">
            <Link href="/politica-de-cookies" className="hover:underline">
              Politica de cookies
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/politica-de-privacidade" className="hover:underline">
              Politica de privacidade
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FooterNavigation;
