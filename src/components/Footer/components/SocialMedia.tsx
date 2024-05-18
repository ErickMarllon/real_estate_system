import Link from 'next/link';
import { FC } from 'react';
import { FaDiscord, FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const SocialMedia: FC = () => {
  return (
    <div className="flex w-full">
      <Link href="#" className="text-neutral-400 p-2 hover:text-neutral-200">
        <FaFacebookF />
      </Link>
      <Link href="#" className="text-neutral-400 p-2 hover:text-neutral-200">
        <FaDiscord />
      </Link>
      <Link href="#" className="text-neutral-400 p-2 hover:text-neutral-200">
        <FaLinkedinIn />
      </Link>
      <Link href="#" className="text-neutral-400 p-2 hover:text-neutral-200">
        <FaGithub />
      </Link>
    </div>
  );
};

export default SocialMedia;
