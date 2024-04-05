import React from 'react';
import searchSVG from '../assets/search.svg';
import TableComponent from './table/Table';
import { Input } from './ui/input';

function AttendeeList() {
  const [search, setSearch] = React.useState('');
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
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <TableComponent search={search} />
    </div>
  );
}

export default AttendeeList;
