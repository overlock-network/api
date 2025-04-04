//@ts-nocheck
import { LCDClient } from "@cosmology/lcd";
export const createLCDClient = async ({
  restEndpoint
}: {
  restEndpoint: string;
}) => {
  const requestClient = new LCDClient({
    restEndpoint
  });
  return {
    overlock: {
      crossplane: {
        v1beta1: new (await import("./crossplane/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      },
      storage: {
        v1beta1: new (await import("./storage/v1beta1/query.lcd")).LCDQueryClient({
          requestClient
        })
      }
    }
  };
};