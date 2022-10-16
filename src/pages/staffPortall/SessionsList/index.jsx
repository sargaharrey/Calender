import Navigation from "@/components/Navigation";
import ArabicDate from "@/utils/ArabicDate";
import React, { useEffect, useState } from "react";
import Search from "../../../assist/icons/search.svg";
import Angle from "../../../assist/icons/angle_down_black.svg";
import AngleW from "../../../assist/icons/angle_down_white.svg";
import Filter from "../../../assist/icons/filter-white.svg";
import Sort from "../../../assist/icons/sort.svg";
import Modal from "@/utils/modal/Modal";
import Cancelbtn from "../../../assist/icons/cancel-grey.svg";
import AngleUp from "../../../assist/icons/ArrowUp-black.svg";
import { useAuth } from "@/context";
import endpoints from "@/constants/endpoints";
import { httpGetRequest } from "@/networking";
import PrivateRoute from "@/components/PrivateRoute";

const SessionsList = ()  => {
  const [modal, setModal] = useState(false);
  const [expand, setExpand] = useState(null);

  const { authToken } = useAuth();

  const handleExpand = (index) => {
    setExpand(index);
  };

  useEffect(() => {
    httpGetRequest(endpoints.sessionsList, {}, authToken).then((response) => {
      if (response.status) {
        console.log(response);
      }
    });
  }, []);

  return (
    <>
      <Navigation />
      <div className="addSession-container">
        <ArabicDate />
        <div>
          <h1 className="addSession-title">جدول الجلسات</h1>
        </div>

        <div className="exchange-title">
          <div className="customers-field">
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
          <span
            className="request-name"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            عرض الأحدث
            <img
              style={{ width: "15px", height: "15px", margin: "0 10px" }}
              src={Sort}
              alt="icon"
            />
          </span>
        </div>

        <div>
          <table className="appointments-table">
            <thead>
              <tr>
                <td>اسناد</td>
                <td> المزيد </td>
                <td>
                  <img src={Filter} alt="icon" /> الحالة{" "}
                </td>
                <td> المطلوب </td>

                <td>
                  <img src={AngleW} alt="icon" />
                  المحامي
                </td>
                <td>
                  <img src={AngleW} alt="icon" />
                  اطراف القضية
                </td>
                <td>اليوم/ التاريخ/ الوقت</td>
                <td>رقم القضية</td>
              </tr>
            </thead>
            <tbody>
              <tr style={{ fontSize: "12px" }}>
                <td>
                  <button onClick={setModal}>اسناد</button>
                </td>
                <td>
                  <img
                    src={Angle}
                    alt="icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleExpand(1)}
                  />
                </td>
                <td>انتهت</td>
                <td> لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف</td>
                <td>ماجد بن طالب</td>
                <td>موكلنا / الخصم</td>
                <td>الأحد , 12-07-1443, 10:00 صباحاً</td>

                <td>1</td>
              </tr>
              {expand === 1 && (
                <tr>
                  <td colSpan={8}>
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
                      </div>
                      <div
                        className="right"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          وقائع الجلسة
                        </button>
                        لتكون كتيب بمثابة دليل او مرجع شكلي لهذه الاحرف
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          الدائرة القضائية
                        </button>
                        العامة
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          المحكمة
                        </button>
                        العامة
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          المدينة
                        </button>
                        جدة
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              <tr style={{ fontSize: "12px" }}>
                <td>
                  <button onClick={setModal}>اسناد</button>
                </td>
                <td>
                  <img
                    src={Angle}
                    alt="icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleExpand(2)}
                  />
                </td>
                <td>انتهت</td>
                <td> لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف</td>
                <td>ماجد بن طالب</td>
                <td>موكلنا / الخصم</td>
                <td>الأحد , 12-07-1443, 10:00 صباحاً</td>
                <td>2</td>
              </tr>
              {expand === 2 && (
                <tr>
                  <td colSpan={8}>
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
                      </div>
                      <div
                        className="right"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          وقائع الجلسة
                        </button>
                        لتكون كتيب بمثابة دليل او مرجع شكلي لهذه الاحرف
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          الدائرة القضائية
                        </button>
                        العامة
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          المحكمة
                        </button>
                        العامة
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          المدينة
                        </button>
                        جدة
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              <tr style={{ fontSize: "12px" }}>
                <td>
                  <button onClick={setModal}>اسناد</button>
                </td>
                <td>
                  <img
                    src={Angle}
                    alt="icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleExpand(3)}
                  />
                </td>
                <td>انتهت</td>
                <td> لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف</td>
                <td>ماجد بن طالب</td>
                <td>موكلنا / الخصم</td>
                <td>الأحد , 12-07-1443, 10:00 صباحاً</td>
                <td>3</td>
              </tr>
              {expand === 3 && (
                <tr>
                  <td colSpan={8}>
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
                      </div>
                      <div
                        className="right"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          وقائع الجلسة
                        </button>
                        لتكون كتيب بمثابة دليل او مرجع شكلي لهذه الاحرف
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          الدائرة القضائية
                        </button>
                        العامة
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          المحكمة
                        </button>
                        العامة
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          المدينة
                        </button>
                        جدة
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              <tr style={{ fontSize: "12px" }}>
                <td>
                  <button onClick={setModal}>اسناد</button>
                </td>
                <td>
                  <img
                    src={Angle}
                    alt="icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleExpand(4)}
                  />
                </td>
                <td>انتهت</td>
                <td> لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف</td>
                <td>ماجد بن طالب</td>
                <td>موكلنا / الخصم</td>
                <td>الأحد , 12-07-1443, 10:00 صباحاً</td>
                <td>4</td>
              </tr>
              {expand === 4 && (
                <tr>
                  <td colSpan={8}>
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
                      </div>
                      <div
                        className="right"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          وقائع الجلسة
                        </button>
                        لتكون كتيب بمثابة دليل او مرجع شكلي لهذه الاحرف
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          الدائرة القضائية
                        </button>
                        العامة
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          المحكمة
                        </button>
                        العامة
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          المدينة
                        </button>
                        جدة
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              <tr style={{ fontSize: "12px" }}>
                <td>
                  <button onClick={setModal}>اسناد</button>
                </td>
                <td>
                  <img
                    src={Angle}
                    alt="icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleExpand(5)}
                  />
                </td>
                <td>انتهت</td>
                <td> لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف</td>
                <td>ماجد بن طالب</td>
                <td>موكلنا / الخصم</td>
                <td>الأحد , 12-07-1443, 10:00 صباحاً</td>
                <td>5</td>
              </tr>
              {expand === 5 && (
                <tr>
                  <td colSpan={8}>
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
                      </div>
                      <div
                        className="right"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          وقائع الجلسة
                        </button>
                        لتكون كتيب بمثابة دليل او مرجع شكلي لهذه الاحرف
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          الدائرة القضائية
                        </button>
                        العامة
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          المحكمة
                        </button>
                        العامة
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          المدينة
                        </button>
                        جدة
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              <tr style={{ fontSize: "12px" }}>
                <td>
                  <button onClick={setModal}>اسناد</button>
                </td>
                <td>
                  <img
                    src={Angle}
                    alt="icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleExpand(6)}
                  />
                </td>
                <td>انتهت</td>
                <td> لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف</td>
                <td>ماجد بن طالب</td>
                <td>موكلنا / الخصم</td>
                <td>الأحد , 12-07-1443, 10:00 صباحاً</td>
                <td>6</td>
              </tr>
              {expand === 6 && (
                <tr>
                  <td colSpan={8}>
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
                      </div>
                      <div
                        className="right"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          وقائع الجلسة
                        </button>
                        لتكون كتيب بمثابة دليل او مرجع شكلي لهذه الاحرف
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          الدائرة القضائية
                        </button>
                        العامة
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          المحكمة
                        </button>
                        العامة
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          المدينة
                        </button>
                        جدة
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              <tr style={{ fontSize: "12px" }}>
                <td>
                  <button onClick={setModal}>اسناد</button>
                </td>
                <td>
                  <img
                    src={Angle}
                    alt="icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleExpand(7)}
                  />
                </td>
                <td>انتهت</td>
                <td> لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف</td>
                <td>ماجد بن طالب</td>
                <td>موكلنا / الخصم</td>
                <td>الأحد , 12-07-1443, 10:00 صباحاً</td>
                <td>7</td>
              </tr>
              {expand === 7 && (
                <tr>
                  <td colSpan={8}>
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
                      </div>
                      <div
                        className="right"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          وقائع الجلسة
                        </button>
                        لتكون كتيب بمثابة دليل او مرجع شكلي لهذه الاحرف
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          الدائرة القضائية
                        </button>
                        العامة
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          المحكمة
                        </button>
                        العامة
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          المدينة
                        </button>
                        جدة
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              <tr style={{ fontSize: "12px" }}>
                <td>
                  <button onClick={setModal}>اسناد</button>
                </td>
                <td>
                  <img
                    src={Angle}
                    alt="icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleExpand(8)}
                  />
                </td>
                <td>انتهت</td>
                <td> لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف</td>
                <td>ماجد بن طالب</td>
                <td>موكلنا / الخصم</td>
                <td>الأحد , 12-07-1443, 10:00 صباحاً</td>
                <td>8</td>
              </tr>
              {expand === 8 && (
                <tr>
                  <td colSpan={8}>
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
                      </div>
                      <div
                        className="right"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          وقائع الجلسة
                        </button>
                        لتكون كتيب بمثابة دليل او مرجع شكلي لهذه الاحرف
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          الدائرة القضائية
                        </button>
                        العامة
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          المحكمة
                        </button>
                        العامة
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          المدينة
                        </button>
                        جدة
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              <tr style={{ fontSize: "12px" }}>
                <td>
                  <button onClick={setModal}>اسناد</button>
                </td>
                <td>
                  <img
                    src={Angle}
                    alt="icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleExpand(9)}
                  />
                </td>
                <td>انتهت</td>
                <td> لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف</td>
                <td>ماجد بن طالب</td>
                <td>موكلنا / الخصم</td>
                <td>الأحد , 12-07-1443, 10:00 صباحاً</td>
                <td>9</td>
              </tr>
              {expand === 9 && (
                <tr>
                  <td colSpan={9}>
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
                      </div>
                      <div
                        className="right"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          وقائع الجلسة
                        </button>
                        لتكون كتيب بمثابة دليل او مرجع شكلي لهذه الاحرف
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          الدائرة القضائية
                        </button>
                        العامة
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          المحكمة
                        </button>
                        العامة
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          المدينة
                        </button>
                        جدة
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              <tr style={{ fontSize: "12px" }}>
                <td>
                  <button onClick={setModal}>اسناد</button>
                </td>
                <td>
                  <img
                    src={Angle}
                    alt="icon"
                    style={{ cursor: "pointer" }}
                    onClick={() => handleExpand(10)}
                  />
                </td>
                <td>انتهت</td>
                <td> لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف</td>
                <td>ماجد بن طالب</td>
                <td>موكلنا / الخصم</td>
                <td>الأحد , 12-07-1443, 10:00 صباحاً</td>
                <td>10</td>
              </tr>
              {expand === 10 && (
                <tr>
                  <td colSpan={8}>
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
                      </div>
                      <div
                        className="right"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          وقائع الجلسة
                        </button>
                        لتكون كتيب بمثابة دليل او مرجع شكلي لهذه الاحرف
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          الدائرة القضائية
                        </button>
                        العامة
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          المحكمة
                        </button>
                        العامة
                      </div>
                      <div
                        className="right"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <button style={{ width: "100px", borderRadius: "0" }}>
                          المدينة
                        </button>
                        جدة
                      </div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {modal && (
        <Modal>
          <div className="modal-content">
            <img src={Cancelbtn} onClick={() => setModal(false)} alt="" />
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


export default PrivateRoute(SessionsList)
