import { configureSIWE } from "connectkit-next-siwe";

export const siwe = configureSIWE({
  apiRoutePrefix: "/api/siwe",
  session: { password: process.env.NEXT_PUBLIC_SESSION_SECRET }
});