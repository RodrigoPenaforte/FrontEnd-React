import React from 'react'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <button type="button" class="btn btn-outlineprimary ms-auto" data-toggle="modal" data-target="#loginModal">
        <span className="fa fa-sign-in me-1"></span>Login</button>


      <div class="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="TituloModalLongoExemplo" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="TituloModalLongoExemplo">Login</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">

              <form>
                <div class="form-group">
                  <label htmlFor="exampleInputEmail1">Nome</label>
                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email" />
                  <small id="textHelp" class="form-text text-muted">ATENÇÃO, SEU NOME E CPF ESTÁ SEGURO CONOSCO.</small>
                </div>
                <div class="form-group">
                  <label htmlFor="exampleInputPassword1">CPF</label>
                  <input type="password" class="form-control" id="exampleInputPassword1" placeholder="CPF" />
                </div>
                <div class="form-group form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                  <label class="form-check-label" htmlFor="exampleCheck1">Manter sempre logado</label>
                </div>
                <Link className="btn btn-outline-primary w-100" to="EscolhaVoo">Login</Link>
              </form>
              
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
