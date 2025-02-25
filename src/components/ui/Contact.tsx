import { useForm, ValidationError } from "@formspree/react";
import styles from '../../styles/Contact.module.scss'

function ContactForm() {
   const [state, handleSubmit] = useForm("https://formspree.io/f/mbldvbja");

   if (state.succeeded) {
      return <p>Thanks for messaging!</p>;
   }

   return (
      <section className={styles.contact}>
         <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" type="name" name="name" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" disabled={state.submitting}>Send</button>
         </form>
      </section>
   );
}

export default ContactForm;