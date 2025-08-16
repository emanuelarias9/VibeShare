import React from "react";
import { useForm } from "../../hooks/useForm";
import { apiClientService } from "../../helpers/ApiClientService";
import { Global } from "../../helpers/Global";

export const SignUp = () => {
  const { form, changed } = useForm({});
  const saveUser = async (e) => {
    e.preventDefault(); //prevenir actualizacion de pantalla

    let newUser = form;
    const urlPeticion = Global.urlApiBase + `/user/signup`;
    const { apiResponse } = await apiClientService(
      urlPeticion,
      "POST",
      newUser
    );
    console.log(apiResponse);
  };
  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Registro</h1>
      </header>
      <div className="content__posts">
        <form className="register-form" onSubmit={saveUser}>
          <div className="form-group">
            <label htmlFor="username">Nombre de usuario</label>
            <input type="text" name="username" onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="nick">Nick</label>
            <input type="text" name="nick" onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="Bio">Bio</label>
            <input type="text" name="bio" onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo</label>
            <input type="email" name="email" onChange={changed} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" onChange={changed} />
          </div>
          <input type="submit" value="Registrate" className="btn btn-success" />
        </form>
      </div>
    </>
  );
};
