import styles from './Form.module.scss'

function Form() {

   const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const response = await fetch('https://formspree.io/f/xgvwwwww', {
         method: 'POST',
         body: new FormData(e.currentTarget)
      })
   }

   return (
      <>
         <h1 id="connect">Connect:</h1>
         <section className={styles.form}>
            <h2>Reach Out</h2>
            <p>
               Have a question or comment? Feel free to reach out through the form below.
            </p>
            <form onSubmit={handleSubmit} method="post" autoComplete="off">
               <input type="text" id="firstname" name="firstname" placeholder="First Name" minLength={0} required />
               <input type="text" name="lastname" id="lastname" placeholder="Last Name" required />
               <br />
               <input type="email" id="email" name="email" placeholder="user@example.com" required />
               <br />
               <textarea name="message" id="message" placeholder="Message (min 20 characters)" minLength={20} required></textarea>
               <br />
               <button type="submit" id="submit">Submit</button>
            </form>
         </section>
      </>
   )
}

export default Form