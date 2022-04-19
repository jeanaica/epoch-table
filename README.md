# Wise Interview React Challenge

This is a blank canvas bootsrapped by create-react-app. The objective of this test is to gauge your JS skills. We will be critiquing your knowledge of project architecure, JS best practices, and coding style. This test is intended to take no more than 2 hours. Please fork this repo, and push your code to a branch in your forked repo. 

In this exercise you will create an Epochs table that has sorting, search and/or pagination. Data will be available at the endpoint provided in the .env file. Note: It is not required to finish implementing all the features.

The subgraph endpoint we will use is located in the .env file. You can find the subgraph here and use the playground to see the schema and make queries: https://thegraph.com/explorer/subgraph/graphprotocol/graph-network-mainnet.

For this challenge we will query the Entity called Epoch.
After you get all of the epochs (or some of them, if you use pagination), render them in a table with the columns with the data you choose to display. 
In order to format Big numbers that come back from the subgraph fields, divide them with 10^18. Don't worry about precision. You can round them after division, truncate the decimals etc.

All columns should be sortable in asc/desc order. Default order should be by Epoch's startBlock. Make use of GraphQL queries.
Search should only be implemented for Epoch's startBlock. Make sure to use a GraphQL query.

Bonus! The table should be horizontally scrollable on mobile.

Notes

Please use Apollo client with hooks to query.

Put your queries into apollo/queries.js file.

Feel free to install libraries that aid in your ability to complete this challenge in a timely manner. ethers.js and Material ui are encouraged. 

