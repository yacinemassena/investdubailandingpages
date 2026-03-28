import { GlobalNavbar } from '../../../components/GlobalNavbar';

interface NavbarProps {
  dark?: boolean;
}

export const Navbar = ({ dark = false }: NavbarProps) => <GlobalNavbar dark={dark} />;
