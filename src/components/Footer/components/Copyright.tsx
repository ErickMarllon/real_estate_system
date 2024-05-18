import Link from 'next/link';
import { FC } from 'react';

const Copyright: FC = () => {
  return (
    <div className="flex w-full gap-3 items-center h-4 z-10">
      <span className="line-before left-0" />
      <span className="text-xs text-neutral-200 text-center whitespace-nowrap">
        &copy; 2024
        <Link
          href="https://www.linkedin.com/in/erickmarllon/"
          className="hover:text-cyan-400 mx-1 transition duration-500 ease"
        >
          EtechSolution™
        </Link>
        <br />
        Todos os direitos reservados.
      </span>
      <span className="line-after right-0" />
    </div>
  );
};

export default Copyright;
