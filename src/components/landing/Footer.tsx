import { GlobalFooter } from '../GlobalFooter';

interface FooterProps {
  copyright?: string;
  links?: Array<{ label: string; href: string }>;
}

export const Footer = (_props: FooterProps) => <GlobalFooter />;
