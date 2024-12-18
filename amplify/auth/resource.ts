import { defineAuth } from "@aws-amplify/backend"

export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  userAttributes: {
    fullname: {
      mutable: true,
      required: true,
    },
    phoneNumber: {
      mutable: true,
      required: true,
    },
  },
})
