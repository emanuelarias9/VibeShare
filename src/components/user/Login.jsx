import React, { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { Global } from "../../helpers/Global";
import { apiClientService } from "../../helpers/ApiClientService";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { form, changed } = useForm({});
  const [success, setSuccess] = useState("");
  const [apiMessage, setApiMessage] = useState("");
  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();

    const urlPeticion = Global.urlApiBase + `/user/login`;
    const { apiResponse } = await apiClientService({
      urlPeticion: urlPeticion,
      method: "POST",
      data: form,
    });
    console.log(apiResponse);
    if (apiResponse.statusCode === 200) {
      sessionStorage.setItem("token", apiResponse.token);
      sessionStorage.setItem("user", JSON.stringify(apiResponse.user));
      navigate("/vibeshare/feed");
    } else {
      setSuccess("error");
      setApiMessage(apiResponse.message);
    }
  };
  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Iniciar sesión</h1>
      </header>
      <div className="content__posts">
        {success == "error" ? (
          <strong className="alert alert-danger">{apiMessage}</strong>
        ) : (
          ""
        )}

        <form className="form-login" onSubmit={loginUser}>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input type="email" name="email" onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" onChange={changed} />
          </div>
          <input
            type="submit"
            value="Iniciar sesion"
            className="btn btn-success"
          />
        </form>
      </div>
    </>
  );
};
