'use client'
import CountryBox from "@/app/Components/CountryBox";
import { Country, CountryComplete, CountryInfo } from "@/app/Model/interfaces";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react"

useRouter()


export default function Home() {

  const [countries, setCountries] = useState<Country[]>();

  useEffect(() => {

    const getCountries = async () => {
      await axios({url:"http://localhost:3001"})
        .then(response => {
          if (response.data) {
            setCountries(response.data)
          }
        })
      }

    getCountries()
  }, [])

  return(

    <div>
        {
          countries?.map((country: Country) => {
            return (
              <Link href={"/Details/" + country.countryCode}>{ country.name }</Link>
            )
        })}
    </div>
  )
}