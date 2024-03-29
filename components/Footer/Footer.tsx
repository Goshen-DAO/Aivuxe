import { Typography } from "@material-tailwind/react";
import Image from 'next/image';
import Link from 'next/link';

const LINKS = [
  {
    title: "Product",
    items: [
      { label: "Marketplace", url: "#" },
      { label: "NFT Collection Deployment", url: "#" },
      { label: "NFT Minting Site", url: "#" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About us", url: "/about" },
      { label: "Careers", url: "/careers" },
      { label: "Press", url: "/press" },
      { label: "News", url: "/news" },
    ],
  },
  {
    title: "Resource",
    items: [
      { label: "Blog", url: "#" },
      { label: "Newsletter", url: "#" },
      { label: "Events", url: "#" },
      { label: "Help center", url: "#" },
      { label: "Docs", url: "#" },
    ],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative min-w-full mt-auto">
      <div className="max-w-full px-8">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <div className="flex items-center">
          <Image
    src="/logo.png"
    alt="Aivuxe Logo"
    className="mb-6"
    height={100}
    width={175}
  />
            <Typography placeholder={undefined}>
              Aivuxe is a groundbreaking project, an open-source and
              permissionless NFT marketplace that stands out by seamlessly
              supporting EVM chains. Offering a liberating space for creators
              and collectors alike, Aivuxe empowers individuals to engage with
              NFTs on their terms. Dive into the world of limitless possibilities
              and creative freedom with Aivuxe.
            </Typography>
          </div>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="mb-3 font-medium opacity-40"
                  placeholder={undefined}
                >
                  {title}
                </Typography>
                {items.map(({ label, url }) => (
                  <li key={label}>
                    <Typography
                      as="a"
                      href={url}
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                      placeholder={undefined}
                    >
                      {label}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
            placeholder={undefined}
          >
            &copy; {currentYear} <Link href="/">Aivuxe</Link>. All Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <Typography
              as="a"
              href="https://discord.gg/3XYdWGbnss"
              className="opacity-80 transition-opacity hover:opacity-100"
              placeholder={undefined}
            >
              <svg
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography
              as="a"
              href="https://twitter.com/Aivuxe"
              className="opacity-80 transition-opacity hover:opacity-100"
              placeholder={undefined}
            >
              <svg
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
            <Typography
              as="a"
              href="https://github.com/Goshen-DAO/Aivuxe"
              className="opacity-80 transition-opacity hover:opacity-100"
              placeholder={undefined}
            >
              <svg
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                  clip-rule="evenodd"
                />
              </svg>
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
