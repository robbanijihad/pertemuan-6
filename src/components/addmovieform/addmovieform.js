import styles from "./addmovieform.module.css";

function AddMovieForm() {
  return (
    <div className={styles.container}>
      <section className={styles.addmovieform}>
        <div className={styles.addmovieform__left}>
            <img
                className={styles.addmovieform__image}
                src="https://picsum.photos/536/354"
                alt="placeholder"
            />
        </div>
        <div className="addmovieform__right">
            <h1>ADD MOVIE</h1>
            <form>
                <label className={styles.addmovieform__form}>
                    title
                    <input type="text" name="title" className={styles.addmovieform__input}/>
                </label>
                <label className={styles.addmovieform__form}>
                    year
                    <input type="text" name="title" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
