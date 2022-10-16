import Navigation from '@/components/Navigation';
import React, { useState } from 'react'
import MinistryLogo from "../../../assist/images/Ministry_of_Justice.png";
import Angle from '../../../assist/icons/angle_down_black.svg';
import Modal from '@/utils/modal/Modal';
import Cancelbtn from "../../../assist/icons/cancel-grey.svg";


export default function CommercialFiles() {
    const [dropDown, setDropDown] = useState(false)
    const [modal, setModal] = useState(false)
    const [secModal, setSecModal] = useState(false)



  return (
    <>
      <Navigation />
      <div className="query">
        <span className="title">
          <img
            src={Angle}
            alt="Angle"
            style={{ cursor: "pointer" }}
            onClick={() => setDropDown(!dropDown)}
          />
          بيانات السجل التجاري
        </span>
        {dropDown && (
          <ul className="drop-menu">
            <li onClick={() => setModal(true)}>
              السجلات التابعة للسجل او الهوية
            </li>
            <li onClick={() => setSecModal(true)}>
              التحقق من الشراكة / امتلاك كيان للسجلات التجارية
            </li>
          </ul>
        )}
        <div className="commercials-inputs">
          <div className="query-label">
            <span>
              <span className="inner-span">*</span>رقم السجل التجاري - الرقم
              الموحد
            </span>
            <input
              className="customers-input"
              type="text"
              placeholder="نص العنصر النائب"
            />
          </div>
          <div className="query-label">
            <span>سبب الاستعلام</span>
            <input
              className="customers-input"
              type="text"
              placeholder="نص العنصر النائب"
            />
          </div>
          <div className="query-label">
            <button className="result-btn">النتيجة</button>
          </div>
        </div>

        <div className="query-result mt-24">
          <button>PDF تحميل النتائج</button>
          <div className="estate-result-content">
            <img className="Ministry" src={MinistryLogo} alt="ministry-logo" />
            <h3 className='text-right'>بيانات السجل التجاري العامة</h3>
            <div className="query-inputs">
              <div className="query-label">
                <span>الرقم التسلسلي</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="4060176"
                />
              </div>
              <div className="query-label">
                <span> الكود</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="124357547"
                />
              </div>
            </div>
            <div className="query-inputs">
              <div className="query-label">
                <span>حالة الوكالة</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="نشيطة"
                />
              </div>
              <div className="query-label">
                <span>تاريخ الاصدار</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="1438/05/06"
                />
              </div>
            </div>
            <div className="query-inputs">
              <div className="query-label">
                <span>المساحة كتابة </span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="مئتين الف متر مربعا"
                />
              </div>
              <div className="query-label">
                <span>المساحة</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="200000"
                />
              </div>
            </div>
            <div className="query-inputs">
              <div className="query-label">
                <span>اسم المحكمة </span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="كتابة العدل الاولى بالرياض"
                />
              </div>
              <div className="query-label">
                <span>كود المحكمة</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value=""
                />
              </div>
            </div>
            <div className="query-inputs">
              <div className="query-label">
                <span>هل الصك وقف </span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="لا"
                />
              </div>
              <div className="query-label">
                <span>هل الصك محجوز</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="لا"
                />
              </div>
            </div>
            <div className="query-inputs">
              <div className="query-label">
                <span>هل الصك عليه وصية </span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="لا"
                />
              </div>
              <div className="query-label">
                <span>هل الصك مرهون</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                  value="لا"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {modal && (
        <Modal>
          <div className="modal-content">
            <img src={Cancelbtn} onClick={() => setModal(false)} alt="" />
            <span className="modal-query">هل يمتلك سجلات تابعة؟</span>
            <div className="modal-input">
              <input
                className="query-input"
                type="text"
                placeholder="لا يمتلك / يملك سجلات تابعة"
              />
            </div>
          </div>
        </Modal>
      )}

      {secModal && (
        <Modal>
          <div className="secmodal-content">
            <img src={Cancelbtn} onClick={() => setSecModal(false)} alt="" />

            <span className="secmodal-query">
              التحقق من شراكة / امتلاك كيان السجلات التجارية
            </span>
            <div className="commercials-inputs">
              <div className="query-label">
                <span>
                  <span className="inner-span">*</span>رقم المرجع
                </span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                />
              </div>
              <div className="query-label">
                <span>سبب الاستعلام</span>
                <input
                  className="customers-input"
                  type="text"
                  placeholder="نص العنصر النائب"
                />
              </div>
            </div>
            <div className="query-radios">
              <span> نوعية رقم المرجع</span>
              <div className="query-radio">
                <label>
                  الرقم الموحد
                  <input type="radio" name="query-radio" id="query-radio-1" />
                </label>
                <label>
                  جواز سفر
                  <input type="radio" name="query-radio" id="query-radio-1" />
                </label>
                <label>
                  هوية وطنية
                  <input type="radio" name="query-radio" id="query-radio-1" />
                </label>
                <label>
                  هوية اقامة
                  <input type="radio" name="query-radio" id="query-radio-1" />
                </label>
                <label>
                  رقم السجل التجاري
                  <input type="radio" name="query-radio" id="query-radio-1" />
                </label>
              </div>
              <span className="inner-span">لا تترك رقم المرجع بلا اختيار</span>
            </div>
            <button>استعلام</button>
          </div>
        </Modal>
      )}
    </>
  );
}
