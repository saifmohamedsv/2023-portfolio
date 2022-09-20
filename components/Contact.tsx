import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { SubmitHandler, useForm } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:sm4webd@gmail.com?subject=${formData.subject}&body= Hi, my name is ${formData.name}. \n ${formData.message} \n (${formData.email})`;
  };

  return (
    <div
      className={
        "h-screen flex relative text-center flex-col md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center  "
      }
    >
      <h3
        className={
          "text-gray-500 absolute top-24 uppercase tracking-[20px] text-2xl"
        }
      >
        Contact
      </h3>

      <div className={"flex flex-col space-y-10"}>
        <h4 className={"text-4xl font-semibold text-center"}>
          I've got just what you need.
          <span className={"underline decoration-[#02a9f7]/50"}>
            Let's Talk
          </span>{" "}
        </h4>
        <div className={"space-y-10"}>
          <div className={"flex items-center space-x-5 justify-center"}>
            <PhoneIcon className={"text-[#02a9f7] h-7 w-7 animate-pulse"} />
            <p>+201206944093 </p>
          </div>
          <div className={"flex items-center space-x-5 justify-center"}>
            <EnvelopeIcon className={"text-[#02a9f7] h-7 w-7 animate-pulse"} />
            <p>sm4webd@gmail.com</p>
          </div>
          <div className={"flex items-center space-x-5 justify-center"}>
            <MapPinIcon className={"text-[#02a9f7] h-7 w-7 animate-pulse"} />
            <p>17x st. </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className={"flex flex-col space-y-2 w-fit mx-auto"}
        >
          <div className={"flex space-x-2"}>
            <input
              {...register("name")}
              placeholder={"Name"}
              className={"contactInput"}
              type={"text"}
            />
            <input
              {...register("email")}
              placeholder={"Email"}
              type={"email"}
              className={"contactInput"}
            />
          </div>
          <input
            {...register("subject")}
            placeholder={"Subject"}
            className={"contactInput"}
            type={"text"}
          />
          <textarea
            {...register("message")}
            placeholder={"Message"}
            className={"contactInput"}
          />
          <button
            type={"submit"}
            className={
              "bg-[#02a9f7] py-5 px-10 rounded-md text-white text-lg font-bold"
            }
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
