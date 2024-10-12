import React, { useState } from "react";
import Header from "./Header";
import { AiOutlineFieldNumber } from "react-icons/ai";
import { BsDroplet } from "react-icons/bs";
import { WiHumidity, WiThermometer } from "react-icons/wi";
import { GiChemicalDrop, GiChemicalTank } from "react-icons/gi"; // Unique icons for Potassium and Phosphorus
import { PiFarm } from "react-icons/pi";

function Purchase() {
  const [paymentData, setPaymentData] = useState({
    method: "card",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    netBankingDetails: "",
    upiId: "",
  });

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    alert("Payment Successful!");
  };

  return (
    <>
      {/* Header Section */}
      <Header />

      {/* Main Purchase Page Content */}
      <div className="min-h-screen bg-gray-100 p-10">
        {/* Purchase Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            Purchase Testing Kit
          </h1>
          <p className="text-2xl text-green-600 mb-8">
            You can purchase a crop testing kit if you don't have one. It will
            help you analyze the soil and other essential parameters.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
          {/* Feature 1: Nitrogen */}
          <div className="bg-green-100 rounded-lg shadow-lg overflow-hidden m-4 p-6">
            <AiOutlineFieldNumber className="text-green-500 h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-700 text-center mb-2">
              Nitrogen Level
            </h3>
            <p className="text-green-600 text-center">
              Measure the nitrogen content in your soil.
            </p>
          </div>

          {/* Feature 2: Soil pH */}
          <div className="bg-green-100 rounded-lg shadow-lg overflow-hidden m-4 p-6">
            <PiFarm className="text-green-500 h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-700 text-center mb-2">
              Soil pH Level
            </h3>
            <p className="text-green-600 text-center">
              Analyze the pH level of your soil.
            </p>
          </div>

          {/* Feature 3: Humidity */}
          <div className="bg-green-100 rounded-lg shadow-lg overflow-hidden m-4 p-6">
            <WiHumidity className="text-green-500 h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-700 text-center mb-2">
              Humidity
            </h3>
            <p className="text-green-600 text-center">
              Track the humidity levels in the environment.
            </p>
          </div>

          {/* Feature 4: Temperature */}
          <div className="bg-green-100 rounded-lg shadow-lg overflow-hidden m-4 p-6">
            <WiThermometer className="text-green-500 h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-700 text-center mb-2">
              Temperature
            </h3>
            <p className="text-green-600 text-center">
              Record the current temperature for your farm.
            </p>
          </div>

          {/* Feature 5: Potassium */}
          <div className="bg-green-100 rounded-lg shadow-lg overflow-hidden m-4 p-6">
            <GiChemicalDrop className="text-green-500 h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-700 text-center mb-2">
              Potassium Level
            </h3>
            <p className="text-green-600 text-center">
              Measure potassium content in your soil.
            </p>
          </div>

          {/* Feature 6: Phosphorus */}
          <div className="bg-green-100 rounded-lg shadow-lg overflow-hidden m-4 p-6">
            <GiChemicalTank className="text-green-500 h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-green-700 text-center mb-2">
              Phosphorus Level
            </h3>
            <p className="text-green-600 text-center">
              Measure phosphorus content in your soil.
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-10 justify-center items-center text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-4 ">
            How It Works
          </h2>
          <p className="text-xl text-green-600">
            Our soil testing kit is easy to use and provides accurate results in
            just a few steps:
          </p>
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="text-2xl font-bold text-green-700">Step 1</h3>
              <p className="text-green-600 mt-2">
                Collect soil samples from different areas of your farm.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="text-2xl font-bold text-green-700">Step 2</h3>
              <p className="text-green-600 mt-2">
                Use the kit to test for nitrogen, phosphorus, potassium, and pH.
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="text-2xl font-bold text-green-700">Step 3</h3>
              <p className="text-green-600 mt-2">
                Enter the results into our app for tailored crop
                recommendations.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-10 bg-green-100 p-6 rounded-lg">
          <h2 className="text-3xl font-bold text-green-700 justify-center items-center text-center">
            Why Use Our Testing Kit?
          </h2>
          <ul className="list-disc text-green-600 mt-4 text-left mx-auto w-3/4">
            <li className="text-xl mt-2">
              Maximize your crop yield with data-driven insights.
            </li>
            <li className="text-xl mt-2">
              Reduce the guesswork and save money on fertilizers.
            </li>
            <li className="text-xl mt-2">
              Optimize water usage with better soil knowledge.
            </li>
            <li className="text-xl mt-2">
              Improve long-term soil health for sustainable farming.
            </li>
          </ul>
        </div>

        {/* Pricing and CTA Section */}
        <div className="mt-10 justify-center items-center text-center">
          <h2 className="text-4xl font-bold text-green-700">
            Get Your Kit for ₹999
          </h2>
          <p className="text-xl text-green-600 mt-4">
            Order today and start making smarter farming decisions.
          </p>
        </div>

        

        {/* Payment Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg mt-10">
          <form onSubmit={handlePaymentSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-2">
                Select Payment Method
              </label>
              <select
                value={paymentData.method}
                onChange={(e) =>
                  setPaymentData({ ...paymentData, method: e.target.value })
                }
                className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              >
                <option value="card">Credit/Debit Card</option>
                <option value="net-banking">Net Banking</option>
                <option value="upi">UPI</option>
              </select>
            </div>

            {/* Conditional fields based on payment method */}
            {paymentData.method === "card" && (
              <div className="space-y-4">
                <div>
                  <label className="block text-lg font-medium">
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={paymentData.cardNumber}
                    onChange={(e) =>
                      setPaymentData({
                        ...paymentData,
                        cardNumber: e.target.value,
                      })
                    }
                    className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                    placeholder="Enter your card number"
                    required
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <label className="block text-lg font-medium">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      value={paymentData.expirationDate}
                      onChange={(e) =>
                        setPaymentData({
                          ...paymentData,
                          expirationDate: e.target.value,
                        })
                      }
                      className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-lg font-medium">CVV</label>
                    <input
                      type="text"
                      value={paymentData.cvv}
                      onChange={(e) =>
                        setPaymentData({ ...paymentData, cvv: e.target.value })
                      }
                      className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                      placeholder="Enter CVV"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentData.method === "net-banking" && (
              <div>
                <label className="block text-lg font-medium">
                  Net Banking Details
                </label>
                <input
                  type="text"
                  value={paymentData.netBankingDetails}
                  onChange={(e) =>
                    setPaymentData({
                      ...paymentData,
                      netBankingDetails: e.target.value,
                    })
                  }
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  placeholder="Enter your net banking details"
                  required
                />
              </div>
            )}

            {paymentData.method === "upi" && (
              <div>
                <label className="block text-lg font-medium">UPI ID</label>
                <input
                  type="text"
                  value={paymentData.upiId}
                  onChange={(e) =>
                    setPaymentData({ ...paymentData, upiId: e.target.value })
                  }
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                  placeholder="Enter your UPI ID"
                  required
                />
              </div>
            )}

            <button
              type="submit"
              className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
            >
              Make Payment
            </button>
          </form>
        </div>
        {/* Testimonials Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-green-700 mb-4 justify-center items-center text-center">
            Hear From Our Happy Farmers
          </h2>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-green-600 italic">
                "This kit has transformed the way I farm. I can now make precise
                decisions that have increased my yield by 30%!"
              </p>
              <p className="text-green-700 font-bold mt-4">- Farmer 1</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-green-600 italic">
                "Thanks to the testing kit, I no longer waste fertilizers. It's
                a must-have for every serious farmer."
              </p>
              <p className="text-green-700 font-bold mt-4">- Farmer 2</p>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
}

export default Purchase;
