const validSignUpData = (email, password, name) => {
  const vaildEmail = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const vaildPasseword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  const vaildName = /^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{3,}){0,}$/.test(name);

  if (!vaildEmail) return "Email is not vaild";
  if (!vaildPasseword) return "Password is not vaild";
  if (!vaildName) return "Name is not vaild";

  return null;
};
const validSignIpData = (email, password) => {
  const vaildEmail = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  );
  const vaildPasseword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!vaildEmail) return "Email is not vaild";
  if (!vaildPasseword) return "Password is not vaild";

  return null;
};

export { validSignUpData, validSignIpData };
