import { UserServices } from "../../modules/users/users.service";

const queries = {
  userByEmail: UserServices.userByEmail,
};
const mutations = {
  signUp: UserServices.signUp,
};
const userResolvers = {
  queries,
  mutations,
};
export default userResolvers;
