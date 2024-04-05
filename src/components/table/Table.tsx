import { Checkbox } from '@/components/ui/checkbox';
import { TableRow, TableHeader, TableBody, Table } from '@/components/ui/table';
import { MoreHorizontal } from 'lucide-react';
import TitleHeadTable from './TitleHeadTable';
import PaginationComponent from './PaginationComponent';
import CellTable from './CellTable';
import { attendees } from '../dataUsers';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/pt-br';

dayjs.extend(relativeTime);
export default function TableComponen({ search }: { search: string }) {
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
            {attendees &&
              attendees
                .filter((attendee) =>
                  attendee.name
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase()),
                )
                .map((attendee) => (
                  <TableRow key={attendee.id}>
                    <CellTable>
                      <Checkbox
                        id="select-1"
                        className="border border-white/20"
                      />
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
                      {dayjs().locale('pt-br').to(attendee.checkinAt)}
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
      <PaginationComponent />
    </div>
  );
}
