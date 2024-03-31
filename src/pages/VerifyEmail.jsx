import React from "react";
import SuccessImg from "../assets/svgs/success.png";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { toast, Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import axios from "axios";

const VerifyEmail = () => {
  const params = useParams();
  const [validUrl, setValidUrl] = React.useState(false);

  React.useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:8080/api/user/${params.id}/verify/${params.token}`;
        const { data } = axios
          .get(url)
          .then((res) => {
            toast.success(res?.data?.message);
            setValidUrl(true);
          })
          .catch((err) => {
            toast.error(err?.data?.message);
          });

        console.log("DATA -----", data);    
      } catch (err) {
        toast.error(err.message);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [params]);
  return (
    <>
      {validUrl ? (
        <div className="container d-flex flex-col align-items-center">
          <img src={SuccessImg} alt="success_image" style={{height: "200px", width: "200px", objectFit: "cover"}} />
          <h1 className="text-green-500 text-3xl">Email Verified Successfully !</h1>
          <Link to={"/login"}>
            <Button cls="btn btn-primary my-2" text="Login" />
          </Link>
        </div>
      ) : (
        <h1 className="text-red-600">404, NOT FOUND</h1>
      )}
      <Toaster />
    </>
  );
};

export default VerifyEmail;
