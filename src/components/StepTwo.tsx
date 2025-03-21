import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

import { motion } from "framer-motion";

const Plans = [
  {
    title: "Arcade",
    price: 9,
    icon: "/images/icon-arcade.svg"
  },
  {
    title: "Advanced",
    price: 12,
    icon: "/images/icon-advanced.svg"
  },
  {
    title: "Pro",
    price: 15,
    icon: "/images/icon-pro.svg"
  },
]

const SectionTwo = () => {

  const contextData = useContext(FormContext);

  const changeBilling = () => {
    if (contextData.plan_info.plan_type === "monthly") {
      contextData.setFormData((current) => ({...current, plan_info: { ...current.plan_info, plan_type: "yearly" }}))
    } else {
      contextData.setFormData((current) => ({...current, plan_info: { ...current.plan_info, plan_type: "monthly" }}))
    }
  }

  return (
    <section className="h-[100%] flex flex-col justify-between">
      <div className="bg-white shadow-md md:shadow-none relative z-10 top-[120px] rounded-xl p-8 md:p-0 md:top-auto">
        {/* Títulos */}
        <motion.h2
          initial={{x: -20, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{delay: 0.2}}
          className="text-xl md:text-3xl font-bold text-marineBlue mb-3"
        >
          Select your plan
        </motion.h2>
        <motion.p
          initial={{x: -20, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{delay: 0.3}}
          className="text-md md:text-sm"
        >
          You have the option of monthly or yearly billing.
        </motion.p>

        {/* Options */}
        <div className="mt-6 md:mt-8">
          <div className="flex flex-col md:flex-row gap-3">
            {Plans.map((plan, index) => (
              <motion.button
                initial={{opacity: 0, x: -20}}
                animate={{opacity: 1, x: 0}}
                transition={{delay: (index * 0.1) + 0.3}}
                whileTap={{scale: 0.95}}
                whileHover={{scale: 1.05}}
                key={index}
                className={`border ${index === contextData.plan_info.plan - 1 ? "border-purplishBlue" : "border-lightGray hover:border-purplishBlue/50"} px-3 py-4 rounded-lg md:w-1/3 transition-colors duration-200 ease-in-out flex gap-4 justify-start items-center md:block`}
                onClick={() => contextData.setFormData((current) => ({...current, plan_info: { ...current.plan_info, plan: index + 1 }}))}
              >
                <img
                  src={plan.icon}
                  alt={plan.title}
                  className="md:mb-8"
                />
                <div>
                  <h3 className="text-start font-medium text-marineBlue">{plan.title}</h3>
                  <p className="text-start text-sm">${contextData.plan_info.plan_type === "monthly" ? `${plan.price}/mo` : `${plan.price * 10}/yr`}</p>
                  {contextData.plan_info.plan_type === "yearly" &&
                    <p className="text-marineBlue text-start text-xs tracking-tight mt-1">2 months free</p>
                  }
                </div>
              </motion.button>
            ))}
          </div>

          <motion.div
            initial={{opacity: 0, x: 20}}
            animate={{opacity: 1, x: 0}}
            transition={{delay: 0.6}}
            className="flex justify-center items-center gap-3 p-3 mt-6 bg-alabaster rounded-lg"
          >
            <p className={`text-sm font-medium transition-colors duration-200 ease-in-out ${contextData.plan_info.plan_type === "monthly" && "text-marineBlue"}`}>Monthly</p>
            <button
              onClick={changeBilling}
              className={`relative bg-marineBlue h-5 w-10 p-1 rounded-full `}
            >
              <div className={`absolute bg-white w-3 h-3 transition-all duration-200 ease-in-out rounded-full top-1 ${contextData.plan_info.plan_type === "monthly" ? "left-1" : "left-6"}`} />
            </button>
            <p className={`text-sm font-medium transition-colors duration-200 ease-in-out ${contextData.plan_info.plan_type === "yearly" && "text-marineBlue"}`}>Yearly</p>
          </motion.div>

        </div>
      </div>
      
      {/* Next and Go back buttons */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.7}}
        className={`absolute md:relative left-0 bottom-0 right-0 p-4 md:p-0 bg-white md:bg-transparent flex justify-between`}
      >
        <button
          onClick={() => contextData.setFormData((current) => ({...current, stage: current.stage - 1}))}
          className={`hover:text-marineBlue text-sm transition-colors duration-200 ease-in-out`}
        >
          Go back
        </button>
        <motion.button
          whileTap={{scale: 0.9}}
          onClick={() => contextData.setFormData((current) => ({...current, stage: current.stage + 1}))} className="px-5 py-2 text-white text-sm bg-marineBlue rounded-md hover:bg-marineBlue/90 transition-colors duration-200 ease-in-out"
        >
          Next Step
        </motion.button>
      </motion.div>
    </section>
  )
}

export default SectionTwo