function ContentForm({ form, setForm }) {
  return (
    <>
      <label htmlFor="new-article-content-form">
        <h2>Content</h2>
      </label>
      <p>Between 10 and 4000 characters</p>
      <div className="new-article-form-item">
        <textarea
          id="new-article-content-form"
          cols="30"
          rows="10"
          value={form.body}
          onChange={(e) => {
            setForm((currForm) => {
              const copyForm = { ...currForm };
              copyForm.body = e.target.value;
              return copyForm;
            });
          }}
        ></textarea>
        <span>{form.body.length}/4000</span>
      </div>
    </>
  );
}

export default ContentForm;
