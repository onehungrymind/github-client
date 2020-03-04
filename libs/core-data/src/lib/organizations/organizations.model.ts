export interface Organization {
  user {
    login: string
    organizations {
      nodes {
        name: string
        repositories {
          nodes {
            name: string
            vulnerabilityAlerts {
              nodes {
                repository {
                  name: string
                  description: string
              }
            }
          }
        }
      }
    }
  }
}
