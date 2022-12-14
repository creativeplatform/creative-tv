import { configureSIWE } from "connectkit-next-siwe";

export const siwe = configureSIWE({
  apiRoutePrefix: "/api/siwe",
  session: { password: "3aCJxxKaMGahNmK.gpWJkb-@Cvn*xDRm" }
});