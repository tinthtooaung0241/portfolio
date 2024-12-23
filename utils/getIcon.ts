export function getIconSrc(item: string): string {
  const iconMap: { [key: string]: string } = {
    javascript: "/js.svg",
    html: "/html.svg",
    css: "/css.svg",
    typescript: "/ts.svg",
    react: "/react.svg",
    "next.js": "/next.svg",
    "tailwind css": "/tailwind.svg",
    "shadcn ui": "/shadcn.svg",
    "react query": "/react-query-icon.svg",
    zustand: "/zustand.svg",
    sanity: "/sanity.svg",
    clerk: "/clerk.svg",
    "node.js": "/nodejs.svg",
    "express.js": "/expressjs.svg",
    postgresql: "/postgre.svg",
    prisma: "/prismaio.svg",
  };

  return iconMap[item.toLowerCase()] || "/icons/default.svg";
}
