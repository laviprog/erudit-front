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

        <div className="my-6 flex flex-wrap justify-center xl:text-2xl text-xl sm:gap-4 gap-2">
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
        <div className="my-6 flex max-sm:flex-col justify-center items-center">
          <div className="flex flex-wrap justify-center gap-5 max-sm:pb-3 sm:px-5">
            {socialMedia.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={50}
                  height={50}
                  className="max-sm:w-11 max-sm:h-11"
                />
              </Link>
            ))}
          </div>
          <div className="flex flex-col justify-around sm:px-5 max-sm:pt-3 sm:border-l-2 max-sm:border-t-1 border-white/60 font-[500] text-white/80 xl:text-2xl text-xl">
            <Link
              href="tel:+79275014476"
              className="hover:text-white duration-300 active:text-white"
            >
              +7 (927) 501-44-76
            </Link>
            <Link
              href="mailto:info@erudit-party.ru"
              className="hover:text-white duration-300 active:text-white"
            >
              info@erudit-party.ru
            </Link>
          </div>
        </div>
        <span className="text-white/65 block text-center text-sm border-t py-3 border-white/40">
          © {new Date().getFullYear()} Эрудит Пати, All rights reserved
        </span>
      </div>
    </footer>
  );
}
