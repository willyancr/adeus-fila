import { Checkbox } from '@/components/ui/checkbox';
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from '@/components/ui/table';
import {
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationContent,
  Pagination,
} from '@/components/ui/pagination';
import { MoreHorizontal } from 'lucide-react';

export default function TableComponent() {
  return (
    <div className="border border-white/10 rounded-lg w-full">
      <div className="relative w-full overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[32px]">
                <Checkbox id="select-all" className="border border-white/20" />
              </TableHead>
              <TableHead className="text-white">Código</TableHead>
              <TableHead className="text-white">Participante</TableHead>
              <TableHead className="text-white">Data de Inscrição</TableHead>
              <TableHead className="text-white">Data do check-in</TableHead>
              <TableHead
                style={{ width: '64px' }}
                className="text-white"
              ></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 6 }).map((_, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <Checkbox
                      id="select-1"
                      className="border border-white/20"
                    />
                  </TableCell>
                  <TableCell className="text-gray-200">25621</TableCell>
                  <TableCell>
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">
                        Willyan Costa Ribeiro
                      </span>
                      <span className="text-xs text-gray-400">
                        willyancr@gmail.com
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>7 dias atrás</TableCell>
                  <TableCell>3 dias atrás</TableCell>
                  <TableCell>
                    <MoreHorizontal className="bg-black/20 border border-white/20 rounded-md p-1.5" />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center gap-4 px-4 py-2 w-full">
        <div>Mostrando 1 de 100</div>
        <div className="ml-auto">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">10</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
