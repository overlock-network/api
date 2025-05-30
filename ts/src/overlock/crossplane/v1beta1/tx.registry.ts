//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateConfiguration, MsgUpdateConfiguration, MsgDeleteConfiguration, MsgCreateEnvironment, MsgUpdateEnvironment, MsgDeleteEnvironment, MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/overlock.crossplane.v1beta1.MsgCreateConfiguration", MsgCreateConfiguration], ["/overlock.crossplane.v1beta1.MsgUpdateConfiguration", MsgUpdateConfiguration], ["/overlock.crossplane.v1beta1.MsgDeleteConfiguration", MsgDeleteConfiguration], ["/overlock.crossplane.v1beta1.MsgCreateEnvironment", MsgCreateEnvironment], ["/overlock.crossplane.v1beta1.MsgUpdateEnvironment", MsgUpdateEnvironment], ["/overlock.crossplane.v1beta1.MsgDeleteEnvironment", MsgDeleteEnvironment], ["/overlock.crossplane.v1beta1.MsgCreateProvider", MsgCreateProvider], ["/overlock.crossplane.v1beta1.MsgUpdateProvider", MsgUpdateProvider], ["/overlock.crossplane.v1beta1.MsgDeleteProvider", MsgDeleteProvider]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createConfiguration(value: MsgCreateConfiguration) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgCreateConfiguration",
        value: MsgCreateConfiguration.encode(value).finish()
      };
    },
    updateConfiguration(value: MsgUpdateConfiguration) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateConfiguration",
        value: MsgUpdateConfiguration.encode(value).finish()
      };
    },
    deleteConfiguration(value: MsgDeleteConfiguration) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteConfiguration",
        value: MsgDeleteConfiguration.encode(value).finish()
      };
    },
    createEnvironment(value: MsgCreateEnvironment) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgCreateEnvironment",
        value: MsgCreateEnvironment.encode(value).finish()
      };
    },
    updateEnvironment(value: MsgUpdateEnvironment) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateEnvironment",
        value: MsgUpdateEnvironment.encode(value).finish()
      };
    },
    deleteEnvironment(value: MsgDeleteEnvironment) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteEnvironment",
        value: MsgDeleteEnvironment.encode(value).finish()
      };
    },
    createProvider(value: MsgCreateProvider) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgCreateProvider",
        value: MsgCreateProvider.encode(value).finish()
      };
    },
    updateProvider(value: MsgUpdateProvider) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateProvider",
        value: MsgUpdateProvider.encode(value).finish()
      };
    },
    deleteProvider(value: MsgDeleteProvider) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteProvider",
        value: MsgDeleteProvider.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createConfiguration(value: MsgCreateConfiguration) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgCreateConfiguration",
        value
      };
    },
    updateConfiguration(value: MsgUpdateConfiguration) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateConfiguration",
        value
      };
    },
    deleteConfiguration(value: MsgDeleteConfiguration) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteConfiguration",
        value
      };
    },
    createEnvironment(value: MsgCreateEnvironment) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgCreateEnvironment",
        value
      };
    },
    updateEnvironment(value: MsgUpdateEnvironment) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateEnvironment",
        value
      };
    },
    deleteEnvironment(value: MsgDeleteEnvironment) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteEnvironment",
        value
      };
    },
    createProvider(value: MsgCreateProvider) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgCreateProvider",
        value
      };
    },
    updateProvider(value: MsgUpdateProvider) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateProvider",
        value
      };
    },
    deleteProvider(value: MsgDeleteProvider) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteProvider",
        value
      };
    }
  },
  fromPartial: {
    createConfiguration(value: MsgCreateConfiguration) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgCreateConfiguration",
        value: MsgCreateConfiguration.fromPartial(value)
      };
    },
    updateConfiguration(value: MsgUpdateConfiguration) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateConfiguration",
        value: MsgUpdateConfiguration.fromPartial(value)
      };
    },
    deleteConfiguration(value: MsgDeleteConfiguration) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteConfiguration",
        value: MsgDeleteConfiguration.fromPartial(value)
      };
    },
    createEnvironment(value: MsgCreateEnvironment) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgCreateEnvironment",
        value: MsgCreateEnvironment.fromPartial(value)
      };
    },
    updateEnvironment(value: MsgUpdateEnvironment) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateEnvironment",
        value: MsgUpdateEnvironment.fromPartial(value)
      };
    },
    deleteEnvironment(value: MsgDeleteEnvironment) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteEnvironment",
        value: MsgDeleteEnvironment.fromPartial(value)
      };
    },
    createProvider(value: MsgCreateProvider) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgCreateProvider",
        value: MsgCreateProvider.fromPartial(value)
      };
    },
    updateProvider(value: MsgUpdateProvider) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgUpdateProvider",
        value: MsgUpdateProvider.fromPartial(value)
      };
    },
    deleteProvider(value: MsgDeleteProvider) {
      return {
        typeUrl: "/overlock.crossplane.v1beta1.MsgDeleteProvider",
        value: MsgDeleteProvider.fromPartial(value)
      };
    }
  }
};