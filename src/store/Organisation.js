import gql from 'graphql-tag'

export const ORGANISATION_QUERY = gql`
    query ORGANISATIONQUERY{
        organisations {
            organisations {
                name
                type
            }
            count
        }
    }
`