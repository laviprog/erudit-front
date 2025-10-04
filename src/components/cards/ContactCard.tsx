'use client';

import { useState } from 'react';
import { Check, Copy, ExternalLink } from 'lucide-react';
import { toast } from 'react-toastify';

export default function ContactCard({
  label,
  value,
  subtitle,
  copyText,
  href,
}: {
  label: string;
  value: string;
  subtitle: string;
  copyText: string;
  href: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    await navigator.clipboard.writeText(copyText);
    toast.success(`Скопировано: ${copyText}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group rounded-2xl border p-4 transition bg-white shadow-md relative h-full">
      <div className="">
        <div className="text-sm text-neutral-500">{label}</div>
        <div className="text-xl sm:text-2xl font-bold text-[var(--violet)] break-all">{value}</div>
        <div className="text-xs text-neutral-500 mt-1">{subtitle}</div>
      </div>

      <div className="absolute bottom-3 right-3 flex gap-1.5">
        <button
          onClick={handleCopy}
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-neutral-300 hover:bg-neutral-100 transition-colors"
          aria-label="Скопировать"
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-green-600" />
          ) : (
            <Copy className="w-3.5 h-3.5 text-neutral-600" />
          )}
        </button>

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-neutral-300 hover:bg-neutral-100 transition-colors"
          aria-label="Перейти"
        >
          <ExternalLink className="w-3.5 h-3.5 text-neutral-600" />
        </a>
      </div>
    </div>
  );
}
