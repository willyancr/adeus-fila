import React, { ChangeEvent } from 'react';
import searchSVG from '../assets/search.svg';
import TableComponent from './table/Table';
import { Input } from './ui/input';

function AttendeeList() {
  const [search, setSearch] = React.useState(() => {
    const url = new URL(window.location.toString());

    if (url.searchParams.has('search')) {
      return url.searchParams.get('search') ?? '';
    }
    return '';
  });

  //Atualiza a query de busca atual na URL e no estado do histórico do navegador.
  function setCurrentSearch(search: string) {
    const url = new URL(window.location.toString()); // Cria uma nova instância de URL com a URL atual do navegador
    url.searchParams.set('search', search);
    window.history.pushState({}, '', url);

    setSearch(search);
  }

  function onSearchInput(event: ChangeEvent<HTMLInputElement>) {
    setCurrentSearch(event.target.value);
  }

  return (
    <div>
      <div className="flex items-center w-[437px] gap-4 mb-4">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="relative">
          <img
            src={searchSVG}
            alt="icon search"
            className="absolute top-3 left-3"
          />
          <Input
            placeholder="Buscar participante..."
            className="dark bg-zinc-900 border border-white/10 text-sm w-72 px-9 focus-visible:outline-none"
            value={search}
            onChange={onSearchInput}
          />
        </div>
      </div>
      <TableComponent search={search} />
    </div>
  );
}

export default AttendeeList;
