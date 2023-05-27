import { ref, watch } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

export default function useCountry() {
    const countrys = ref([])
    const getAllCoutnrys = async() => {
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
            watch(result, value => {
                countrys.value = result
                console.log(result)
            })
        } catch (error) {
            console.log(error)
        }
    }


    return {
        countrys,
        getAllCoutnrys
    }
}