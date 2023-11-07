import { UserServices } from "../../modules/users/users.service";

const queries = {};
const mutations = {
  createUser: UserServices.testUser,
};
const resolvers = {
  queries,
  mutations,
};
export default resolvers;
