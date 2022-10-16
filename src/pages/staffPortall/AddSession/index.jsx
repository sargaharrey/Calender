import Navigation from "@/components/Navigation";
import ArabicDate from "@/utils/ArabicDate";
import useValidation from "@meksiabdou/usevalidation";

export function AddSession() {
  const inputs = [
    {
      name: "",
      type: "text",
      defaultValue: "",
      placeholder: "وقائع الجلسة",
      required: true,
      //regex: '',
      messages: {
        required: "حقل وقائع الجلسة مطلوب",
      },
    },
    {
      name: "",
      type: "text",
      defaultValue: "",
      placeholder: "رقم الجلسة",
      required: true,
      //regex: '',
      messages: {
        required: "حقل رقم الجلسة مطلوب",
      },
    },
    {
      name: "",
      type: "text",
      defaultValue: "",
      placeholder: "الجهة",
      required: true,
      //regex: '',
      messages: {
        required: "حقل الجهة مطلوب",
      },
    },
    {
      name: "",
      type: "text",
      defaultValue: "",
      placeholder: "متطلبات المحامي",
      required: true,
      //regex: '',
      messages: {
        required: "حقل متطلبات المحامي مطلوب",
      },
    },
    {
      name: "",
      type: "text",
      defaultValue: "",
      placeholder: "متطلبات العميل",
      required: true,
      //regex: '',
      messages: {
        required: "حقل متطلبات العميل مطلوب",
      },
    },
  ];

  const { refForm, data, handelOnChange, handelOnSubmit, errors } =
    useValidation(inputs);

  const onSubmit = (status) => {
    if (status) {
    }
  };

  return (
    <>
      <Navigation />
      <div className="addSession-container">
        <ArabicDate />
        <div>
          <h1 className="addSession-title"> إضافة جلسة جديدة للقضية : gf </h1>
        </div>
        <form method="post" onSubmit={(e) => handelOnSubmit(e, onSubmit)}>
          <div className="addSession-form">
            <input
              type="text"
              className="session-type-input mt-2"
              placeholder="وقائع الجلسة"
            />
            <div className="session-middle">
              <div className="checkboxes">
                <label>
                  الضبط
                  <input type="checkbox" className="checkbox" id="checkbox1" />
                </label>
                <label>
                  مذكرة
                  <input type="checkbox" className="checkbox" id="checkbox1" />
                </label>
                <label>
                  حضور الموكل
                  <input type="checkbox" className="checkbox" id="checkbox1" />
                </label>
                <label>
                  رقم التبليغ
                  <input type="checkbox" className="checkbox" id="checkbox1" />
                </label>
                <label>
                  مراجعة
                  <input type="checkbox" className="checkbox" id="checkbox1" />
                </label>
                <label>
                  مستندات
                  <input type="checkbox" className="checkbox" id="checkbox1" />
                </label>
              </div>
              <div className="inputs">
                <input
                  type="text"
                  className="session-type-input mt-2"
                  placeholder="الجهة"
                />
                <input
                  type="text"
                  className="session-type-input mt-2"
                  placeholder="رقم الجلسة"
                />
              </div>
            </div>
            <div className="session-bottom">
              <input
                type="text"
                className="session-type-input mt-2"
                placeholder="متطلبات المحامي"
              />
              <input
                type="text"
                className="session-type-input mt-2"
                placeholder="متطلبات العميل"
              />
            </div>
            <label>
              اضافة جلسة قادمة
              <input type="checkbox" className="addcheck" />
            </label>
            <button type="submit" className="addSession-btn">حفظ</button>
          </div>
        </form>
      </div>
    </>
  );
}
