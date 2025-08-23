import * as Yup from "yup";

export const linkSchema = Yup.object().shape({
  webUrl: Yup.string()
    .required("Please add a link")
    .matches(
      /\b((https?:\/\/)?(www\.)?([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,})(:[0-9]+)?(\/[^\s]*)?\b/,
      "Please add a link"
    )
    .test("not-shortened", "This link is invalid", (value) => {
      if (!value) return false;
      const res = !value.includes("tinyurl.com");
      console.log(value);
      
      return res;
    }),
});
