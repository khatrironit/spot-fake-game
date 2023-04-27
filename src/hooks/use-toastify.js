import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useToastify = () => {
  const notify = ({
		toastText,
		theme = 'light',
	}) => toast(toastText, {
		position: "top-right",
		autoClose: 2000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: theme,
		});

  const renderToast = () => (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      theme="dark"
    />
  );

  return { renderToast, notify };
};

export default useToastify;
