import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "ninego0611@gmail.com",       // 서비스 ID
        "template_qcwmvnt",           // 템플릿 ID
        form.current,
        "6L8-YGPVd2-hiam5F"           // 공개 키
      )
      .then(
        (result) => {
          alert("메일이 성공적으로 전송되었습니다!");
          form.current.reset(); // 입력값 초기화
        },
        (error) => {
          alert("메일 전송에 실패했습니다. 다시 시도해주세요.");
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>문의하기</h2>

      <label>이름</label>
      <input type="text" name="name" required />

      <label>이메일</label>
      <input type="email" name="email" required />

      <label>문의 내용</label>
      <textarea name="message" rows="5" required />

      <button type="submit">보내기</button>
    </form>
  );
}

export default ContactForm;
