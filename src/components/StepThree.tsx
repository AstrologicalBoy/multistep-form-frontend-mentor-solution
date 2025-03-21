import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";
import { motion } from "framer-motion";

type AddonType = {
  title: string,
  description: string,
  price: number
}

const addons : AddonType[] = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    price: 1
  },
  {
    title: "Larger storage",
    description: "Extra 1TB cloud save",
    price: 2
  },
  {
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: 2
  },
]


const SectionThree = () => {

  const contextData = useContext(FormContext);

  return (
    <section className="h-[100%] flex flex-col justify-between">
      <div className="bg-white shadow-md md:shadow-none relative z-10 top-[120px] rounded-xl p-8 md:p-0 md:top-auto">
        <motion.h2
          initial={{x: -20, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{delay: 0.2}}
          className="text-xl md:text-3xl font-bold text-marineBlue mb-3"
        >
          Pick add-ons
        </motion.h2>
        <motion.p
          initial={{x: -20, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{delay: 0.3}}
          className="text-md md:text-sm"
        >
          Add-ons help enhance your gaming experience.
        </motion.p>

        {/* Checkboxes */}
        <motion.label
          initial={{opacity: 0, x: 20}}
          animate={{opacity: 1, x: 0}}
          transition={{delay: 0.4}}
          whileTap={{scale: 0.98}}
          whileHover={{scale: 1.025}}
          htmlFor={addons[0].title.replace(" ", "-")}
          className={`flex justify-between items-center border border-lightGray hover:border-purplishBlue transition-colors duration-200 ease-in-out p-4 rounded-lg cursor-pointer mt-8 ${contextData.extras.extra_1 === true && "border-purplishBlue bg-alabaster"}`}
        >
          <div className="flex items-center gap-6">
            <input
              type="checkbox"
              id={addons[0].title.replace(" ", "-")}
              onChange={() => {
                // setSelection((current) => ({ ...current, 0: !selection[0] }));
                contextData.setFormData((current) => ({...current, extras: { ...current.extras, extra_1: !current.extras.extra_1 }}));
              }}
              className="cursor-pointer"
              checked={contextData.extras.extra_1}
            />
            <div>
              <h3 className="text-sm font-medium text-marineBlue">{addons[0].title}</h3>
              <p className="text-xs">{addons[0].description}</p>
            </div>
          </div>
          <div>
            {contextData.plan_info.plan_type === "monthly" ?
              <p className="text-xs text-purplishBlue">${addons[0].price}/mo</p>
              :
              <p className="text-xs text-purplishBlue">${addons[0].price*10}/yr</p>
            }
          </div>
        </motion.label>
        <motion.label
          initial={{opacity: 0, x: 20}}
          animate={{opacity: 1, x: 0}}
          transition={{delay: 0.5}}
          whileTap={{scale: 0.95}}
          whileHover={{scale: 1.05}}
          htmlFor={addons[1].title.replace(" ", "-")}
          className={`flex justify-between items-center border border-lightGray hover:border-purplishBlue transition-colors duration-200 ease-in-out p-4 rounded-lg cursor-pointer mt-3 ${contextData.extras.extra_2 === true && "border-purplishBlue bg-alabaster"}`}
        >
          <div className="flex items-center gap-6">
            <input
              type="checkbox"
              id={addons[1].title.replace(" ", "-")}
              onChange={() => {
                // setSelection((current) => ({ ...current, 1: !selection[1] }));
                contextData.setFormData((current) => ({...current, extras: { ...current.extras, extra_2: !current.extras.extra_2 }}));
              }}
              className="cursor-pointer"
              checked={contextData.extras.extra_2}
            />
            <div>
              <h3 className="text-sm font-medium text-marineBlue">{addons[1].title}</h3>
              <p className="text-xs">{addons[1].description}</p>
            </div>
          </div>
          <div>
          {contextData.plan_info.plan_type === "monthly" ?
              <p className="text-xs text-purplishBlue">${addons[1].price}/mo</p>
              :
              <p className="text-xs text-purplishBlue">${addons[1].price*10}/yr</p>
            }
          </div>
        </motion.label>
        <motion.label
          initial={{opacity: 0, x: 20}}
          animate={{opacity: 1, x: 0}}
          transition={{delay: 0.6}}
          whileTap={{scale: 0.95}}
          whileHover={{scale: 1.05}}
          htmlFor={addons[2].title.replace(" ", "-")}
          className={`flex justify-between items-center border border-lightGray hover:border-purplishBlue transition-colors duration-200 ease-in-out p-4 rounded-lg cursor-pointer mt-3 ${contextData.extras.extra_3 === true && "border-purplishBlue bg-alabaster"}`}
        >
          <div className="flex items-center gap-6">
            <input
              type="checkbox"
              id={addons[2].title.replace(" ", "-")}
              onChange={() => {
                // setSelection((current) => ({ ...current, 2: !selection[2] }));
                contextData.setFormData((current) => ({...current, extras: { ...current.extras, extra_3: !current.extras.extra_3 }}));
              }}
              checked={contextData.extras.extra_3}
              className="cursor-pointer"
            />
            <div>
              <h3 className="text-sm font-medium text-marineBlue">{addons[2].title}</h3>
              <p className="text-xs">{addons[2].description}</p>
            </div>
          </div>
          <div>
          {contextData.plan_info.plan_type === "monthly" ?
              <p className="text-xs text-purplishBlue">${addons[2].price}/mo</p>
              :
              <p className="text-xs text-purplishBlue">${addons[2].price*10}/yr</p>
            }
          </div>
        </motion.label>
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

export default SectionThree