import { GlobalNavbar } from '../GlobalNavbar';

interface NavbarProps {
  links?: Array<{ label: string; href: string }>;
  loginText?: string;
  ctaText?: string;
}

export const Navbar = (_props: NavbarProps) => <GlobalNavbar />;
