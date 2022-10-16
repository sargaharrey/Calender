import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Users from '../../src/assist/icons/users.svg'
import UsersAct from '../../src/assist/icons/users-active.svg'
import PenList from '../../src/assist/icons/check-list-and-pencil.svg'
import PenListAct from '../../src/assist/icons/check-list-and-pencil-active.svg'
import List from '../../src/assist/icons/check-list.svg'
import ListAct from '../../src/assist/icons/check-list-active.svg'
import Schedule from '../../src/assist/icons/schedule.svg'
import ScheduleAct from '../../src/assist/icons/schedule-active.svg'
import Case from '../../src/assist/icons/briefcase-grey.svg'
import CaseAct from '../../src/assist/icons/briefcase-active.svg'
import AddCase from '../../src/assist/icons/insert-file-grey.svg'
import AddCaseAct from '../../src/assist/icons/insert-file-grey-active.svg'
import Home from '../../src/assist/icons/home.svg'
import HomeAct from '../../src/assist/icons/home-active.svg'
import Archive from '../../src/assist/icons/archive.svg'
import ArchiveAct from '../../src/assist/icons/archive-act.svg'
import Ask from '../../src/assist/icons/ask.svg'
import AskAct from '../../src/assist/icons/ask-act.svg'
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

export default function Navigation() {
  
  let route = useLocation().pathname;


  return (
    <div className="side-nav">
      <Link className="side-icon" to="/staff">
        <Tippy content='dashboard'>
          <img src={route === "/staff" ? HomeAct : Home} alt="" />
        </Tippy>
      </Link>
      <Link className="side-icon" to="/staff/mycases">
        <Tippy content='my cases'>
        <img src={route === "/staff/mycases" ? CaseAct : Case} alt="" />
        </Tippy>
      </Link>
      <Link className="side-icon" to="/staff/sessionslist">
        <Tippy content='sessions list'>
        <img src={route === "/staff/sessionslist" ? ListAct : List} alt="" />
        </Tippy>
      </Link>
      <Link className="side-icon" to="/staff/customers">
        <Tippy content='customers'>
        <img src={route === "/staff/customers" ? UsersAct : Users} alt="" />
        </Tippy>
      </Link>
      <Link className="side-icon" to="/staff/reviews">
        <Tippy content='reviews'>
        <img src={Users} alt="" />
        </Tippy>
      </Link>
      <Link className="side-icon" to="/staff/appointments">
        <Tippy content='appointments'>
        <img
          src={route === "/staff/appointments" ? ScheduleAct : Schedule}
          alt=""
        />
        </Tippy>
      </Link>

      <Link className="side-icon" to="/staff/sessionsfrom">
        <Tippy content='sessions from'>
        <img
          src={route === "/staff/sessionsfrom" ? PenListAct : PenList}
          alt=""
        />
        </Tippy>
      </Link>
      <Link className="side-icon" to="/staff/sessions">
        <Tippy content='sessions'>
        <img src={Users} alt="" />
        </Tippy>
      </Link>
      <Link className="side-icon" to="/staff/tasks">
        <Tippy content='tasks'>
        <img src={Users} alt="" />
        </Tippy>
      </Link>
      <Link className="side-icon" to="/staff/holyreq">
        <Tippy content='holy request'>
        <img src={route === "/staff/holyreq" ? AddCaseAct : AddCase} alt="" />
        </Tippy>
      </Link>
      <Link className="side-icon" to="/staff/exchangerequest">
        <Tippy content='exchange request'>
        <img src={Users} alt="" />
        </Tippy>
      </Link>
      <Link className="side-icon" to="/staff/query">
        <Tippy content='الاستعلامات'>
        <img src={route === '/staff/query' ? AskAct : Ask} alt="" />
        </Tippy>
      </Link>
      <Link className="side-icon" to="/staff/archive">
        <Tippy content='الارشيف'>
        <img src={route === '/staff/archive' ? ArchiveAct : Archive} alt="" />
        </Tippy>
      </Link>
    </div>
  );
}
