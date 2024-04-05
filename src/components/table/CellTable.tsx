import { TableCell } from '../ui/table';

interface TitleHeadTableProps
  extends React.ThHTMLAttributes<HTMLTableCellElement> {}

function CellTable(props: TitleHeadTableProps) {
  return <TableCell {...props} className="text-sm text-zinc-300 " />;
}

export default CellTable;
