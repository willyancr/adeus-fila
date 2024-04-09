import { useEffect, useState } from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { TableRow, TableHeader, TableBody, Table } from '@/components/ui/table';
import { MoreHorizontal } from 'lucide-react';
import TitleHeadTable from './TitleHeadTable';
import PaginationComponent from './PaginationComponent';
import CellTable from './CellTable';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt-br';

dayjs.extend(relativeTime);

export interface AttendeesProps {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  checkedInAt: string | null;
}
export default function TableComponen({ search }: { search: string }) {
  const [page, setPage] = useState(() => {
    const url = new URL(window.location.toString());

    if (url.searchParams.has('page')) {
      return Number(url.searchParams.get('page'));
    }
    return 1;
  });
  const [attendees, setAttendees] = useState<AttendeesProps[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const url = new URL(
      `http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees?`,
    );
    url.searchParams.set('pageIndex', String(page - 1));
    if (search.length > 0) {
      url.searchParams.set('query', search);
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAttendees(data.attendees);
        setTotal(data.total);
      });
  }, [page, search]);

  return (
    <div className="border border-white/10 rounded-lg w-full">
      <div className="relative w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TitleHeadTable style={{ width: 32 }}>
                <Checkbox id="select-all" className="border border-white/20" />
              </TitleHeadTable>
              <TitleHeadTable>Código</TitleHeadTable>
              <TitleHeadTable>Participante</TitleHeadTable>
              <TitleHeadTable>Data de Inscrição</TitleHeadTable>
              <TitleHeadTable>Data do check-in</TitleHeadTable>
              <TitleHeadTable style={{ width: 64 }}></TitleHeadTable>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attendees.map((attendee) => (
              <TableRow key={attendee.id}>
                <CellTable>
                  <Checkbox id="select-1" className="border border-white/20" />
                </CellTable>
                <CellTable>{attendee.id}</CellTable>
                <CellTable>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">
                      {attendee.name}
                    </span>
                    <span className="text-xs ">{attendee.email}</span>
                  </div>
                </CellTable>
                <CellTable>
                  {dayjs().locale('pt-br').to(attendee.createdAt)}
                </CellTable>
                <CellTable>
                  {attendee.checkedInAt === null ? (
                    <span className="text-zinc-400">Não fez check-in</span>
                  ) : (
                    dayjs().locale('pt-br').to(attendee.checkedInAt)
                  )}
                </CellTable>

                <CellTable>
                  <button>
                    <MoreHorizontal className="bg-black/20 border border-white/20 rounded-md p-1.5" />
                  </button>
                </CellTable>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <PaginationComponent
        page={page}
        setPage={setPage}
        total={total}
        attendees={attendees}
      />
    </div>
  );
}
