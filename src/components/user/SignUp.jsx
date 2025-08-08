import React from "react";

export const SignUp = () => {
  return (
    <>
      <header className="content__header content__header--public">
        <h1 className="content__title">Registro</h1>
      </header>
      <div className="content__posts">
        <form className="register-form">
          <div className="form-group">
            <label htmlFor="username">Nombre de usuario</label>
            <input type="text" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="nick">Nick</label>
            <input type="text" name="nick" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo</label>
            <input type="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo</label>
            <input type="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" />
          </div>
          <input type="submit" value="Registrate" className="btn btn-success" />
        </form>
      </div>
    </>
  );
};
