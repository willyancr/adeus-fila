import { ComponentProps } from 'react';

interface NavLinkProps extends ComponentProps<'a'> {
  children: string;
  className?: string;
}

function NavLink(props: NavLinkProps) {
  return (
    <nav className="flex items-center gap-5">
      <a {...props} className={`font-medium text-sm ${props.className}`}>
        {props.children}
      </a>
    </nav>
  );
}

export default NavLink;
