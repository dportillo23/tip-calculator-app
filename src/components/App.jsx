import React, { useState, useEffect } from 'react';
import '../styles/style.css';
import Header from './Header';
import InputBox from './InputBox';
import data from '../input'
import SelectTip from './Select';
import Display from './Display';
import Footer from './Footer';

export default function App() {

  // States
  const [tip, setTip] = useState(0);
  const [customTip, setCustomTip] = useState("");
  const [output, setOutput] = useState({
    tip: 0,
    total: 0
  });
  const { bill, people } = data;
  const [inputData, setInputData] = useState({
    bill: "",
    people: "",
  });


  //  Functions to handle changes and clicks
  const handleChange = (data) => {
    const { name, value } = data;

    setInputData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCustomChange = (data) => {
    setTip(0)
    setCustomTip(data)
  }

  const handleResetClick = () => {
    setInputData({
      bill: "",
      people: ""
    })
    setTip(0)
    setCustomTip("")
  }

  const onTipClick = (data) => {
    setCustomTip("")
    setTip(data.lastChild.value)
  }

//  Use effect to calculate tip per person and total per person in each render
  useEffect(() => {
    const tipPerson = customTip ? (inputData.bill * customTip / 100) / inputData.people : (inputData.bill * tip / 100) / inputData.people
    const totalPerson = customTip ? (inputData.bill * (1 + customTip / 100)) / inputData.people : (inputData.bill * (1 + tip / 100)) / inputData.people
    if (totalPerson && totalPerson !== Infinity && inputData.bill >= 0 && inputData.people >= 0) {
      setOutput({
        tip: tipPerson,
        total: totalPerson
      })
    } else {
      setOutput({
        tip: 0,
        total: 0
      })
    }
  }, [customTip, tip, inputData])

  return (
    <div>
      <div className="App">
        <Header />
        <section className="main--section">
          <div className="input--side">
            <InputBox
              key={bill.key}
              id={bill.id}
              label={bill.label}
              svg={bill.svg}
              value={inputData.bill}
              handleChange={handleChange}
            />

            <SelectTip
              customTip={customTip}
              handleChange={handleCustomChange}
              onTipClick={onTipClick}
              currentTip = {tip}
            />

            <InputBox
              key={people.key}
              id={people.id}
              label={people.label}
              svg={people.svg}
              value={inputData.people}
              handleChange={handleChange}
            />
          </div>

          <div className="display--side">
            <Display
              output={output}
              tip = {tip}
              customTip = {customTip}
              bill={inputData.bill}
              people={inputData.people}
              handleClick={handleResetClick}
            />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
