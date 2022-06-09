const setForbiddenFields = (docType, form) => {
  switch (docType) {
    case "custom":
      form.text.disabled = false;
      form.image.disabled = true;
      form.image.value = "";
      break;
    case "advanced":
      form.image.disabled = false;
      form.text.disabled = false;
      break;
    default:
      form.text.disabled = true;
      form.text.value = "";
      form.image.disabled = true;
      form.image.value = "";
      break;
  }
  return form;
};

const checkForm = (docType, form) => {
  form.valid.value = true;
  form = checkEmptyField(form, "title");
  form = checkEmptyField(form, "type");

  if (["custom", "advanced"].includes(docType)) {
    form = checkEmptyField(form, "text");
  } else {
    form.text.errored = false;
    form.text.errorText = "";
  }
  if (docType === "advanced") {
    form = checkEmptyField(form, "image");
  } else {
    form.image.errored = false;
    form.image.errorText = "";
  }

  if (form.valid.value) {
    const now = new Date();
    form.date.value = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
  }
  return form;
};

const checkEmptyField = (form, key) => {
  if (!form[key].value) {
    form.valid.value = false;
    form[key].errored = true;
    form[key].errorText = "form.error.mandatory";
  } else {
    form[key].errored = false;
    form[key].errorText = "";
  }
  return form;
};

const clearForm = (form) => {
  ["type", "title", "date", "text", "image"].forEach((field) => {
    form[field].value = "";
  });
  form.type.value = "-1";
  form.image.disabled = true;
  form.text.disabled = true;
  return form;
};

const extractDocument = (newId, form) => {
  return {
    id: newId,
    title: form.title.value,
    date: form.date.value,
    type: parseInt(form.type.value),
    image: form.image.value,
    text: form.text.value,
  };
};

const checkUrl = (targetUrl) => {
  let url;

  try {
    url = new URL(targetUrl);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
};

const formService = {
  setForbiddenFields,
  checkForm,
  checkEmptyField,
  clearForm,
  extractDocument,
  checkUrl,
};

export default formService;
