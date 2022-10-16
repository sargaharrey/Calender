import Navigation from "@/components/Navigation"
import ArabicDate from "@/utils/ArabicDate"
import { useEffect, useState } from "react"
import { useAuth } from "@/context";
import endpoints from "@/constants/endpoints";
import { httpGetRequest, httpRequest } from "@/networking";
import Add from '../../../assist/icons/add.svg'
import Cancelbtn from "../../../assist/icons/cancel-grey.svg";
import Modal from "@/utils/modal/Modal";
// import { UserData } from './../../../types/index.d';

export function Addcase() {
  let [page, setPage] = useState(0)
  const [admin, setAdmin] = useState(false)
  const [clients, setClients] = useState([])
  const [courts, setCourts] = useState([])
  const [opponents, setOpponents] = useState([])
  const [branches, setBranches] = useState([])
  const [caseCategories, setCaseCategories] = useState([])
  const [caseTypes, setCaseTypes] = useState([])
  const [clientModal, setClientModal] = useState(false)
  const [agaModal, setAgaModal] = useState(false)
  const [courtModal, setCourtModal] = useState(false)
  const [branchModal, setBranchModal] = useState(false)
  const [type, setType] = useState('فرد')
  const [fullName, setFullName] = useState(null)
  const [identityNum, setIdentityNum] = useState(null)
  const [email, setEmail] = useState(null)
  const [city, setCity] = useState(null)
  const [phone, setPhone] = useState(null)
  const {authToken, userData} = useAuth();

  //add case-branch
  const [branch, setBranch] = useState(null)

  //add court
  const [courtName, setCourtName] = useState(null)

  //aga
  const [agaType, setAgaType] = useState(null)
  const [agaFullName, setAgaFullName] = useState(null)
  const [agaCity, setAgaCity] = useState(null)
  const [agaPhone, setAgaPhone] = useState(null)
  const [agaBirthDate, setAgaBirthDate] = useState(null)
  const [agaNationality, setAgaNationality] = useState(null)
  const [agaAddress, setAgaAddress] = useState(null)
  const [agaCommercialRegister, setAgaCommercialRegister] = useState(null)
  const [agaEmail, setAgaEmail] = useState(null)

  const [caseCity, setCaseCity] = useState(null)

  // console.log(courts, branches, caseCategories, opponents, clients, userData)

  const handleClient = () => {
    console.log(type, fullName, city, phone)
    const content = {
      type,
      name: fullName,
      email,
      identity_number: identityNum,
      phone_number: phone,
      city,
    };
    httpRequest(endpoints.addClient, content, authToken).then((response) => {
      console.log(response);
      response.status ? setClientModal(false) : console.log('error')
    });
  }

  const handleAga = () => {
    console.log(agaType, agaFullName, agaCity, agaPhone, agaBirthDate, agaNationality, agaAddress, agaCommercialRegister, agaEmail)
  }

  const handleCourt = () => {
    httpRequest(endpoints.addCourt, {name: courtName}, authToken).then((response) => {
      console.log(response);
      response.status && setCourtModal(false)
    });
  }

  const handleCaseType = () => {
    httpRequest(endpoints.caseType, { name: branch }, authToken).then(
      (response) => {
        console.log(response);
        response.status && setBranchModal(false);
      }
    );
  }

  const handleAddCase = (index) => {
    const content = {};
    httpRequest(endpoints, content, authToken).then((response) => {
      console.log(response);
    });
    setPage(index);
  };


  //check if admin
  useEffect(() => {
    userData.is_admin && setAdmin(true)
  }, [userData])


  //get lists options
  useEffect(() => {
    
      if(authToken){
        httpGetRequest(endpoints.clientList, {}, authToken).then((response) => {
          if (response.status) {
            delete response.status;
            let arr = [];
            for(let res in response) {
              arr.push(response[res]);
              setClients(arr);
            }
          }
        })
        httpGetRequest(endpoints.courts, {}, authToken).then((response) => {
          if (response.status) {
            delete response.status;
            let arr = [];
            for (let res in response) {
              arr.push(response[res]);
              setCourts(arr);
            }
          }
        });
        httpGetRequest(endpoints.opponents, {}, authToken).then((response) => {
          console.log(response)
          if (response.status) {
            delete response.status;
            let arr = [];
            for(let res in response){
              arr.push(response[res])
              setOpponents(arr)
            }
            }
          
        });
        httpGetRequest(endpoints.branches, {}, authToken).then((response) => {
          if (response.status) {
            delete response.status;
            let arr = [];
            for (let res in response) {
              arr.push(response[res]);
              setBranches(arr);
            }
          }
        });
        httpGetRequest(endpoints.caseCategories, {}, authToken).then((response) => {
          if (response.status) {
            delete response.status;
            let arr = [];
            for (let res in response) {
              arr.push(response[res]);
              setCaseCategories(arr);
            }
          }
        });
        httpGetRequest(endpoints.caseType, {}, authToken).then((response) => {
          if (response.status) {
            delete response.status;
            let arr = [];
            for (let res in response) {
              arr.push(response[res]);
              setCaseTypes(arr);
            }
          }
        });
      }
    
  }, [authToken]);



  useEffect(() => window.scrollTo(0, 200), [page])


  return (
    <>
      <Navigation />
      <div className="case-container">
        <ArabicDate />
        <div className="page-title">اضافة قضية جديدة</div>
        <div className="top-bar">
          <div className="ecplipse">
            <div className={`inner-eclipse${page >= 3 ? " active" : ""}`}>
              4<div className="tooltip">المرفقات</div>
            </div>
          </div>
          <div className="ecplipse">
            <div className={`inner-eclipse${page >= 2 ? " active" : ""}`}>
              3<div className="tooltip">فريق العمل</div>
            </div>
          </div>
          <div className="ecplipse">
            <div className={`inner-eclipse${page >= 1 ? " active" : ""}`}>
              2<div className="tooltip">مدير القضية</div>
            </div>
          </div>
          <div className="ecplipse">
            <div className={`inner-eclipse${page >= 0 ? " active" : ""}`}>
              1<div className="tooltip">البيانات الاساسية</div>
            </div>
          </div>
        </div>
        {page === 0 && (
          <>
            <div className="page-description" style={{ fontSize: 20 }}>
              البيانات الشخصية
            </div>
            <div className="form">
              <div className="flex-1">
                <label className="case-label">
                  <span>
                    <span className="red">*</span> المدينة
                  </span>
                  <label className="input">
                    <select
                      type="text"
                      placeholder="قم بادخال اسم القضية هنا"
                      onChange={(e) => setCaseCity(e.target.value)}
                    >
                      <option value="mekkah">مكة المكرمة</option>
                    </select>
                  </label>
                </label>
                <label className="case-label">
                  <span style={{ display: "flex" }}>
                    {admin && (
                      <img
                        style={{
                          width: "15px",
                          margin: "0 5px",
                          cursor: "pointer",
                        }}
                        src={Add}
                        alt="add"
                        onClick={() => setAgaModal(true)}
                      />
                    )}
                    <span className="red">*</span> الخصوم{" "}
                  </span>
                  <label className="input">
                    <select type="text" placeholder="قم بادخال اسم القضية هنا">
                      {opponents &&
                        opponents.map((opponent) => {
                          return (
                            <option key={opponent.id} value={opponent.id}>
                              {opponent.name}
                            </option>
                          );
                        })}
                    </select>
                  </label>
                </label>
                <label className="case-label">
                  <span>
                    <span className="red">*</span> نوع القضية{" "}
                  </span>
                  <label className="input">
                    <select type="text" placeholder="قم بادخال اسم القضية هنا">
                      {caseCategories &&
                        caseCategories.map((cat) => {
                          return (
                            <option key={cat.id} value={cat.id}>
                              {cat.name}
                            </option>
                          );
                        })}
                    </select>
                  </label>
                </label>
                <label className="case-label">
                  <span>
                    <span className="red">*</span> الرقم
                  </span>
                  <label className="input">
                    <input type="text" placeholder="قم بادخال اسم القضية هنا" />
                  </label>
                </label>
                <label className="case-label">
                  <span>
                    <span className="red">*</span> الدائرة القضائية
                  </span>
                  <label className="input">
                    <input type="text" placeholder="قم بادخال اسم القضية هنا" />
                  </label>
                </label>
                <label className="case-label">
                  <span style={{ display: "flex" }}>
                    {admin && (
                      <img
                        style={{
                          width: "15px",
                          margin: "0 5px",
                          cursor: "pointer",
                        }}
                        src={Add}
                        alt="add"
                        onClick={() => setBranchModal(true)}
                      />
                    )}
                    <span className="red">*</span> فئة القضية{" "}
                  </span>
                  <label className="input">
                    <select type="text" placeholder="قم بادخال اسم القضية هنا">
                      {caseTypes &&
                        caseTypes.map((cat) => {
                          return (
                            <option key={cat.id} value={cat.id}>
                              {cat.name}
                            </option>
                          );
                        })}
                    </select>
                  </label>
                </label>
              </div>
              <div className="flex-1">
                <label className="case-label">
                  <span>
                    <span className="red">*</span> اسم القضية
                  </span>
                  <label className="input">
                    <input type="text" placeholder="قم بادخال اسم القضية هنا" />
                  </label>
                </label>
                <label className="case-label">
                  <span style={{ display: "flex" }}>
                    {admin && (
                      <img
                        style={{
                          width: "15px",
                          margin: "0 5px",
                          cursor: "pointer",
                        }}
                        src={Add}
                        alt="add"
                        onClick={() => setClientModal(true)}
                      />
                    )}
                    <span className="red">*</span> العملاء
                  </span>
                  <label className="input" style={{ width: "100%" }}>
                    <select
                      type="text"
                      placeholder="قم بادخال اسم القضية هنا"
                      style={{ width: "100%" }}
                    >
                      {clients &&
                        clients.map((client) => {
                          return (
                            <option key={client.id} value={client.id}>
                              {client.name}
                            </option>
                          );
                        })}
                    </select>
                  </label>
                </label>
                <label className="case-label">
                  <span> تاريخ بداية القضية </span>
                  <label className="input">
                    <input type="text" placeholder="قم بادخال اسم القضية هنا" />
                  </label>
                </label>
                <label className="case-label">
                  <span>
                    <span className="red">*</span> الفرع{" "}
                  </span>
                  <label className="input">
                    <select type="text" placeholder="قم بادخال اسم القضية هنا">
                      {branches &&
                        branches.map((branch) => {
                          return (
                            <option key={branch.id} value={branch.id}>
                              {branch.name}
                            </option>
                          );
                        })}
                    </select>
                  </label>
                </label>
                <label className="case-label">
                  <span>الصفة القانونية</span>
                  <label className="input">
                    <select type="text" placeholder="قم بادخال اسم القضية هنا">
                      <option value="mekkah">مكة المكرمة</option>
                    </select>
                  </label>
                </label>
                <label className="case-label">
                  <span style={{ display: "flex" }}>
                    {admin && (
                      <img
                        style={{
                          width: "15px",
                          margin: "0 5px",
                          cursor: "pointer",
                        }}
                        src={Add}
                        alt="add"
                        onClick={() => setCourtModal(true)}
                      />
                    )}
                    المحكمة
                  </span>
                  <label className="input">
                    <select type="text" placeholder="قم بادخال اسم القضية هنا">
                      {courts &&
                        courts.map((court) => {
                          return (
                            <option key={court.id} value={court.id}>
                              {court.name}
                            </option>
                          );
                        })}
                    </select>
                  </label>
                </label>
              </div>
            </div>
            <label className="case-label">
              <span> الوصف</span>
              <label className="input" style={{ width: "100%" }}>
                <textarea type="text" placeholder="قم بادخال اسم القضية هنا" />
              </label>
            </label>
            <label className="case-label">
              <span> موضوع الدعوى</span>
              <label className="input" style={{ width: "100%" }}>
                <textarea type="text" placeholder="قم بادخال اسم القضية هنا" />
              </label>
            </label>
            <div className="button-list">
              <button className="button" onClick={() => handleAddCase(1)}>
                حفظ واستمرار
              </button>
            </div>
          </>
        )}
        {page === 1 && (
          <>
            <div className="form v2">
              <div className="flex-1">
                <br />
                <label>
                  عبدالله بن فيصل بن عبدالله السبيعي <input type="checkbox" />
                </label>
                <label>
                  عبدالله بن فيصل بن عبدالله السبيعي <input type="checkbox" />
                </label>
                <label>
                  عبدالله بن فيصل بن عبدالله السبيعي <input type="checkbox" />
                </label>
                <label>
                  عبدالله بن فيصل بن عبدالله السبيعي <input type="checkbox" />
                </label>
                <label>
                  عبدالله بن فيصل بن عبدالله السبيعي <input type="checkbox" />
                </label>
              </div>
              <div className="flex-1">
                <div className="page-description" style={{ fontSize: 20 }}>
                  اضافة مدير القضية
                </div>

                <label>
                  عبدالله بن فيصل بن عبدالله السبيعي <input type="checkbox" />
                </label>
                <label>
                  عبدالله بن فيصل بن عبدالله السبيعي <input type="checkbox" />
                </label>
                <label>
                  عبدالله بن فيصل بن عبدالله السبيعي <input type="checkbox" />
                </label>
                <label>
                  عبدالله بن فيصل بن عبدالله السبيعي <input type="checkbox" />
                </label>
                <label>
                  عبدالله بن فيصل بن عبدالله السبيعي <input type="checkbox" />
                </label>
              </div>
            </div>
            <div className="button-list">
              <button
                className="button back"
                style={{ color: "white" }}
                onClick={() => setPage(0)}
              >
                العودة
              </button>
              <button className="button" onClick={() => setPage(2)}>
                حفظ واستمرار
              </button>
            </div>
          </>
        )}
        {page === 2 && (
          <>
            <div className="form v2">
              <div className="flex-1">
                <br />
                <label>
                  عبدالله بن فيصل بن عبدالله السبيعي <input type="checkbox" />
                </label>
                <label>
                  عبدالله بن فيصل بن عبدالله السبيعي <input type="checkbox" />
                </label>
                <label>
                  عبدالله بن فيصل بن عبدالله السبيعي <input type="checkbox" />
                </label>
                <label>
                  عبدالله بن فيصل بن عبدالله السبيعي <input type="checkbox" />
                </label>
                <label>
                  عبدالله بن فيصل بن عبدالله السبيعي <input type="checkbox" />
                </label>
              </div>
              <div className="flex-1">
                <div className="page-description" style={{ fontSize: 20 }}>
                  اضافة فريق العمل على القضية{" "}
                </div>

                <label>
                  عبدالله بن فيصل بن عبدالله السبيعي <input type="checkbox" />
                </label>
                <label>
                  عبدالله بن فيصل بن عبدالله السبيعي <input type="checkbox" />
                </label>
                <label>
                  عبدالله بن فيصل بن عبدالله السبيعي <input type="checkbox" />
                </label>
                <label>
                  عبدالله بن فيصل بن عبدالله السبيعي <input type="checkbox" />
                </label>
                <label>
                  عبدالله بن فيصل بن عبدالله السبيعي <input type="checkbox" />
                </label>
              </div>
            </div>{" "}
            <div className="button-list">
              <button
                className="button back"
                style={{ color: "white" }}
                onClick={() => setPage(1)}
              >
                العودة
              </button>
              <button className="button" onClick={() => setPage(3)}>
                حفظ واستمرار
              </button>
            </div>
          </>
        )}
        {page === 3 && (
          <>
            <div className="page-description" style={{ fontSize: 20 }}>
              مرفقات القضية{" "}
            </div>
            <label className="case-label">
              <span>
                <span className="red">*</span> الفرع{" "}
              </span>
              <label className="input">
                <input type="text" placeholder="اسم المرفق" disabled />
              </label>
              <input type="file" />
            </label>
          </>
        )}
      </div>
      {clientModal && (
        <Modal>
          <div className="modal-content">
            <img src={Cancelbtn} onClick={() => setClientModal(false)} alt="" />
            <div
              className="input"
              style={{ margin: "20px auto", flexDirection: "row-reverse" }}
            >
              <select
                type="text"
                placeholder="قم بادخال اسم القضية هنا"
                onChange={(e) => setType(e.target.value)}
              >
                <option value="فرد">فرد</option>
                <option value="مؤسسة">مؤسسة</option>
                <option value="شركة">شركة</option>
              </select>
            </div>
            <div className="input" style={{ margin: "20px auto" }}>
              <input
                type="text"
                placeholder={type === "فرد" ? 'الاسم الرباعي' : type === 'مؤسسة' ? 'اسم المؤسسة' : 'اسم الشركة'}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="input" style={{ margin: "20px auto" }}>
              <input
                type="text"
                placeholder={type === "فرد" ? 'رقم الهوية' : type === 'مؤسسة' ? 'رقم السجل التجاري' : 'رقم السجل التجاري'}
                onChange={(e) => setIdentityNum(e.target.value)}
              />
            </div>
            <div className="input" style={{ margin: "20px auto" }}>
              <input
                type="text"
                placeholder="اختر المدينة"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="input" style={{ margin: "20px auto" }}>
              <input
                type="text"
                placeholder="البريد الالكتروني"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input" style={{ margin: "20px auto" }}>
              <input
                type="text"
                placeholder="رقم الهاتف"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button onClick={handleClient}>اضف العميل</button>
          </div>
        </Modal>
      )}
      {agaModal && (
        <Modal>
          <div className="modal-content">
            <img src={Cancelbtn} onClick={() => setAgaModal(false)} alt="" />
            <div className="inputs">
              <div className="input" style={{ margin: "20px 20px" }}>
                <input
                  type="text"
                  placeholder={agaType === 'فرد' ? 'الاسم الرباعي' : agaType === 'مؤسسة' ? 'اسم المؤسسة' : 'اسم الشركة'}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="input" style={{ margin: "20px 20px" }}>
                <select
                  type="text"
                  onChange={(e) => setAgaType(e.target.value)}
                  placeholder="قم بادخال اسم القضية هنا"
                >
                  <option value="فرد">فرد</option>
                  <option value="مؤسسة">مؤسسة</option>
                  <option value="شركة">شركة</option>
                </select>
              </div>
            </div>
            <div className="inputs">
              <div className="input" style={{ margin: "20px 20px" }}>
                <input
                  type="text"
                  placeholder="رقم الهاتف"
                  onChange={(e) => setAgaPhone(e.target.value)}
                />
              </div>

              <div className="input" style={{ margin: "20px 20px" }}>
                <input
                  type="text"
                  placeholder={agaType === 'فرد' ? 'تاريخ الميلاد' : 'تاريخ الانشاء'}
                  onChange={(e) => setAgaBirthDate(e.target.value)}
                />
              </div>
            </div>
            <div className="inputs">
              <div className="input" style={{ margin: "20px 20px" }}>
                <select
                  type="text"
                  placeholder="قم بادخال اسم القضية هنا"
                  onChange={(e) => setAgaNationality(e.target.value)}
                >
                  <option defaultValue>اختر الجنسية</option>
                  <option value="مصري">مصري</option>
                  <option value="سعودي">سعودي</option>
                </select>
              </div>

              <div className="input" style={{ margin: "20px 20px" }}>
                <select
                  type="text"
                  onChange={(e) => setAgaCity(e.target.value)}
                  placeholder="قم بادخال اسم القضية هنا"
                >
                  <option defaultValue>اختر المدينة</option>
                  <option value="جدة">جدة</option>
                  <option value="الرياض">الرياض</option>
                </select>
              </div>
            </div>
            <div className="inputs">
              <div className="input" style={{ margin: "20px 20px" }}>
                <input
                  type="text"
                  placeholder="البريد الالكتروني"
                  onChange={(e) => setAgaEmail(e.target.value)}
                />
              </div>

              <div className="input" style={{ margin: "20px auto" }}>
                <input
                  type="text"
                  placeholder="العنوان"
                  onChange={(e) => setAgaAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="input" style={{ margin: "20px auto" }}>
              <input
                type="text"
                placeholder={agaType === "فرد" ? 'رقم الهوية' : agaType === 'مؤسسة' ? 'رقم السجل التجاري' : 'رقم السجل التجاري'}
                onChange={(e) => setAgaCommercialRegister(e.target.value)}
              />
            </div>

            <button onClick={handleAga}>اضف العميل</button>
          </div>
        </Modal>
      )}
      {courtModal && (
        <Modal>
          <div className="modal-content">
            <img src={Cancelbtn} onClick={() => setCourtModal(false)} alt="" />
            <div className="input" style={{ margin: "20px auto" }}>
              <input
                type="text"
                placeholder="اسم المحكمة"
                onChange={(e) => setCourtName(e.target.value)}
              />
            </div>
            <button onClick={handleCourt}>اضف محكمة</button>
          </div>
        </Modal>
      )}
      {branchModal && (
        <Modal>
          <div className="modal-content">
            <img src={Cancelbtn} onClick={() => setBranchModal(false)} alt="" />
            <div className="input" style={{ margin: "20px auto" }}>
              <input
                type="text"
                placeholder="اسم المحكمة"
                onChange={(e) => setBranch(e.target.value)}
              />
            </div>
            <button onClick={handleCaseType}>اضف فئة القضية</button>
          </div>
        </Modal>
      )}
    </>
  );
}