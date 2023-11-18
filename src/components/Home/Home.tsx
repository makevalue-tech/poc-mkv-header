import { AccountBalance, Adjust, CurrencyExchange, DisplaySettings, Escalator, Leaderboard, Pix, RequestQuote } from "@mui/icons-material";
import Header from "../Header/Header";
import "./Home.css";
import { NavLink } from "react-router-dom";
import logo from "../../../public/pague-menos-logo-0.png";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="flex justify-between items-center text-center mx-10 mt-4">
        <h1 className="text-xl text-gray-600 font-bold ">
          Sistema de Tesouraria, Banco e Planejamento
        </h1>
        <img src={logo} alt="logo pague menos" className="w-72" />
      </div>
      <div className="appBox flex justify-center">
        <div className="appContainer flex flex-col gap-2 justify-center">
          <div className="flex justify-center">
            <NavLink
              to={"/poc-mkv-header/operations"}
              className="app operations bg-green-500 hover:bg-green-400"
            >
              <CurrencyExchange />
              <span>Operações Financeiras</span>
            </NavLink>
          </div>

          <div className="flex gap-2 justify-start">
            <NavLink
              to={"#"}
              className="app operations bg-gray-200 cursor-not-allowed"
            >
              <Adjust />
              <span>Conciliação de Recebíveis</span>
            </NavLink>
            <NavLink
              to={"#"}
              className="app operations bg-gray-200 cursor-not-allowed"
            >
              <AccountBalance />
              <span>EDI Financeiro</span>
            </NavLink>
            <NavLink
              to={"#"}
              className="app operations bg-gray-200 cursor-not-allowed"
            >
              <Leaderboard />
              <span>Gestão Orçamentária</span>
            </NavLink>
          </div>
          <div className="flex gap-2 justify-center">
            <NavLink
              to={"#"}
              className="app operations bg-gray-200 cursor-not-allowed"
            >
              <Escalator />
              <span>Extrato e Conciliação</span>
            </NavLink>
            <NavLink
              to={"#"}
              className="app operations bg-gray-200 cursor-not-allowed"
            >
              <RequestQuote />
              <span>Fluxo de Caixa</span>
            </NavLink>
            <NavLink
              to={"#"}
              className="app operations bg-gray-200 cursor-not-allowed"
            >
              <AccountBalance />
              <span>Recursos Bancários</span>
            </NavLink>
          </div>
          <div className="flex gap-2 justify-end">
            <NavLink
              to={"#"}
              className="app operations bg-gray-200 cursor-not-allowed"
            >
              <DisplaySettings />
              <span>Parâmetros Gerais</span>
            </NavLink>
            <NavLink
              to={"#"}
              className="app operations bg-gray-200 cursor-not-allowed"
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
