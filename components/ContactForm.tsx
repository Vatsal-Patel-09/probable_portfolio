"use client";
import { useState, useEffect } from "react";
// npm install react-hook-form @web3forms/react
import { useForm } from "react-hook-form";
import HCaptcha from "@hcaptcha/react-hcaptcha";
// @ts-ignore
import useWeb3Forms from "@web3forms/react";
import { FaEnvelope } from "react-icons/fa";

export default function ContactForm() {
    const {
        register,
        reset,
        handleSubmit,
        setValue,
        formState: { isSubmitting },
    } = useForm();

    const [isSuccess, setIsSuccess] = useState(false);
    const [result, setResult] = useState(null);

    const accessKey = "c8358f7b-3f2d-4f00-9fc2-861d0cdbcdfa";

    const { submit: onSubmit } = useWeb3Forms({
        access_key: accessKey,
        settings: {
            from_name: "jcic.online Portfolio",
            subject: "New Contact Message from your Website",
            // ... other settings
        },
        onSuccess: (msg: any, data: any) => {
            setIsSuccess(true);
            setResult(msg);
            reset();
        },
        onError: (msg: any, data: any) => {
            setIsSuccess(false);
            setResult(msg);
        },
    });

    const onHCaptchaChange = (token: string) => {
        setValue("h-captcha-response", token);
    };

    return (
        <div className="max-w-100 mx-auto p-4 ">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                    type="text"
                    {...register("name", { required: true })}
                    className="w-full p-2 border border-yellow-700 rounded"
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    {...register("email", { required: true })}
                    className="w-full p-2 border border-yellow-700 rounded"
                    placeholder="Email"
                    required
                />
                <textarea
                    {...register("message", { required: true })}
                    className="w-full p-2 border border-yellow-700 rounded"
                    placeholder="Message"
                    rows={8}
                    required
                ></textarea>

                <HCaptcha
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    reCaptchaCompat={false}
                    onVerify={onHCaptchaChange}
                />

                <button type="submit" className="w-full btn" disabled={isSubmitting}>
                    {isSubmitting ? (
                        "Sending..."
                    ) : (
                        <>
                            Send Message
                            <FaEnvelope className="text-2xl ml-2" />
                        </>
                    )}
                </button>
            </form>

            <div className={"mt-4 text-center" + (isSuccess ? " text-green-500" : " text-red-500")}>
                {result}
            </div>
        </div>
    );
}
