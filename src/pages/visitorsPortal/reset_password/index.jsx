/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Col, Container, Row } from "react-grid-system";
import { Link } from "react-router-dom";
import Vector from "../../../assist/images/main_vector.png";
import { Input } from "./components/Input";

export function ResetPassword(props) {

  const onSubmitLogin = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <Container className="login_container">
      <img src={Vector} alt="" />
      <Row>
        <Col xxl={6} xl={6} lg={6} md={12} xs={12} />
        <Col xxl={6} xl={6} lg={6} md={12} xs={12}>
          <form onSubmit={onSubmitLogin} method="post">
            <Row>
              <Col xxl={6} xl={6} lg={6} md={12} xs={12} />
              <Col xxl={6} xl={6} lg={6} md={12} xs={12}>
                <div className="login_compmonent">
                  <h1>هل نسيت كلمة المرور؟</h1>
                  <a>ادخل رقم الهاتف المسجل</a>
                  <div className="login_inputs">
                    <Input title="رقم الهاتف" req={"true"} />
                  </div>
                  <button className="button wd300">التالي</button>
                  <span>
                    هل تذكر كلمة المرور؟{" "}
                    <Link to={"/login"}>تسجيل الدخول</Link>
                  </span>
                </div>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
}


