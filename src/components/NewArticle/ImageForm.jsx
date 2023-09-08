function ImageForm({ form, setForm }) {
  return (
    <>
      <label htmlFor="new-article-image-url-form">
        <h2>Image url</h2>
      </label>
      <p>Valid URLs only</p>
      <input
        type="text"
        id="new-article-image-url-form"
        className="new-article-form-item"
        value={form.article_img_url}
        onChange={(e) => {
          setForm((currForm) => {
            const copyForm = { ...currForm };
            copyForm.article_img_url = e.target.value;
            return copyForm;
          });
        }}
      />
    </>
  );
}

export default ImageForm;
