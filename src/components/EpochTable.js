import { Table, TableContainer } from '@mui/material';
import { useMemo } from 'react';
import { useTable, useFilters, usePagination } from 'react-table';
import EpochColumns from './EpochColumns';
import EpochFooter from './EpochFooter';
import EpochRows from './EpochRows';

const EpochTable = ({ data, isLoading, onSort, sortedBy }) => {
  const handleBigNumbers = num => {
    return (num / Math.pow(10, 18)).toFixed(2);
  };

  const columns = useMemo(() => {
    return [
      { accessor: 'id', Header: 'ID', disableSortBy: false },
      { accessor: 'startBlock', Header: 'Start Block', disableSortBy: false },
      { accessor: 'endBlock', Header: 'End Block', disableSortBy: false },
      {
        accessor: 'signalledTokens',
        Header: 'Signalled Tokens',
        disableSortBy: false,
      },
      {
        accessor: 'stakeDeposited',
        Header: 'Stake Deposited',
        disableSortBy: false,
      },
      {
        accessor: 'totalQueryFees',
        Header: 'Total Query Fees',
        disableSortBy: false,
      },
      {
        accessor: 'taxedQueryFees',
        Header: 'Taxed Query Fees',
        disableSortBy: false,
      },
      {
        accessor: 'queryFeesCollected',
        Header: 'Query Fees Collected',
        disableSortBy: false,
      },
      {
        accessor: 'curatorQueryFees',
        Header: 'Curator Query Fees',
        disableSortBy: false,
      },
      {
        accessor: 'queryFeeRebates',
        Header: 'Query Fee Rebates',
        disableSortBy: false,
      },
      {
        accessor: 'totalRewards',
        Header: 'Total Rewards',
        disableSortBy: false,
      },
      {
        accessor: 'totalIndexerRewards',
        Header: 'Total Indexer Rewards',
        disableSortBy: false,
      },
      {
        accessor: 'totalDelegatorRewards',
        Header: 'Total Delegator Rewards',
        disableSortBy: false,
      },
    ];
  }, []);

  const epoches = useMemo(() => {
    if (!data) return [];

    return data.map(epoch => {
      return {
        curatorQueryFees: handleBigNumbers(epoch.curatorQueryFees),
        endBlock: epoch.endBlock,
        id: epoch.id,
        queryFeeRebates: handleBigNumbers(epoch.queryFeeRebates),
        queryFeesCollected: handleBigNumbers(epoch.queryFeesCollected),
        signalledTokens: handleBigNumbers(epoch.signalledTokens),
        stakeDeposited: handleBigNumbers(epoch.stakeDeposited),
        startBlock: epoch.startBlock,
        taxedQueryFees: handleBigNumbers(epoch.taxedQueryFees),
        totalDelegatorRewards: handleBigNumbers(epoch.totalDelegatorRewards),
        totalIndexerRewards: handleBigNumbers(epoch.totalIndexerRewards),
        totalQueryFees: handleBigNumbers(epoch.totalQueryFees),
        totalRewards: handleBigNumbers(epoch.totalRewards),
      };
    });
  }, [data]);

  const {
    headerGroups,
    prepareRow,
    rows,
    page,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data: epoches,
      initialState: {
        pageIndex: 0,
        pageSize: 10,
      },
    },
    useFilters,
    usePagination
  );

  return (
    <>
      <TableContainer sx={{ maxHeight: '85vh' }}>
        <Table
          stickyHeader
          aria-label='sticky table'>
          <EpochColumns
            headerGroups={headerGroups}
            onSort={onSort}
            sortedBy={sortedBy}
          />
          <EpochRows
            columns={columns}
            rows={rows}
            page={page}
            prepareRow={prepareRow}
            isLoading={isLoading}
          />
        </Table>
      </TableContainer>
      {epoches.length >= pageSize && (
        <EpochFooter
          count={rows.length}
          pageSize={pageSize}
          pageIndex={pageIndex}
          previousPage={previousPage}
          nextPage={nextPage}
          setPageSize={setPageSize}
        />
      )}
    </>
  );
};

export default EpochTable;
