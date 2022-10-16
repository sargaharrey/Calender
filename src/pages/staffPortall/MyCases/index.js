import Navigation from "@/components/Navigation";
import ArabicDate from "@/utils/ArabicDate";
import Modal from "@/utils/modal/Modal";
import React, { useState } from "react";
import Cancelbtn from "../../../assist/icons/cancel-grey.svg";
import Right from "../../../assist/icons/right.svg";
import Cancel from "../../../assist/icons/cancel.svg";
import Search from "../../../assist/icons/search.svg";
import Sort from "../../../assist/icons/sort.svg";
import Angle from "../../../assist/icons/angle_down_black.svg";
import AngleW from "../../../assist/icons/angle_down_white.svg";
import AngleUp from "../../../assist/icons/ArrowUp-black.svg";
import { Link } from "react-router-dom";

export default function MyCases() {
  const [modal, setModal] = useState(false);
  const [active, setActive] = useState(1);
  const [input, setInput] = useState(false);
  const [inputCase, setInputCase] = useState(false);
  const [edit, setEdit] = useState(false);
  const [expand, setExpand] = useState(null);
  const [lawyer, setLawyer] = useState(false);
  const authnticated = true;



  const handleExpand = (index) => {
    setExpand(index)
  }

  const handleActive = (index) => {
    setActive(index);
  };

  return (
    <>
      <Navigation />
      <div className="case-container">
        <ArabicDate />
        <div>
          <div className="welcomer">مرحباً, اهلاً بعودتك أ. ماجد بن طالب </div>
        </div>
        <div className="app-tabs">
          <div className="right-apponitments">
            <div className="navbar_button">
              <span
                onClick={() => handleActive(1)}
                style={{ color: active === 1 ? "#AE965A" : "#39281F" }}
              >
                قضاياي
              </span>
              <div
                className={
                  active === 1
                    ? "navbar_line navbar_line_active"
                    : "navbar_line"
                }
              ></div>
            </div>

            <div className="navbar_button">
              <span
                onClick={() => handleActive(2)}
                style={{ color: active === 2 ? "#AE965A" : "#39281F" }}
              >
                الجلسات والقضايا المسندة الي
              </span>
              <div
                className={
                  active === 2
                    ? "navbar_line navbar_line_active"
                    : "navbar_line"
                }
              ></div>
            </div>
            {authnticated && <div className="navbar_button">
              <span
                onClick={() => handleActive(3)}
                style={{ color: active === 3 ? "#AE965A" : "#39281F" }}
              >
                جميع قضايا المكتب
              </span>
              <div
                className={
                  active === 3
                    ? "navbar_line navbar_line_active"
                    : "navbar_line"
                }
              ></div>
            </div>}
          </div>
        </div>
        {active === 1 && (
          <div
            className="cases-bar"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              className="left-appointments my-7"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Link
                to="/staff/addcase"
                className="requestExchangeBtn"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span className="add-icon">+</span> اضافة قضية جديد
              </Link>
              <div className="customers-field ml-7">
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                />
                <img
                  src={Search}
                  alt="search"
                  className="session-search-icon"
                  style={{ position: "absolute", top: "50%", left: "10%" }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row-reverse",
              }}
            >
              <div
                className="img"
                style={{
                  width: "35px",
                  height: "30px",
                  borderRadius: "30px",
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "10px",
                }}
              >
                <img
                  src={Sort}
                  alt="sort"
                  style={{ width: "15px", height: "15px" }}
                />
              </div>
              عرض النتائج 1 - 22 من 500
            </div>
          </div>
        )}
        {active === 2 && (
          <div
            className="cases-bar"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              className="left-appointments my-7"
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div className="customers-field ml-7">
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                />
                <img
                  src={Search}
                  alt="search"
                  className="session-search-icon"
                  style={{ position: "absolute", top: "50%", left: "10%" }}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row-reverse",
              }}
            >
              <div
                className="img"
                style={{
                  width: "35px",
                  height: "30px",
                  borderRadius: "30px",
                  background: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "10px",
                }}
              >
                <img
                  src={Sort}
                  alt="sort"
                  style={{ width: "15px", height: "15px" }}
                />
              </div>
              عرض النتائج 1 - 22 من 500
            </div>
          </div>
        )}

        {active === 1 && (
          <div>
            <table className="appointments-table">
              <thead>
                <tr>
                  <td> اسناد </td>
                  <td> المزيد </td>
                  <td> الحالة </td>

                  <td>
                    <img src={AngleW} alt="icon" />
                    المحكمة
                  </td>
                  <td>
                    <img src={AngleW} alt="icon" />
                    الفرع
                  </td>
                  <td>الخصم</td>
                  <td>
                    <img src={AngleW} alt="icon" />
                    صفته
                  </td>
                  <td>موكلنا</td>
                  <td>رقم القضية</td>
                  <td>الرقم</td>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <button onClick={() => setLawyer(true)}>اسناد</button>
                  </td>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(1)}
                    />
                  </td>
                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>1439/252/ت</td>
                  <td>1</td>
                </tr>
                {expand === 1 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <button onClick={() => setLawyer(true)}>اسناد</button>
                  </td>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(2)}
                    />
                  </td>

                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>1439/252/ت</td>
                  <td>2</td>
                </tr>
                {expand === 2 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <button onClick={() => setLawyer(true)}>اسناد</button>
                  </td>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(3)}
                    />
                  </td>

                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>1439/252/ت</td>
                  <td>3</td>
                </tr>
                {expand === 3 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <button onClick={() => setLawyer(true)}>اسناد</button>
                  </td>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(4)}
                    />
                  </td>

                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>1439/252/ت</td>
                  <td>4</td>
                </tr>
                {expand === 4 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <button onClick={() => setLawyer(true)}>اسناد</button>
                  </td>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(5)}
                    />
                  </td>

                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>1439/252/ت</td>
                  <td>5</td>
                </tr>
                {expand === 5 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <button onClick={() => setLawyer(true)}>اسناد</button>
                  </td>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(6)}
                    />
                  </td>

                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>1439/252/ت</td>
                  <td>6</td>
                </tr>
                {expand === 6 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <button onClick={() => setLawyer(true)}>اسناد</button>
                  </td>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(7)}
                    />
                  </td>

                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>1439/252/ت</td>
                  <td>7</td>
                </tr>
                {expand === 7 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <button onClick={() => setLawyer(true)}>اسناد</button>
                  </td>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointeer" }}
                      onClick={() => handleExpand(8)}
                    />
                  </td>

                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>1439/252/ت</td>
                  <td>8</td>
                </tr>
                {expand === 8 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <button onClick={() => setLawyer(true)}>اسناد</button>
                  </td>
                  <td>
                    <img
                      src={Angle}
                      style={{ cursor: "pointer" }}
                      alt="icon"
                      onClick={() => handleExpand(9)}
                    />
                  </td>

                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>1439/252/ت</td>
                  <td>9</td>
                </tr>
                {expand === 9 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <button onClick={() => setLawyer(true)}>اسناد</button>
                  </td>
                  <td>
                    <img
                      src={Angle}
                      style={{ cursor: "pointer" }}
                      alt="icon"
                      onClick={() => handleExpand(10)}
                    />
                  </td>

                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>1439/252/ت</td>
                  <td>10</td>
                </tr>
                {expand === 10 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
        {active === 2 && (
          <div>
            <table className="appointments-table">
              <thead>
                <tr>
                  <td> المزيد </td>
                  <td> حالة الاسناد </td>
                  <td> الحالة </td>

                  <td>
                    <img src={AngleW} alt="icon" />
                    المحكمة
                  </td>
                  <td>
                    <img src={AngleW} alt="icon" />
                    الفرع
                  </td>
                  <td>الخصم</td>
                  <td>
                    <img src={AngleW} alt="icon" />
                    صفته
                  </td>
                  <td>موكلنا</td>
                  <td>رقم القضية</td>
                  <td>الرقم</td>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(1)}
                    />
                  </td>

                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>1439/252/ت</td>
                  <td>1</td>
                </tr>
                {expand === 1 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(2)}
                    />
                  </td>

                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>1439/252/ت</td>
                  <td>2</td>
                </tr>
                {expand === 2 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(3)}
                    />
                  </td>

                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>1439/252/ت</td>
                  <td>3</td>
                </tr>
                {expand === 3 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(4)}
                    />
                  </td>

                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>1439/252/ت</td>
                  <td>4</td>
                </tr>
                {expand === 4 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(5)}
                    />
                  </td>

                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>1439/252/ت</td>
                  <td>5</td>
                </tr>
                {expand === 5 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(6)}
                    />
                  </td>

                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>1439/252/ت</td>
                  <td>6</td>
                </tr>
                {expand === 6 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(7)}
                    />
                  </td>

                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>1439/252/ت</td>
                  <td>7</td>
                </tr>
                {expand === 7 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(8)}
                    />
                  </td>

                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>1439/252/ت</td>
                  <td>8</td>
                </tr>
                {expand === 8 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(9)}
                    />
                  </td>

                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>1439/252/ت</td>
                  <td>9</td>
                </tr>
                {expand === 9 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(10)}
                    />
                  </td>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>1439/252/ت</td>
                  <td>10</td>
                </tr>
                {expand === 10 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
        {active === 3 && (
          <div>
            <table className="appointments-table">
              <thead>
                <tr>
                  <td> المزيد </td>
                  <td> حالة الاسناد </td>
                  <td> الحالة </td>

                  <td>
                    <img src={AngleW} alt="icon" />
                    المحكمة
                  </td>
                  <td>
                    <img src={AngleW} alt="icon" />
                    الفرع
                  </td>
                  <td>الخصم</td>
                  <td>
                    <img src={AngleW} alt="icon" />
                    صفته
                  </td>
                  <td>موكلنا</td>
                  <td> اسم المحامي</td>
                  <td>رقم القضية</td>
                  <td>الرقم</td>
                </tr>
              </thead>
              <tbody>
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(1)}
                    />
                  </td>

                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>ا. مجد</td>
                  <td>1439/252/ت</td>
                  <td>1</td>
                </tr>
                {expand === 1 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(2)}
                    />
                  </td>

                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>ا. مجد</td>
                  <td>1439/252/ت</td>
                  <td>2</td>
                </tr>
                {expand === 2 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(3)}
                    />
                  </td>

                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>ا. مجد</td>
                  <td>1439/252/ت</td>
                  <td>3</td>
                </tr>
                {expand === 3 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(4)}
                    />
                  </td>

                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>ا. مجد</td>
                  <td>1439/252/ت</td>
                  <td>4</td>
                </tr>
                {expand === 4 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(5)}
                    />
                  </td>

                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>ا. مجد</td>
                  <td>1439/252/ت</td>
                  <td>5</td>
                </tr>
                {expand === 5 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(6)}
                    />
                  </td>

                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>ا. مجد</td>
                  <td>1439/252/ت</td>
                  <td>6</td>
                </tr>
                {expand === 6 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(7)}
                    />
                  </td>

                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>ا. مجد</td>
                  <td>1439/252/ت</td>
                  <td>7</td>
                </tr>
                {expand === 7 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(8)}
                    />
                  </td>

                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>ا. مجد</td>
                  <td>1439/252/ت</td>
                  <td>8</td>
                </tr>
                {expand === 8 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(9)}
                    />
                  </td>

                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>ا. مجد</td>
                  <td>1439/252/ت</td>
                  <td>9</td>
                </tr>
                {expand === 9 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                <tr style={{ fontSize: "12px" }}>
                  <td>
                    <img
                      src={Angle}
                      alt="icon"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleExpand(10)}
                    />
                  </td>
                  <td>
                    <img src={Right} alt="right" />
                    <img src={Cancel} alt="cancel" />
                  </td>
                  <td>مفتوح</td>
                  <td> لجان المخالفات والمنازعات التمويلية</td>
                  <td>الرياض</td>
                  <td>أ. نايف سالم</td>
                  <td>مدعي عليه</td>
                  <td>مصرف الانماء</td>
                  <td>ا. مجد</td>
                  <td>1439/252/ت</td>
                  <td>10</td>
                </tr>
                {expand === 10 && (
                  <tr>
                    <td colSpan={10}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div className="left">
                          <img
                            src={AngleUp}
                            alt="icon"
                            style={{ cursor: "pointer" }}
                            onClick={() => setExpand(null)}
                          />
                          <button className="mr-3">الجلسات</button>
                          <button className="mr-3">المستندات</button>
                          <button className="mr-3">التفاصيل</button>
                        </div>
                        <div
                          className="right"
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <button style={{ width: "100px", borderRadius: "0" }}>
                            الدائرة القضائية
                          </button>
                          445566
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {modal && (
        <Modal>
          <div className="modal-content">
            <img src={Cancelbtn} onClick={() => setModal(false)} alt="" />
            <div className="inputs">
              <div className="input">
                <input type="text" placeholder="الفرع" />
              </div>
              <div className="input">
                <input type="text" placeholder="الجهة" />
              </div>
            </div>
            <div className="inputs">
              <div className="input">
                <input type="text" placeholder="سبب انشاء المهمة " />
              </div>
              <div className="input">
                <input type="text" placeholder="المنطقة" />
              </div>
            </div>
            <div className="inputs">
              <div className="input">
                <input type="text" placeholder="تاريخ انجاز المهمة المرغوب" />
              </div>
              <div className="input">
                <input type="text" placeholder="وقت استلام المهمة" />
              </div>
            </div>
            <div className="inputs">
              <label>
                <input type="checkbox" onChange={(e) => setInput(!input)} />
                اضافة الى عميل
              </label>
              <label>
                <input
                  type="checkbox"
                  onChange={(e) => setInputCase(!inputCase)}
                />
                <span>اضافة الى قضية</span>
              </label>
            </div>
            <div className="inputs">
              {input && (
                <div className="input">
                  <input type="text" placeholder="اختر عميل" />
                </div>
              )}
              {inputCase && (
                <div className="input">
                  <input type="text" placeholder="القضية" />
                </div>
              )}
            </div>
            <button>ارسال</button>
          </div>
        </Modal>
      )}
      {edit && (
        <Modal>
          <div className="modal-content">
            <img src={Cancelbtn} onClick={() => setEdit(false)} alt="" />
            <div className="input" style={{ margin: "20px auto" }}>
              <input type="text" placeholder="المحامي" />
            </div>

            <div className="input" style={{ margin: "20px auto" }}>
              <input type="text" placeholder="تحديد الوقت لقبول المحامي" />
            </div>
            <label
              style={{
                flexDirection: "row",
                marginLeft: "65%",
                color: "#ae965a",
                width: "100%",
              }}
            >
              حق اسناد الغير
              <input type="checkbox" />
            </label>

            <button>حفظ</button>
          </div>
        </Modal>
      )}
      {lawyer && (
        <Modal>
          <div className="modal-content">
            <img src={Cancelbtn} onClick={() => setLawyer(false)} alt="" />
            <div className="input" style={{ margin: "20px auto" }}>
              <input type="text" placeholder="المحامي" />
            </div>

            <div className="input" style={{ margin: "20px auto" }}>
              <input type="text" placeholder="تحديد الوقت لقبول المحامي" />
            </div>
            <label
              style={{
                flexDirection: "row",
                marginLeft: "65%",
                color: "#ae965a",
                width: "100%",
              }}
            >
              حق اسناد الغير
              <input type="checkbox" />
            </label>

            <button>حفظ</button>
          </div>
        </Modal>
      )}
    </>
  );
}
