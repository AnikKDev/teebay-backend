import { UserServices } from "../../modules/users/users.service";

const queries = {};
const mutations = {
  signUp: UserServices.signUp,
};
const resolvers = {
  queries,
  mutations,
};
export default resolvers;
