# Epoch Table

- [x] Fetch from the given API from .env file
- [x] Use graphql for initial fetch
- [x] Initially sort by 'startBlock' in descending order through gql
- [x] Sort columns descending order initially then ascending order once active column is clicked again through gql
- [x] Search 'startBlock' though gql
- [x] Pagination done through frontend side
- [x] Horizontal scroll should appear on mobile view for the table
- [x] Sticky Header is enabled
- [x] Big numbers are rounded off up to 2 decimal values

## Limitations:
- should input whole 'startBlock' value for it to appear. example: `12589880`
- Whole number values will not be shown when cell is clicked. No expanded table feature.

## Additional Packages used:
- Material UI
- react-table

#### Needed installations to run application:
- node
- npm

To run:
`npm start`

