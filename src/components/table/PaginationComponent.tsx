import {
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationContent,
  Pagination,
} from '@/components/ui/pagination';
import { attendees } from '../dataUsers';

type PaginationProps = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

function PaginationComponent({ currentPage, setCurrentPage }: PaginationProps) {
  const qtaPages = Math.ceil(attendees.length / 5);
  const pages = [];
  for (let i = 1; i <= Math.ceil(attendees.length / qtaPages); i++) {
    pages.push(i);
  }

  function handleClickPrevious() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }
  function handleClickNext() {
    if (currentPage + 1 <= qtaPages) {
      setCurrentPage(currentPage + 1);
    }
  }
  function handleClickLast() {
    setCurrentPage(qtaPages);
  }

  return (
    <div className="flex items-center gap-4 px-4 py-2 w-full">
      <div>Mostrando 10 de {attendees.length}</div>
      <div className="ml-auto">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={handleClickPrevious} />
            </PaginationItem>
            {pages.map((page, index) => (
              <PaginationItem
                key={index}
                className={
                  currentPage === page
                    ? 'bg-neutral-100 text-black font-bold rounded-md'
                    : ''
                }
              >
                <PaginationLink href="#" onClick={() => setCurrentPage(page)}>
                  {page}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem
              className={
                currentPage === qtaPages
                  ? 'bg-neutral-100 text-black font-bold rounded-md'
                  : ''
              }
            >
              <PaginationLink href="#" onClick={handleClickLast}>
                {qtaPages}
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationNext href="#" onClick={handleClickNext} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}

export default PaginationComponent;
