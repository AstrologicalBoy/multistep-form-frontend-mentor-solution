import Step from "./Step"
import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

import { motion } from "framer-motion";

const sections = [
    {
        position: 1,
        title: "Step 1",
        description: "Your info"
    },
    {
        position: 2,
        title: "Step 2",
        description: "Select plan"
    },
    {
        position: 3,
        title: "Step 3",
        description: "Add-ons"
    },
    {
        position: 4,
        title: "Step 4",
        description: "Summary"
    },

]


const SectionPointer = () => {
    const contextData = useContext(FormContext);

    return (
        <motion.section
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            className="absolute top-0 left-0 right-0 md:relative md:w-1/3 md:h-100 md:bg-black/50 md:rounded-xl overflow-hidden"
        >
            <div className="bg-section-pointer h-[200px] md:h-[100%] md:absolute md:inset-0 flex justify-center items-start md:flex-col md:justify-start md:items-start gap-6 px-8 py-10"
            >
                {/* Section indicators */}
                {sections.map((section, index) => (
                        <Step
                            key={index}
                            position={section.position}
                            title={section.title}
                            description={section.description}
                            active={index+1 === contextData.stage && true}
                        />
                ))}
            </div>                
        </motion.section>
    )
}

export default SectionPointer