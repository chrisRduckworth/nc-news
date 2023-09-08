function TitleForm({ form, setForm }) {
  return (
    <>
      <label htmlFor="new-article-title-form">
        <h2>Title</h2>
      </label>
      <p>Between 5 and 100 characters</p>
      <input
        type="text"
        id="new-article-title-form"
        className="new-article-form-item"
        value={form.title}
        onChange={(e) => {
          setForm((currForm) => {
            const copyForm = { ...currForm };
            copyForm.title = e.target.value;
            return copyForm;
          });
        }}
      />
    </>
  );
}

export default TitleForm;
