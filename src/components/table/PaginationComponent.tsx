import {
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationContent,
  Pagination,
} from '@/components/ui/pagination';

function PaginationComponent() {
  return (
    <div className="flex items-center gap-4 px-4 py-2 w-full">
      <div>Mostrando 1 de 100</div>
      <div className="ml-auto">
        <Pagination>
          <PaginationContent>

            <PaginationPrevious href="#" />

            <PaginationLink href="#" isActive>1</PaginationLink>
            <PaginationLink href="#">2</PaginationLink>
            <PaginationLink href="#">3</PaginationLink>

            <PaginationEllipsis />

            <PaginationLink href="#">10</PaginationLink>

            <PaginationNext href="#" />

          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export default PaginationComponent;
