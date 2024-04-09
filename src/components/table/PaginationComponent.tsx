import {
  PaginationPrevious,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
  PaginationContent,
  Pagination,
} from '@/components/ui/pagination';
import { AttendeesProps } from './Table';

type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  attendees: AttendeesProps[];
};

function PaginationComponent({
  page,
  setPage,
  total,
  attendees,
}: PaginationProps) {
  const qtaPages = Math.ceil(total / 10);
  const pages = [];
  for (let i = 1; i <= qtaPages; i++) {
    pages.push(i);
  }

  //Define a página atual na URL e atualiza o histórico do navegador.
  function setCurrentPage(page: number) {
    const url = new URL(window.location.toString());
    url.searchParams.set('page', String(page));
    window.history.pushState({}, '', url);

    setPage(page)
  }

  function handleClickPrevious() {
    if (page > 1) {
      setCurrentPage(page - 1);
    }
  }
  function handleClickNext() {
    if (page + 1 <= qtaPages) {
      setCurrentPage(page + 1);
    }
  }
  function handleClickLast() {
    setCurrentPage(qtaPages);
  }

  return (
    <div className="flex items-center gap-4 px-4 py-2 w-full">
      <div>
        Mostrando {attendees.length} de {total}
      </div>
      <div className="ml-auto">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={handleClickPrevious} />
            </PaginationItem>
            {pages.map((item, index) => (
              <PaginationItem
                key={index}
                className={
                  page === item
                    ? 'bg-neutral-100 text-black font-bold rounded-md'
                    : ''
                }
              >
                <PaginationLink href="#" onClick={() => setPage(item)}>
                  {item}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem
              className={
                page === qtaPages
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
