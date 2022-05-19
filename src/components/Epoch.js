import { useQuery } from '@apollo/client';
import {
  Box,
  FilledInput,
  FormControl,
  InputLabel,
  Paper,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { EPOCHES, EPOCHSEARCH } from '../apollo/query';
import EpochTable from './EpochTable';

const Epoch = () => {
  const [search, setSearch] = useState('');
  const [result, setResult] = useState([]);
  const [sortBy, setSortBy] = useState({
    name: 'startBlock',
    orderDirection: 'desc',
  });

  const { loading, data } = useQuery(EPOCHES, {
    variables: {
      orderBy: sortBy.name,
      orderDirection: sortBy.orderDirection,
    },
    skip: search,
  });

  const { loading: isLoadingSearch, data: dataSearch } = useQuery(EPOCHSEARCH, {
    variables: {
      orderBy: sortBy.name,
      orderDirection: sortBy.orderDirection,
      startBlock: Number(search),
    },
    skip: !search,
  });

  useEffect(() => {
    if (dataSearch) {
      setResult(dataSearch.epoches);
    }
  }, [search, dataSearch]);

  useEffect(() => {
    if (data) {
      setResult(data.epoches);
    }
  }, [data]);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSort = sort => {
    let newOrderDirection = 'desc';
    if (sort === sortBy.name) {
      newOrderDirection = sortBy.orderDirection === 'desc' ? 'asc' : 'desc';
    }

    setSortBy({
      name: sort,
      orderDirection: newOrderDirection,
    });
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mt: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mr: 3 }}>
          <FormControl
            variant='filled'
            sx={{ width: '30%', mr: 1 }}>
            <InputLabel htmlFor='id'>Search by Start Block</InputLabel>
            <FilledInput
              id='startBlock'
              name='startBlock'
              value={search ?? ''}
              onChange={handleChange}
            />
          </FormControl>
        </Box>
        <EpochTable
          data={result}
          onSort={handleSort}
          sortedBy={sortBy}
          isLoading={loading || isLoadingSearch}
        />
      </Paper>
    </Box>
  );
};

export default Epoch;
