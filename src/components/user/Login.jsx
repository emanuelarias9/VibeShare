import React from "react";

export const Login = () => {
  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Iniciar sesión</h1>
      </header>
      <div className="content__posts">
        <form className="form-login">
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" />
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
