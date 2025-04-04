//@ts-nocheck
import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateRegistry, MsgUpdateRegistry, MsgDeleteRegistry } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/overlock.storage.v1beta1.MsgCreateRegistry", MsgCreateRegistry], ["/overlock.storage.v1beta1.MsgUpdateRegistry", MsgUpdateRegistry], ["/overlock.storage.v1beta1.MsgDeleteRegistry", MsgDeleteRegistry]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createRegistry(value: MsgCreateRegistry) {
      return {
        typeUrl: "/overlock.storage.v1beta1.MsgCreateRegistry",
        value: MsgCreateRegistry.encode(value).finish()
      };
    },
    updateRegistry(value: MsgUpdateRegistry) {
      return {
        typeUrl: "/overlock.storage.v1beta1.MsgUpdateRegistry",
        value: MsgUpdateRegistry.encode(value).finish()
      };
    },
    deleteRegistry(value: MsgDeleteRegistry) {
      return {
        typeUrl: "/overlock.storage.v1beta1.MsgDeleteRegistry",
        value: MsgDeleteRegistry.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createRegistry(value: MsgCreateRegistry) {
      return {
        typeUrl: "/overlock.storage.v1beta1.MsgCreateRegistry",
        value
      };
    },
    updateRegistry(value: MsgUpdateRegistry) {
      return {
        typeUrl: "/overlock.storage.v1beta1.MsgUpdateRegistry",
        value
      };
    },
    deleteRegistry(value: MsgDeleteRegistry) {
      return {
        typeUrl: "/overlock.storage.v1beta1.MsgDeleteRegistry",
        value
      };
    }
  },
  fromPartial: {
    createRegistry(value: MsgCreateRegistry) {
      return {
        typeUrl: "/overlock.storage.v1beta1.MsgCreateRegistry",
        value: MsgCreateRegistry.fromPartial(value)
      };
    },
    updateRegistry(value: MsgUpdateRegistry) {
      return {
        typeUrl: "/overlock.storage.v1beta1.MsgUpdateRegistry",
        value: MsgUpdateRegistry.fromPartial(value)
      };
    },
    deleteRegistry(value: MsgDeleteRegistry) {
      return {
        typeUrl: "/overlock.storage.v1beta1.MsgDeleteRegistry",
        value: MsgDeleteRegistry.fromPartial(value)
      };
    }
  }
};