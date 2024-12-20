import React from "react"
import styles from "./countryBox.module.css"
import { CountryComplete } from "@/app/Model/interfaces"



export default function CountryBox(props: CountryComplete) {
  return (
    <div id={styles.container}>
      <img alt="Flag" src={props.countryInfo.flagURL} />
      <label>{props.country.name}</label>
    </div>
  )
}