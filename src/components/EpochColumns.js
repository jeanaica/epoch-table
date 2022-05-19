import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';

const EpochColumns = ({ headerGroups, onSort, sortedBy }) => {
  return (
    <TableHead>
      {headerGroups.map((headerGroup, headerGroupIndex) => (
        <TableRow
          key={headerGroupIndex}
          {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map((column, index) => {
            return (
              <TableCell
                key={index}
                sortDirection={false}
                onClick={() => onSort(column.id)}
                align='center'>
                <TableSortLabel
                  active={sortedBy.name === column.id}
                  direction={
                    sortedBy.name === column.id &&
                    sortedBy.orderDirection === 'desc'
                      ? 'desc'
                      : 'asc'
                  }>
                  {column.render('Header')}
                </TableSortLabel>
              </TableCell>
            );
          })}
        </TableRow>
      ))}
    </TableHead>
  );
};

export default EpochColumns;
