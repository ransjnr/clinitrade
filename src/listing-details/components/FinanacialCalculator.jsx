import InputField from "@/add-listing/components/InputField";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

function FinanacialCalculator({ carDetail: instrumentDetail }) {
  const [instrumentPrice, setInstrumentPrice] = useState(0);
  const [intrestRate, setIntrestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const CalculateMonthlyPayment = () => {
    console.log(instrumentPrice, intrestRate, loanTerm, downPayment);
    const Principal = instrumentPrice - downPayment;
    const MonthlyInterestRate = intrestRate / 1200; // Convert to Decimal;

    const MonthlyPayment =
      (Principal *
        MonthlyInterestRate *
        Math.pow(1 + MonthlyInterestRate, loanTerm)) /
      (Math.pow(1 + MonthlyInterestRate, loanTerm) - 1);

    setMonthlyPayment(MonthlyPayment.toFixed(2));
  };

  return (
    <div className="p-4 md:p-6 lg:p-10 border rounded-xl shadow-md mt-4 md:mt-7">
      <h2 className="font-medium text-lg md:text-xl lg:text-2xl">
        Financial Calculator
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-4 md:mt-5">
        <div className="w-full">
          <label className="text-sm md:text-base">Price $</label>
          <Input
            type="number"
            onChange={(e) => setInstrumentPrice(e.target.value)}
            className="mt-1"
          />
        </div>
        <div className="w-full">
          <label className="text-sm md:text-base">Interest Rate</label>
          <Input
            type="number"
            onChange={(e) => setIntrestRate(e.target.value)}
            className="mt-1"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mt-4">
        <div className="w-full">
          <label className="text-sm md:text-base">Loan Term (Months)</label>
          <Input
            type="number"
            onChange={(e) => setLoanTerm(e.target.value)}
            className="mt-1"
          />
        </div>
        <div className="w-full">
          <label className="text-sm md:text-base">Down Payment</label>
          <Input
            type="number"
            onChange={(e) => setDownPayment(e.target.value)}
            className="mt-1"
          />
        </div>
      </div>

      {monthlyPayment > 0 && (
        <h2 className="font-medium text-lg md:text-xl lg:text-2xl mt-4 md:mt-5">
          Your Monthly Payment Is :
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold block">
            ${monthlyPayment}
          </span>
        </h2>
      )}
      <Button
        className="w-full mt-4 md:mt-5"
        size="lg"
        onClick={CalculateMonthlyPayment}
      >
        Calculate
      </Button>
    </div>
  );
}

export default FinanacialCalculator;
