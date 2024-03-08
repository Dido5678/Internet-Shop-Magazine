import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import styles from "./contact.module.scss";


interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  textarea: string;
}

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [textarea, setTextarea] = useState<string>("");

  useEffect(() => {
    const storedData = localStorage.getItem("contactFormData");
    if (storedData) {
      const { name, email, subject, textarea } = JSON.parse(storedData) as ContactFormData;
      setName(name);
      setEmail(email);
      setSubject(subject);
      setTextarea(textarea);
    }
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'subject':
        setSubject(value);
        break;
      case 'textarea':
        setTextarea(value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Save data to local storage
    const formData: ContactFormData = { name, email, subject, textarea };
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nTextarea: ${textarea}`);
  }

  return (
    <section className={styles.contact}>
       <div className={styles.contact_container}>
            <div className={styles.contact_list}>
              <div className={styles.contact_item}>
                <h3 className={styles.contact_title}>Contact Information</h3>
                 <div className={styles.contact_border}>
                  <p className={styles.contact_text}>Address: 198 West 21th Street, Suite 721 New York NY 10016</p>
                </div>
                <div className={styles.contact_border}>
                  <p className={styles.contact_text}>Phone: <span>+ 1235 2355 98</span> </p>
                </div>
                <div className={styles.contact_border}>
                  <p className={styles.contact_text}>Email:<span>info@yoursite.com</span> </p>
                </div>
                <div className={styles.contact_border}>
                  <p className={styles.contact_text}>Website <span>yoursite.com</span> </p>
                </div>
              </div>
              <div className={styles.contact_item}>
                  <form onSubmit={handleSubmit} className={styles.contact_form}>
                    <div>
                      <input
                        name="name"
                        type="text"
                        value={name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className={styles.contact_inp} />
                    </div>
                    <div>
                      <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        className={styles.contact_inp} />
                    </div>
                    <div>
                      <input
                        name="subject"
                        type="text"
                        value={subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                        className={styles.contact_inp} />
                    </div>
                    <div>
                      <textarea
                        name="textarea"
                        value={textarea}
                        cols={40}
                        rows={7}
                        onChange={handleInputChange}
                        className={styles.contact_textarea}
                        placeholder="Message">
                      </textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className={styles.contact_submit}>Send Message</button>
                    </div>
                  </form>
              </div>
            </div>
      </div>
   </section>
  );
};

export default Contact;

