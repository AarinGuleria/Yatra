import { FC } from "react";
import { Helmet } from "react-helmet-async";
import Input from "../../shared/input/Input";
import { Link } from "react-router-dom";
import Button from "../../shared/Button/Button";

export interface PageLoginProps {
  className?: string;
}

const loginSocials = [
  {
    name: "Continue with Facebook",
    href: "#",
  },
  {
    name: "Continue with Twitter",
    href: "#",
  },
  {
    name: "Continue with Google",
    href: "#",
  },
];

const PageLogin: FC<PageLoginProps> = ({ className = "" }) => {
  return (
    <div className={`nc-PageLogin ${className} bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100`} data-nc-id="PageLogin">
      <Helmet>
        <title>Login || Booking React Template</title>
      </Helmet>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold justify-center">
          Login
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          <div className="grid gap-3">
            {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="nc-will-change-transform flex w-full rounded-lg bg-gray-100 dark:bg-gray-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                <h3 className="flex-grow text-center text-sm font-medium sm:text-sm">
                  {item.name}
                </h3>
              </a>
            ))}
          </div>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:bg-gray-900">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-gray-300 dark:border-gray-700"></div>
          </div>
          {/* FORM */}
          <form className="grid grid-cols-1 gap-6" action="#" method="post">
            <label className="block">
              <span className="text-gray-700 dark:text-gray-300">
                Email address
              </span>
              <Input
                type="email"
                placeholder="example@example.com"
                className="mt-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-gray-700 dark:text-gray-300">
                Password
                <Link to="/forgot-pass" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">
                  Forgot password?
                </Link>
              </span>
              <Input type="password" className="mt-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100" />
            </label>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600">Continue</Button>
          </form>

          {/* ==== */}
          <span className="block text-center">
            New user? {` `}
            <Link to="/signup" className="text-blue-600 dark:text-blue-400 hover:underline">Create an account</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PageLogin;