import { motion } from "framer-motion"; 

const Step = ({ position, title, description, active }: { position: number, title: string, description: string, active: boolean }) => {
    return (
        <motion.div
            initial={{x: -20, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{delay: position * 0.1}}
            className="flex items-center justify-start gap-6"
        >
            <div className={`${active === true ? "bg-lightBlue text-marineBlue" : "border border-white text-white" } min-w-8 min-h-8 flex justify-center items-center rounded-full transition-colors duration-200 ease-in-out`}>
                <h2 className="text-xs font-bold">
                    {position}
                </h2>
            </div>
            <div className="hidden md:block uppercase text-white">
                <h2 className="font-normal text-lightGray/75 text-xs">
                    {title}
                </h2>
                <p className="font-bold text-xs">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default Step;