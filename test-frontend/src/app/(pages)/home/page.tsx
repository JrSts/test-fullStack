'use client'

import { Country } from "@/Model/interfaces";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react"
import styles from './home.module.css'

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

  return (
    <div id={styles.container}>

        { countries &&
          countries.map((country: Country) => {
            return (
              <Link 
                key={country.countryCode} 
                id={styles.label} 
                href={`/details/${country.countryCode}`}
              >
                { country.name }
              </Link>
            )
        })}
    </div>
  )
}