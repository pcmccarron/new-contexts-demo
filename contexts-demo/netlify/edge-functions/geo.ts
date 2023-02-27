import type { Config, Context } from "https://edge.netlify.com/";

export default async (request: Request, context: Context) => {
  return Response.json({
    city: context.geo.city,
    timezone: context.geo.timezone,
  });
};
export const config: Config = {path: "/session-data"}
