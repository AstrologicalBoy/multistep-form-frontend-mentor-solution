import { motion } from "framer-motion"

const Finish = () => {
    return (
        <section className="bg-white shadow-md md:shadow-none relative z-10 top-[120px] md:h-[100%] rounded-xl px-8 py-20 md:py-0 md:px-4 md:top-auto flex flex-col justify-center items-center">
            <motion.img
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                src="/images/icon-thank-you.svg"
                alt="Icon"
                className="mb-6 md:mb-8"
            />
            <motion.h2
                initial={{y: -20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.3}}
                className="text-center font-semibold text-marineBlue text-2xl mb-4"
            >
                Thank you!
            </motion.h2>
            <motion.p
                initial={{y: -20, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{delay: 0.35}}
                className="text-center text-sm"
            >
                Thanks for confirming your suscription! We hope you have fun using our platform. If you ever need support feel free to email us at support@loregaming.com
            </motion.p>
        </section>
    )
}

export default Finish