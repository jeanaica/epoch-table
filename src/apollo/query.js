import { gql } from '@apollo/client';

export const EPOCHES = gql`
  query Epoches($orderBy: String!, $orderDirection: String!) {
    epoches(orderBy: $orderBy, orderDirection: $orderDirection) {
      id
      startBlock
      endBlock
      signalledTokens
      stakeDeposited
      totalQueryFees
      taxedQueryFees
      queryFeesCollected
      curatorQueryFees
      queryFeeRebates
      totalRewards
      totalIndexerRewards
      totalDelegatorRewards
    }
  }
`;

export const EPOCHSEARCH = gql`
  query Epoch($orderBy: String!, $startBlock: Int!, $orderDirection: String!) {
    epoches(
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: { startBlock: $startBlock }
    ) {
      id
      startBlock
      endBlock
      signalledTokens
      stakeDeposited
      totalQueryFees
      taxedQueryFees
      queryFeesCollected
      curatorQueryFees
      queryFeeRebates
      totalRewards
      totalIndexerRewards
      totalDelegatorRewards
    }
  }
`;
