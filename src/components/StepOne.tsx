import { useContext } from "react"
import { FormContext } from "../contexts/FormContext"
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { motion } from "framer-motion";

const schema = z.object({
    name: z.string().min(4),
    email: z.string().email(),
    phone: z.string().min(8).regex(/^\+\d{1,2}\s?\d{3}\s?\d{3}\s?\d{4}$/),
})

type StepOneForm = z.infer<typeof schema>;

const SectionOne = () => {
    const contextData = useContext(FormContext);

    const { register, handleSubmit, formState: { errors } } = useForm<StepOneForm>({
        defaultValues: {
            name: contextData.user_info.name,
            email: contextData.user_info.email,
            phone: contextData.user_info.phone
        },
        resolver: zodResolver(schema)
    });

    const nextStep:SubmitHandler<StepOneForm> = (data) => {
        contextData.setFormData((current) => ({...current, user_info: { name: data.name, email: data.email, phone: data.phone }, stage: current.stage + 1}));
    }

    return (
        <form
            className="h-[100%] flex flex-col justify-between" onSubmit={handleSubmit(nextStep)}
        >
            <div className="bg-white shadow-md md:shadow-none relative z-10 top-[120px] rounded-xl p-8 md:p-0 md:top-auto">
                {/* Títulos */}
                <motion.h2
                    initial={{x: -20, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{delay: 0.3}}
                    className="text-xl md:text-3xl font-bold text-marineBlue mb-3"
                >
                    Personal info
                </motion.h2>
                <motion.p
                    initial={{x: -20, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{delay: 0.4}}
                    className="text-md md:text-sm"
                >
                    Please provide your name, email adress, and phone number.
                </motion.p>

                {/* Inputs */}
                <motion.div
                    initial={{x: 20, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{delay: 0.5}}
                    className="flex flex-col mt-6 md:mt-8"
                >
                    <div className="mb-2 flex justify-between">
                        <label htmlFor="name" className="text-marineBlue text-xs">
                            Name
                        </label>
                        {errors.name?.message && 
                            <motion.span
                                initial={{x: 20, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{delay: 0.1}}
                                className="text-red-600 text-xs"
                            >
                                {errors.name?.message}
                            </motion.span>
                        }
                    </div>
                    <input
                        type="text"
                        id="name"
                        placeholder="e.g. John Doe"
                        className={`border border-coolGray hover:border-purplishBlue cursor-pointer py-2 px-3 rounded-md text-marineBlue ${errors.name?.message && "border-red-700 active:border-red-700 focus:border-red-700"}`}
                        {...register("name")}
                    />
                </motion.div>

                <motion.div
                    initial={{x: 20, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{delay: 0.6}}
                    className="flex flex-col mt-4"
                >
                    <div className="mb-2 flex justify-between">
                        <label htmlFor="email" className="text-marineBlue text-xs">
                            Email Address
                        </label>
                        {errors.email?.message &&
                            <motion.span
                                initial={{x: 20, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{delay: 0.2}}
                                className="text-red-600 text-xs"
                            >
                                {errors.email?.message}
                            </motion.span>
                        }
                    </div>
                    <input
                        type="email"
                        id="email"
                        placeholder="e.g. johndoe@example.com"
                        className={`border border-coolGray hover:border-purplishBlue cursor-pointer py-2 px-3 rounded-md text-marineBlue ${errors.email?.message && "border-red-700 active:border-red-700 focus:border-red-700"}`}
                        {...register("email")}
                    />
                </motion.div>

                <motion.div
                    initial={{x: 20, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{delay: 0.7}}
                    className="flex flex-col mt-4"
                >
                    <div className="mb-2 flex justify-between">
                        <label htmlFor="phone" className="text-marineBlue text-xs">
                            Phone Number
                        </label>

                        {errors.phone?.message &&
                            <motion.span
                                initial={{x: 20, opacity: 0}}
                                animate={{x: 0, opacity: 1}}
                                transition={{delay: 0.3}}
                                className="text-red-600 text-xs"
                            >
                                {errors.phone?.message}
                            </motion.span>
                        }
                    </div>
                    <input
                        type="text"
                        id="phone"
                        placeholder="e.g. +1 123 456 7890"
                        className={`border border-coolGray hover:border-purplishBlue cursor-pointer py-2 px-3 rounded-md text-marineBlue ${errors.phone?.message && "border-red-700 active:border-red-700 focus:border-red-700"}`}
                        {...register("phone")}
                    />
                </motion.div>
            </div>

            {/* Next button */}
            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.8}}
                className={`absolute md:relative left-0 bottom-0 right-0 p-4 md:p-0 bg-white md:bg-transparent flex justify-end`}>
                <motion.button
                    whileTap={{scale: 0.9}}
                    type="submit"
                    className="px-5 py-2 text-white text-sm bg-marineBlue rounded-md hover:bg-marineBlue/90 transition-colors duration-200 ease-in-out"
                >
                    Next Step
                </motion.button>
            </motion.div>
        </form>
    )
}

export default SectionOne