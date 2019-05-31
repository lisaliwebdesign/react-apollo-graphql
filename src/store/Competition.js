import gql from 'graphql-tag'

export const COMPETITION_QUERY = gql`
    query CompetitionQuery{
        competitions {
            competitions {
                id
                title
                description
                openTime
                closeTime
            }
            count
        }
    }
`

export const GET_COMPETITION_BY_ID_QUERY = gql`
    query GetCompetitionByIdQuery($filter: String!) {
        competitions(filter: $filter) {
            competitions {
                id
                title
                description
                openTime
                closeTime
            }
            count
        }
    }
`

