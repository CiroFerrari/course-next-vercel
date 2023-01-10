import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties } from "react";

const activeStyle: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
}

type ActiveLinkProps = {
  text: string,
  href: string,
}

export default function ActiveLink({ text, href }: ActiveLinkProps) {

  const { asPath } = useRouter();

  return (
    <Link style={ (asPath === href) ? activeStyle : undefined } href={href}>{text}</Link>
  );
}