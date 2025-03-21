import { createContext } from "react";
export type FormType = {
    stage: number,
    submit: boolean,
    user_info: {
        name: string,
        email: string,
        phone: string,
    },
    plan_info: {
        plan: number,
        plan_type: string,
    },
    extras: {
        extra_1: boolean,
        extra_2: boolean,
        extra_3: boolean
    },
    setFormData: React.Dispatch<React.SetStateAction<{ stage: number; submit: boolean; user_info: { name: string; email: string; phone: string; }; plan_info: { plan: number; plan_type: string; }; extras: { extra_1: boolean; extra_2: boolean; extra_3: boolean; }; }>>
}

export const FormContext = createContext<FormType>({
    stage: 1,
    submit: false,
    user_info: {
        name: "",
        email: "",
        phone: "",
    },
    plan_info: {
        plan: 1,
        plan_type: "",
    },
    extras: {
        extra_1: false,
        extra_2: false,
        extra_3: false,
    },
    setFormData: () => {}
});