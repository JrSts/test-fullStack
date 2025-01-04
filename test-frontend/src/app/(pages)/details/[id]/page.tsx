'use client'

import { CountryInfo } from "@/Model/interfaces";
import axios from "axios";
import { CSSProperties, useEffect, useState } from "react"
import styles from "./details.module.css"
import PopulationChart from "@/app/Components/PopularionChart";
import { ClipLoader } from "react-spinners";

interface DetailsProps {
  params: {
    id: string,
    commomName: string
  };
}

export default function Details({ params }: DetailsProps) {

  const [loading, setLoading] = useState(true);
  
  const [id, setId] = useState("");
  
  const [countryInfo, setCountryInfo] = useState<CountryInfo>();

  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params;
      setId(resolvedParams.id);
    }
  
    fetchParams()

  }, [params])

  const getCountryInfo = async (param: string) => {
    await axios.get(`http://localhost:3001/${param}`)
    .then(response => {
      if (response.data) {
        setCountryInfo(response.data)
      }
    })
  }

  const override: CSSProperties = {
    display: "block",
    borderColor: "blue"
  };

  useEffect(() => {
    getCountryInfo(id);
  }, [id])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500);
  }, [countryInfo])
  
  return ( !loading ?
    <div id={styles.container}>
      <div id={styles.subcontainer}>
        <img src={countryInfo?.flagURL} alt="bandeira" height={100} />
        <div id={styles.boxInfo}>
          <p>Name: {countryInfo?.populationData && countryInfo.populationData[0].country}</p>
          <p>Country Code: {countryInfo?.populationData && countryInfo?.populationData[0].code}</p>
        </div>
      </div>
      <div id={styles.chart}>
        <PopulationChart 
          key={countryInfo?.populationData && countryInfo?.populationData[0].code}

          code={countryInfo?.populationData && countryInfo?.populationData[0].code || id}
          country={countryInfo?.populationData && countryInfo?.populationData[0].country || "Not Found"}
          populationCounts={countryInfo?.populationData && countryInfo?.populationData[0].populationCounts || []}
          iso3={countryInfo?.populationData && countryInfo?.populationData[0].iso3 || ""}
        />
      </div>
    </div>
    : 
    <div id={styles.loading}>
       <ClipLoader
        color={"#0000aa"}
        loading={loading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}