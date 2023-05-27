import { ref } from 'vue'

import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default function useCountry() {
    const countrys = ref([])

    try {
        const { result } = useQuery(gql `
            query MyQuery {
                countries {
                  name
                  phone
                  code
                  currency
                  emoji
                  languages {
                    name
                  }
                  states {
                    name
                  }
                  capital
                }
              }
          `)
        countrys.value = result
    } catch (error) {
        console.log(error)
    }





    return {
        countrys,

    }
}