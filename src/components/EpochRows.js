import { Skeleton, TableBody, TableCell, TableRow } from '@mui/material';

const EpochRows = ({ isLoading, columns, rows, page, prepareRow }) => {
  return (
    <TableBody>
      {isLoading && (
        <TableRow>
          {columns.map(({ accessor }) => (
            <TableCell key={accessor}>
              <Skeleton animation='wave' />
            </TableCell>
          ))}
        </TableRow>
      )}
      {!isLoading &&
        rows.length > 0 &&
        page.map((row, rowIndex) => {
          prepareRow(row);
          return (
            <TableRow
              key={rowIndex}
              {...row.getRowProps()}>
              {row.cells.map((cell, cellIndex) => {
                return (
                  <TableCell
                    {...cell.getCellProps()}
                    key={cellIndex}
                    align='center'>
                    {cell.render('Cell')}
                  </TableCell>
                );
              })}
            </TableRow>
          );
        })}
      {!isLoading && !rows.length && (
        <TableRow>
          <TableCell
            colSpan={columns.length}
            align='center'>
            No items to show
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};

export default EpochRows;
