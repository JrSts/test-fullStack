import { Country, CountryInfo } from "@/app/Model/interfaces";
import axios from "axios";
import { useEffect, useState } from "react"

export default function Details() {
  
  
  const [countryInfo, setCountryInfo] = useState<CountryInfo>();
  const [country, setCountry] = useState<Country>();

  useEffect (() => {
    const getCountryInfo = async (id: string) => {
      await axios({url:`http://localhost:3001/${id}`})
      .then(response => {
        if (response.data) {
          setCountryInfo(response.data)
        }
      })
    }

    const getCountry = async (id: string) => {
      await axios({url:`http://localhost:3001/id/${id}`})
      .then(response => {
        if (response.data) {
          setCountry(response.data)
        }
      })
    }
    getCountry("AL")
    getCountryInfo("AL");
  }, [])
  
  return (
    <div>
      
    </div>
  )
}