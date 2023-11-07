const testUser = async (
  _: any,
  { firstName: string }: Record<string, unknown>
) => {
  return "randomId";
};

export const UserServices = {
  testUser,
};
