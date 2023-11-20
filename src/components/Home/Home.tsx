import {
  AccountBalance,
  Adjust,
  CurrencyExchange,
  DisplaySettings,
  Escalator,
  Leaderboard,
  Pix,
  RequestQuote,
  Wallet,
} from "@mui/icons-material";
import Header from "../Header/Header";
import "./Home.css";
import { NavLink } from "react-router-dom";
import logo from "../../../public/pague-menos-logo-0.png";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="flex  justify-between items-center text-center mx-10 mt-4 "></div>
      <div className="appBox flex  justify-center">
        <div className="appContainer flex flex-col gap-2 justify-center ">
          <div className="box flex justify-around gap-x-40 items-center mt-4">
            <div>
              <h1 className="  text-xl text-gray-600 font-bold ">
                Sistema de Tesouraria, Banco e Planejamento
              </h1>
            </div>

            <NavLink
              to={"/poc-mkv-header/operations"}
              className="app operations"
            >
              <CurrencyExchange />
              <span>Operações Financeiras</span>
            </NavLink>
            <div>
              <img src={logo} alt="logo pague menos" className="w-72" />
            </div>
          </div>

          <div className="secondRow flex gap-2">
            <NavLink
              to={"#"}
              className="app operations cursor-not-allowed"
            >
              <Adjust />
              <span>Conciliação de Recebíveis</span>
            </NavLink>
            <NavLink
              to={"#"}
              className="app operations cursor-not-allowed"
            >
              <AccountBalance />
              <span>EDI Financeiro</span>
            </NavLink>
            <NavLink
              to={"#"}
              className="app operations cursor-not-allowed"
            >
              <Leaderboard />
              <span>Gestão Orçamentária</span>
            </NavLink>
          </div>
          <div className="thirdRow flex gap-2 ml-60">
            <NavLink
              to={"#"}
              className="app operations cursor-not-allowed"
            >
              <Escalator />
              <span>Extrato e Conciliação</span>
            </NavLink>
            <NavLink
              to={"#"}
              className="app operations cursor-not-allowed"
            >
              <RequestQuote />
              <span>Fluxo de Caixa</span>
            </NavLink>
            <NavLink
              to={"#"}
              className="app operations cursor-not-allowed"
            >
              <Wallet />
              <span>Recursos Bancários</span>
            </NavLink>
          </div>
          <div className="fourthRow flex gap-2 justify-center">
            <NavLink
              to={"#"}
              className="app operations cursor-not-allowed"
            >
              <DisplaySettings />
              <span>Parâmetros Gerais</span>
            </NavLink>
            <NavLink
              to={"#"}
              className="app operations cursor-not-allowed"
            >
              <Pix />
              <span>Emissão de Boletos via API</span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
