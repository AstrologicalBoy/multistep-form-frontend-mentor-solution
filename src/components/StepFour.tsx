import { useContext } from "react"
import { FormContext } from "../contexts/FormContext"
import { motion } from "framer-motion";

const SectionFour = () => {

  const contextData = useContext(FormContext);

  const changePlanType = () => {
    if (contextData.plan_info.plan_type === "yearly") {
      contextData.setFormData((current) => ({ ...current, plan_info: { ...current.plan_info, plan_type: "monthly" } }))
    } else {
      contextData.setFormData((current) => ({ ...current, plan_info: { ...current.plan_info, plan_type: "yearly" } }))
    }
  }

  const planName = contextData.plan_info.plan === 1 ? "Arcade" : contextData.plan_info.plan === 2 ? "Advanced" : "Pro";
  const planPrice = contextData.plan_info.plan === 1 ? 9 : contextData.plan_info.plan === 2 ? 12 : 15;
  const extra_1_price = contextData.extras.extra_1 ? 1 : 0;
  const extra_2_price = contextData.extras.extra_2 ? 2 : 0;
  const extra_3_price = contextData.extras.extra_3 ? 2 : 0;
  const subTotal = contextData.plan_info.plan_type === "monthly" ? planPrice + extra_1_price + extra_2_price + extra_3_price : (planPrice + extra_1_price + extra_2_price + extra_3_price)*10;

  const formData = {
    planName: planName,
    planPrice: planPrice,
    extras: {
      one: extra_1_price,
      two: extra_2_price,
      three: extra_3_price
    },
    subTotal: subTotal
  }

  const confirmForm = () => {
    console.log(formData);
    contextData.setFormData((current) => ({...current, submit: true}));
  }

  return (
    <section className="h-[100%] flex flex-col justify-between">
      <div className="bg-white shadow-md md:shadow-none relative z-10 top-[120px] rounded-xl p-8 md:p-0 md:top-auto">
        <motion.h2
          initial={{x: -20, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{delay: 0.2}}
          className="text-xl md:text-3xl font-bold text-marineBlue mb-3"
        >
          Finishing up
        </motion.h2>
        <motion.p
          initial={{x: -20, opacity: 0}}
          animate={{x: 0, opacity: 1}}
          transition={{delay: 0.3}}
          className="text-md md:text-sm"
        >
          Double-check everything looks OK before confirming.
        </motion.p>

        <motion.div
          initial={{opacity: 0, x: -20}}
          animate={{opacity: 1, x: 0}}
          className="mt-8 bg-gray-50 p-6 rounded-md"
        >

          <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.4}}
            className="border-b border-lightGray/75 flex justify-between items-center pb-6"
          >
            <div>
              <h3 className="text-sm font-medium text-marineBlue">
                {planName} ({contextData.plan_info.plan_type})
              </h3>
              <button className="text-sm underline hover:text-purplishBlue transition-colors duration-200 ease-in-out" onClick={changePlanType}>
                Change
              </button>
            </div>

            <div>
              {contextData.plan_info.plan_type === "monthly" ?
                <p className="text-sm font-medium text-marineBlue">
                  ${planPrice}/mo
                </p>
                :
                <p className="text-sm font-medium text-marineBlue">
                  ${planPrice * 10}/yr
                </p>
              }
            </div>
          </motion.div>

          {contextData.extras.extra_1 &&
            <motion.div
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.5}}
              className="mt-6 mb-4 flex justify-between items-center"
            >
              <div>
                <h3 className="text-xs font-medium">Online service</h3>
              </div>

              <div>
                {contextData.plan_info.plan_type === "monthly" ?
                  <p className="text-xs font-medium text-marineBlue">+${extra_1_price}/mo</p>
                  :
                  <p className="text-xs font-medium text-marineBlue">+${extra_1_price * 10}/yr</p>
                }
              </div>
            </motion.div>
          }

          {contextData.extras.extra_2 &&
            <motion.div
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.55}}
              className="mb-4 flex justify-between items-center"
            >
              <div>
                <h3 className="text-xs font-medium">Larger Storage</h3>
              </div>
              <div>
                {contextData.plan_info.plan_type === "monthly" ?
                  <p className="text-xs font-medium text-marineBlue">+${extra_2_price}/mo</p>
                  :
                  <p className="text-xs font-medium text-marineBlue">+${extra_2_price * 10}/yr</p>
                }
              </div>
            </motion.div>
          }

          {contextData.extras.extra_3 &&
            <motion.div
              initial={{opacity: 0, y: -20}}
              animate={{opacity: 1, y: 0}}
              transition={{delay: 0.6}}
              className="flex justify-between items-center"
            >
              <div>
                <h3 className="text-xs font-medium">Customizable profile</h3>
              </div>
              <div>
                {contextData.plan_info.plan_type === "monthly" ?
                  <p className="text-xs font-medium text-marineBlue">+${extra_3_price}/mo</p>
                  :
                  <p className="text-xs font-medium text-marineBlue">+${extra_3_price * 10}/yr</p>
                }
              </div>
            </motion.div>
          }

        </motion.div>

        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.65}}
          className="p-6 flex justify-between items-center"
        >
          <div>
            <h3 className="text-xs font-medium">Total ({contextData.plan_info.plan_type})</h3>
          </div>

          <div>
            {contextData.plan_info.plan_type === "monthly" ?
              <p className="text-md font-semibold text-purplishBlue">${subTotal}/mo</p>
              :
              <p className="text-md font-semibold text-purplishBlue">${subTotal}/yr</p>
            }
            
          </div>
        </motion.div>
      </div>

      {/* Next and Go back buttons */}
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.7}}
        className={`absolute md:relative left-0 bottom-0 right-0 p-4 md:p-0 bg-white md:bg-transparent flex justify-between`}
      >
        <button
          onClick={() => contextData.setFormData((current) => ({ ...current, stage: current.stage - 1 }))}
          className={`hover:text-marineBlue text-sm transition-colors duration-200 ease-in-out`}
        >
          Go back
        </button>
        <motion.button
          whileTap={{scale: 0.9}}
          onClick={confirmForm} className="px-5 py-2 text-white text-sm bg-marineBlue rounded-md hover:bg-marineBlue/90 transition-colors duration-200 ease-in-out"
        >
          Confirm
        </motion.button>
      </motion.div>
    </section>
  )
}

export default SectionFour