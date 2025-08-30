import Image from 'next/image';
import Link from 'next/link';
import { links, socialMedia } from '@/data/FooterData';

export default function Footer() {
  return (
    <footer className="pt-5">
      <div className="mx-auto max-w-5xl px-6">
        <Link href="/" aria-label="go home" className="mx-auto block size-fit">
          <Image
            src="/logo-full.webp"
            alt="Эрудит пати лого"
            width={700}
            height={700}
            className="pointer-events-none select-none lg:w-80 w-60"
            priority
          />
        </Link>

        <div className="my-6 flex flex-wrap justify-center sm:text-xl text-lg gap-4">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-white/80 font-[500] hover:text-white block duration-300"
            >
              <span>{link.title}</span>
            </Link>
          ))}
        </div>
        <div className="my-6 flex flex-wrap justify-center gap-8">
          {socialMedia.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <Image src={link.icon} alt={link.label} width={40} height={40} />
            </Link>
          ))}
        </div>
        <span className="text-white/65 block text-center text-sm border-t py-3 border-white/40">
          © {new Date().getFullYear()} Эрудит Пати, All rights reserved
        </span>
      </div>
    </footer>
  );
}
