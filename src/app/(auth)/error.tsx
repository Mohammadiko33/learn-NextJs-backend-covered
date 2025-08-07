"use client"

interface IError { 
    error: Error
 }

const Error = ({error}: IError) => {
  return (
    <div>{error.message} , you can contact with our admins <a href="developer.iko.mike@gmail.com">developer-iko-mike@gmail.com</a></div>
  );
};

export default Error;