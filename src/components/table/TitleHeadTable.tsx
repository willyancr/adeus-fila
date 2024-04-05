import { TableHead } from '@/components/ui/table';

interface TitleHeadTableProps
  extends React.ThHTMLAttributes<HTMLTableCellElement> {}

function TitleHeadTable(props: TitleHeadTableProps) {
  return <TableHead {...props} className="text-white" />;
}

export default TitleHeadTable;
