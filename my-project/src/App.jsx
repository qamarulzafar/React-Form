import React from "react";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting  },
    reset
  } = useForm();

  async function onSubmit(data) {

    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("submited", data);
    reset()

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <!-- component --> */}
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">
                  Login Form Made By 
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      {...register("username", {
                        required: true,
                        minLength: {value :3 , message : "Min Length At least 3"},
                        maxLength: {value :15, message : "Max Length Atmost 15"},
                      })}
                      id="username"
                      name="username"
                      type="text"
                      className={`peer placeholder-transparent h-10 w-full border-b-2  text-gray-900 focus:outline-none focus:borer-rose-600  ${errors.username ? "border-red-600": "border-gray-300"} ` }
                      placeholder="username"
                    />
                    {errors.username &&  <p className="text-xs text-red-600">{errors.username.message}</p>}
                    <label
                      htmlFor="username"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      User Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      {...register("password",{
                       required: true,
                       minLength: {value: 5, message: "Min Length is 5"},
                       maxLength: {value: 10, message: "Max Length is 10"}
                      })}
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className={`peer placeholder-transparent h-10 w-full border-b-2 text-gray-900 focus:outline-none focus:borer-rose-600 ${errors.password ? "border-red-600" : "border-gray-300"} `}
                      placeholder="Password"
                    />
                    {errors.password && <p className="text-xs text-red-600">{errors.password.message}</p>}
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                    type="submit"
                    disabled={isSubmitting}
                    className={`${isSubmitting ? "bg-blue-300 text-white rounded-md px-3 py-1 cursor-not-allowed" : "bg-blue-500 text-white rounded-md px-7 py-1 cursor-pointer"}`}
                    value={isSubmitting ? "submitting" : "submit"}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default App;
