/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import { Col, Container, Row } from "react-grid-system";
import { Link, useNavigate } from "react-router-dom";
import Vector from "../../../assist/images/main_vector.png";
import { Input } from "./components/Input";
import { useAuth } from "@/context";
import useValidation from "@meksiabdou/usevalidation";
import { httpRequest } from "@/networking";
import endpoints from "@/constants/endpoints";
import Loading from "@/components/Loading";
import roles from "@/utils/roles";

export function Login(props) {
  const [loading, setLoading] = useState(false);
  const { setAuthUserData } = useAuth();

  const navigate = useNavigate();

  const inputs = [
    {
      name: "identity_number",
      type: "text",
      defaultValue: "",
      placeholder: "رقم الهوية/الإقامة",
      regex: /^([0-9]+)+$/g,
      required: true,
      messages: {
        required: "حقل رقم الهوية/الإقامة مطلوب",
        regex: "تحقق من رقم الهوية/الإقامة",
      },
    },
    {
      name: "password",
      type: "password",
      defaultValue: "",
      placeholder: "كلمة المرور",
      required: true,
      //regex: '',
      minLength: 6,
      maxLength: 20,
      messages: {
        required: "حقل كلمة المرور مطلوب",
        // regex: '',
        minLength: "يجب أن تكون كلمة المرور أكثر من 6 أحرف",
        maxLength: "يجب أن تكون كلمة المرور أقل من 20 أحرف",
      },
    },
  ];

  const { errors, handelOnSubmit, refForm, handelOnChange, data } =
    useValidation(inputs);

  const onSubmit = (status) => {
    console.log(status, errors);
    if (status) {
      const body = {
        identity_number: data["identity_number"],
        password: data["password"],
      };
      setLoading(true);
      httpRequest(endpoints.login, body).then((response) => {
        if (response.status) {
          if (response.access) {
            setAuthUserData({ token: response.access });
            if (roles.employees.includes(response.role.toLowerCase())) {
              navigate("/staff");
            } else {
              navigate("/");
            }
          }
        }
        setLoading(false);
      });
    }
  };

  return (
    <Container className="login_container">
      <img src={Vector} alt="" />
      <Row>
        <Col xxl={6} xl={6} lg={6} md={12} xs={12} />
        <Col xxl={6} xl={6} lg={6} md={12} xs={12}>
          <form
            ref={refForm}
            onSubmit={(e) => handelOnSubmit(e, onSubmit)}
            method="post"
          >
            <div className="login_compmonent">
              <h1>أهلا بعودتك حضرة المحامي أ. احمد المحمد,</h1>
              <a>يرجا ادخال معلومات الدخول</a>
              <div className="login_inputs">
                {inputs.map((input) => {
                  return (
                    <Input
                      key={input.name}
                      title={input.placeholder}
                      name={input.name}
                      type={input.type}
                      req={`${input.required}`}
                      onChange={handelOnChange}
                    />
                  );
                })}
              </div>
              <div className="remember_me">
                <a>تذكرني</a>
                <div className="circle">
                  <div className="circle_active"></div>
                </div>
              </div>
              <span>
                ليس لديك حساب؟ <Link to="/register">سجل الان</Link>
              </span>
              <button type="submit" disabled={loading} className="button wd300">
                {loading ? <Loading /> : null}
                تسجيل الدخول
              </button>
              <p>
                <Link to="/reset-password">هل نسيت كلمة المرور؟</Link>
              </p>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
}
