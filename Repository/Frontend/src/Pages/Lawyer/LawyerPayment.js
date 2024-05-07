import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  lawyerPaymentHistorySelector,
  lawyerPaymentLeftSelector,
} from "../../Redux/lawyer/lawyerSelector";
import {
  isLoggedinSelector,
  loginTokenSelector,
  userTypeSelector,
} from "../../Redux/auth/authSelector";
import { addLawyerPaymentAsync } from "../../Redux/lawyer/lawyerAction";
import DateLiberary from "../../Helper/DateLiberary";
import { useNavigate } from "react-router-dom";
import { useToast } from "../../Context/ToastProvider";

const LawyerPayment = () => {
  const isLoggedin = useSelector((state) => isLoggedinSelector(state));
  const userType = useSelector((state) => userTypeSelector(state));
  const navigate = useNavigate();

  const { toast } = useToast();
  useEffect(() => {
    if (!isLoggedin || userType !== "lawyer") {
      navigate("/logout");
    }
  }, [isLoggedin, userType]);
  const paymentLeft = useSelector((state) => lawyerPaymentLeftSelector(state));
  const paymentHistory = useSelector((state) =>
    lawyerPaymentHistorySelector(state)
  );
  const loginToken = useSelector((state) => loginTokenSelector(state));
  const [paying, setPaying] = useState(0);
  const [status, setStatus] = useState("success");
  const dispatch = useDispatch();
  async function handlePayment() {
    try {
      const dataToSend = {
        loginToken,
        amount: paying,
        status: status,
      };
      toast.info("Paying");
      dispatch(addLawyerPaymentAsync(dataToSend, toast));
      setPaying(0);
      setStatus("success");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
       ... to be implemented 
    </div>
  );
};

export default LawyerPayment;
