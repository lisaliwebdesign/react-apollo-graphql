import { Query } from 'react-apollo'
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