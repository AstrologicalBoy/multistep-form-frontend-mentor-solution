import { Suspense, useState } from "react"
import { FormContext } from "./contexts/FormContext";

import { motion } from "framer-motion";

import SectionPointer from "./components/SectionPointer";
import SectionOne from "./components/StepOne";
import SectionTwo from "./components/StepTwo";
import SectionThree from "./components/StepThree";
import SectionFour from "./components/StepFour";
import Finish from "./components/Finish";
import Loading from "./components/Loading";

const App = () => {
  const [formData, setFormData] = useState({
    stage: 1,
    submit: false,
    user_info: {
      name: "",
      email: "",
      phone: ""
    },
    plan_info: {
      plan: 1,
      plan_type: "monthly",
    },
    extras: {
      extra_1: false,
      extra_2: false,
      extra_3: false
    }
  })

  return (
    <FormContext.Provider value={{ ...formData, setFormData }}>
      <main
        className="min-h-screen min-w-screen md:flex md:justify-center md:items-center md:bg-lightBlue/50"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="relative h-[100vh] md:h-[555px] md:w-[700px] lg:w-[800px] bg-magnolia md:bg-white md:rounded-2xl md:p-4 md:flex md:gap-4 md:shadow-md"
        >
          <SectionPointer />
          <div className="h-[100dvh] md:h-auto w-5/6 mx-auto md:flex md:flex-col md:justify-between md:py-10 md:px-16 text-coolGray">
            {formData.stage === 1 &&
              <Suspense fallback={<Loading />}>
                <SectionOne />
              </Suspense>
            }
            {formData.stage === 2 &&
              <Suspense fallback={<Loading />}>
                <SectionTwo />
              </Suspense>
            }
            {formData.stage === 3 &&
              <Suspense fallback={<Loading />}>
                <SectionThree />
              </Suspense>
            }

            {formData.stage === 4 && formData.submit === false &&
              <Suspense fallback={<Loading />}>
                <SectionFour />
              </Suspense>
            }
            
            {formData.stage === 4 && formData.submit === true &&
              <Suspense fallback={<Loading />}>
                <Finish />
              </Suspense>
            }
          </div>
        </motion.div>
      </main>
    </FormContext.Provider>
  )
}

export default App
