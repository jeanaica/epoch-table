import { TablePagination } from '@mui/material';

const EpochFooter = ({
  count,
  pageSize,
  pageIndex,
  previousPage,
  nextPage,
  setPageSize,
}) => {
  return (
    <TablePagination
      sx={{
        '.MuiTablePagination-spacer': {
          display: 'none',
        },
      }}
      component='div'
      count={count}
      rowsPerPage={pageSize}
      page={pageIndex}
      backIconButtonProps={{
        'aria-label': 'Previous Page',
        onClick: () => previousPage(),
      }}
      nextIconButtonProps={{
        'aria-label': 'Next Page',
        onClick: () => nextPage(),
      }}
      onPageChange={() => {
        // NOOP
      }}
      onRowsPerPageChange={e => setPageSize(Number(e.target.value))}
    />
  );
};

export default EpochFooter;
