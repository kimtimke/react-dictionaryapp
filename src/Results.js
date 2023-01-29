import React from "react";
import Meanings from "./Meanings";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics
            .filter(function (phonetic) {
              return phonetic.audio;
            })
            .map(function (phonetic, index) {
              return (
                <div key={index}>
                  {index < 1 ? <Phonetic phonetic={phonetic} /> : null}
                </div>
              );
            })}
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meanings meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
