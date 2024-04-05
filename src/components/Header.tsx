import nlwUniteSvg from '../assets/nlw-unite-icon.svg';
import NavLink from './NavLink';

function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwUniteSvg} alt="Logomarca" />
      <NavLink href="/eventos" className="text-zinc-300">Eventos</NavLink>
      <NavLink href="/participantes">Participantes</NavLink>
    </div>
  );
}

export default Header;
