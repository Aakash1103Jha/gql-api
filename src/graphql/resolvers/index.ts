import { addDataToStore, getDataById, getDataFromStore } from "../../helpers/store";

const resolvers = {
  Query: {
    getAllUsers() {
      return getDataFromStore();
    },
    getUserById(id: string) {
      return getDataById(id);
    },
  },
  Mutation: {
    createUser(_: any, args: any) {
      return addDataToStore(args);
    },
  },
};

export default resolvers;
