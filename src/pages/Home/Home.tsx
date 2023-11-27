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
import Header from "../../components/Header/Header";
import style from "./Home.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../../public/pague-menos-logo-0.png";


export default function Home() {
  return (
    <div>
      <Header />
      <div className={style.container}></div>
      <div className={style.appBox}>
        <div className={style.appContainer}>
          <div className={style.box}>
            <div>
              <h1 className="  text-xl text-gray-600 font-bold ">
                Sistema de Tesouraria, Banco e Planejamento
              </h1>
            </div>

            <NavLink
              to={"/poc-mkv-header/operations"}
              className={style.app}
            >
              <CurrencyExchange />
              <span>Operações Financeiras</span>
            </NavLink>
            <div>
              <img src={logo} alt="logo pague menos" className="w-72" />
            </div>
          </div>

          <div className={style.secondRow}>
            <NavLink
              to={"#"}
              className={style.app}
            >
              <Adjust />
              <span>Conciliação de Recebíveis</span>
            </NavLink>
            <NavLink
              to={"#"}
              className={style.app}
            >
              <AccountBalance />
              <span>EDI Financeiro</span>
            </NavLink>
            <NavLink
              to={"#"}
              className={style.app}
            >
              <Leaderboard />
              <span>Gestão Orçamentária</span>
            </NavLink>
          </div>
          <div className={style.thirdRow}>
            <NavLink
              to={"#"}
              className={style.app}
            >
              <Escalator />
              <span>Extrato e Conciliação</span>
            </NavLink>
            <NavLink
              to={"#"}
              className={style.app}
            >
              <RequestQuote />
              <span>Fluxo de Caixa</span>
            </NavLink>
            <NavLink
              to={"#"}
              className={style.app}
            > 
              <Wallet />
              <span>Recursos Bancários</span>
            </NavLink>
          </div>
          <div className={style.fourthRow}>
            <NavLink
              to={"#"}
              className={style.app}
            >
              <DisplaySettings />
              <span>Parâmetros Gerais</span>
            </NavLink>
            <NavLink
              to={"#"}
              className={style.app}
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
