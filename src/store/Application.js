import gql from 'graphql-tag'

export const CREATE_APPLICATION_MUTATION = gql`
    mutation CreateApplicationMutation($competitionId: ID!) {
        createApplication(competitionId: $competitionId) {
            id
        }
    }
`